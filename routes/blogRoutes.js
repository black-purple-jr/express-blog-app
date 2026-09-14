const express = require("express");
const router = express.Router();
const Blog = require('../src/models/blog')
const blogController = require('../src/controllers/blogController');


router.get("/blogs", blogController.Index);
router.post('/blogs', blogController.Save);
router.get('/blogs/new', blogController.New);
router.get("/blogs/:id", blogController.Details);
router.delete('/blogs/:id', blogController.Delete);

module.exports = router;