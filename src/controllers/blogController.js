const Blog = require('../models/blog')

const blogIndex = (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => res.render('index', { title: "All blogs", blogs: result }))
    .catch(err => console.log(err));
};

const blogDetails = (req, res) => {

}

module.exports = { blogIndex, blogDetails }