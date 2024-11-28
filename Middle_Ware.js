// Middle_Ware.js

const express = require('express');
const app = express();

// //Middle-Ware
app.use(function(req, res, next){
   console.log("NS LONI");
    next(); 
});


app.get('/', function(req, res){
    res.send("Hello EXPRESS");
});

app.get('/profile', function(req, res){
    res.send("Hello NS LONI YOU HAVE GRATE DAY TODAY NIGHT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
});

app.listen(3000);