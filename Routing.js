const express = require('express');
const app = express();

// //Middle-Ware
app.use(function(req, res, next){
   console.log("NS LONI");
    next(); 
});

//Routing
app.get('/', function(req, res){
    res.send("Hello EXPRESS");
});

app.get('/profile', function(req, res){
    res.send("Hello NS LONI YOU HAVE GRATE DAY TODAY NIGHT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
});

app.get('/a', function(req, res){
    res.send("Hello A");
});

app.get('/b', function(req, res){
    res.send("Hello B");
});

app.get('/c', function(req, res){
    res.send("Hello C");
});

app.listen(3000);