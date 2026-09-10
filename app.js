const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const Blog = require('./src/models/blog')
const port = 3000;


// initialize express app
const app = express();

// Connection to mongoDB
const dbURI = "mongodb://localhost:27017/express-blogs";
mongoose.connect(dbURI)
  .then(res => app.listen(port))
  .catch(err => console.log(err))


// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// register view engine
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


// routes

app.get('/', (req, res) => {
  res.redirect("/blogs");
})

// blog routes

app.get("/blogs", (req, res) => {
  Blog.find()
    .then(result => res.render('index', { title: "All blogs", blogs: result }))
    .catch(err => console.log(err));
});

app.post('/blogs', (req, res) => {
  const blog = new Blog(req.body);

  blog.save()
    .then(result => res.redirect('/blogs'))
    .catch(err => console.log(err))
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => res.render("details", { blog: result, title: blog.title }))
    .catch(err => console.log(err));
});

app.get("/about", (req, res) => {
  res.render('about', { title: "About" });
});

app.get('/blogs/new', (req, res) => {
  res.render('new', { title: "New Blog" });
})


// 404 Not Found
app.use((req, res) => {
  res.status(404).render('404', { title: "Page Not Found" });
});
