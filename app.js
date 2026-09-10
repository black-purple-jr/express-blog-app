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
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));

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

app.get("/about", (req, res) => {
  res.render('about', { title: "About" });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: "Create Blog" });
})


// 404 Not Found
app.use((req, res) => {
  res.status(404).render('404', { title: "Page Not Found" });
});
