const express = require('express');
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

// , { useNewUrlParser: true, useUnifiedTopology: true }

app.use(express.static('public'));

// register view engine
app.set('views', path.join(__dirname,'src', 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));

// mongoose sandbox routes

app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: "New blog",
    snippet: 'About this new blog',
    body: "More about this new blog"
  });

  blog.save()
    .then(result => res.send(result))
    .catch(err => console.log(err));

});

app.get('/all-blogs', (req, res) => {
  Blog.find();
})

// routes
app.get("/", (req, res) => {
  const blogs = [
    { title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "Mario likes stars", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur" }
  ]

  res.render('index', { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render('about', { title: "About" });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: "Create Blog" });
})

// redirects
app.get("/home", (req, res) => {
  res.redirect("/");
});

// 404 Not Found
app.use((req, res) => {
  res.status(404).render('404', { title: "Page Not Found" });
});
