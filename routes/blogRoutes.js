const express = require("express");
const router = express.Router();
const Blog = require('../src/models/blog')
const blogController = require('../src/controllers/blogController');


router.get("/blogs", blogController.blogIndex);

router.post('/blogs', (req, res) => {
  const blog = new Blog(req.body);

  blog.save()
    .then(result => res.redirect('/blogs'))
    .catch(err => console.log(err))
});

router.get('/blogs/new', (req, res) => {
  res.render('new', { title: "New Blog" });
})

router.get("/blogs/:id", blogController.blogDetails);
router.delete('/blogs/:id', blogController.blogDelete);

module.exports = router;