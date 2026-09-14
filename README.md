# Blog app

## Overview

This is a simple blog app built with [Express.js](https://expressjs.com/) that lets you add and delete blog posts. There's nothing particularly special about it; I built this mini-project mainly to practice what I’ve learned about Express.js. I also added some Tailwind CSS so the UI won't look awful.

## Features

* Adding blog posts.
* Deleting blog posts.
* Custom 404 page.

# Technology Used

* Node v26.8.1+
* Express
* Tailwind CSS v4
* EJS
* MongoDB

# Packages

* `ejs v6.0.1`: a view / template engine that renders data inside vues dynamicly.
* `express v5.2.1`: a web framework for Node.js used to build web applications and APIs.
* `mongoose v9.9.5`: an ODM (Object Data Modeling) library for MongoDB and Node.js.
* `nodemon v3.1.14`: automatically restarts the application when changes are detected.
* `morgan v1.12.0`: an HTTP request logger that shows information such as the HTTP method, route, status code, and response time.

# Quick Start

## Prerequisites

* Git
* Node.js
* NPM (comes with Node.js)
* MongoDB

## Installation

### 1. Clone the repo locally

```bash
git clone https://github.com/black-purple-jr/express-blog-app.git
```

### 2. Install the necessary dependencies

```bash
npm install
```

### 3. Run a local dev server

```bash
npm run dev
```

### 4. Enter the URL (http://localhost:3000) on a browser