const express = require('express');
const path = require('path');


// initialize express app
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// register view engine
app.set('views', path.join(__dirname,'src', 'views'));
app.set('view engine', 'ejs');

const port = 3000;
app.listen(port);

// listen for requests
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
