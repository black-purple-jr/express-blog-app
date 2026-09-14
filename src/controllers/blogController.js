const Blog = require('../models/blog')

const Index = (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => res.render('index', { title: "All blogs", blogs: result }))
    .catch(err => console.log(err));
};

const Details = (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then(result => res.render("details", { blog: result, title: result.title }))
    .catch(err => res.status(404).render('notFound', { title: "Blog Not Found", statusCode: res.statusCode }));
};

const New = (req, res) => {
  res.render('new', { title: "New Blog" });
}

const Save = (req, res) => {
  const blog = new Blog(req.body);
  
    blog.save()
      .then(result => res.redirect('/blogs'))
      .catch(err => console.log(err));
}

const Delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(result => res.json({ redirect: "/blogs" }))
    .catch(err => console.log(err));
}

module.exports = { Index, New, Save, Details, Delete }