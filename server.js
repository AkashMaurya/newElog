const express = require('express');
const app = express();
const ejs = require("ejs");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
    res.render("index", {
        title: 'Home Page'
    });
});

app.get('/about', async (req, res) => {
    res.render("About", {
        title: "About Page"
    });
});
app.get('/contact', async (req, res) => {
    res.render("Contact", {
        title: "Contact Page"
    });
});

app.get('/login', async (req, res) => {
    res.render("Login", {
        title: "Login Page"
    });
});


app.get('/*', async (req, res) => {
    await res.render("404", {
        title: "Error Page 404",
        heading: `An Error has Occurred This page does not Exist`
        })
})

app.listen(PORT, async (req, res) => {
    console.log(`Port is Running ${PORT}`);
})