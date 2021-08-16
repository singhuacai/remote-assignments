const express = require("express");

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.end("<h1> Hello, My Server! </h1>");
});

app.listen('3000',() =>{
    console.log('My Server is running on localhost: 3000!');
});