const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const blogRoutes = require('./routes/blogRoutes');
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
});

app.get("/about", (req, res) => {
  res.render('about', { title: "About" });
});

// blog routes
app.use(blogRoutes);

// 404 Not Found
app.use((req, res) => {
  res.status(404).render('404', { title: "Page Not Found" });
});
