const express = require('express');
const app = express();

app.use(function(req, res, next){
    console.log("Heelo fron Middleware");
    next();
})

app.get('/', function(req, res){
    res.send("From NS LONI");
});

app.get('/ns', function(req, res){
    res.send("HELLO NS");
});

app.listen(3000, function(){
    console.log("Server listening on port 3000");
});
/*
Server listening on port 3000
Heelo fron Middleware

------------> O/P on the Chrome...
*/