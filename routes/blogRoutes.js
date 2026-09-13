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

router.get("/blogs/:id", (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then(result => res.render("details", { blog: result, title: result.title }))
    .catch(err => console.log(err));
});

router.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(result => res.json({ redirect: "/blogs" }))
    .catch(err => console.log(err))
});

module.exports = router;