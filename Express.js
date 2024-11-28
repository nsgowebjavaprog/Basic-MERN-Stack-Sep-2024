//Express_JS.js

const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("Hello EXPRESS");
});

app.listen(3000);