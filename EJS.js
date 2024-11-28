const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const tagline = "No programming concept is complete without a cute animal mascot.";
const mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
];

app.get('/', function(req, res) {
    res.render('index.ejs', {
        tagline: tagline,
        mascots: mascots
    });
});

app.listen(8080, function() {
    console.log('Server is listening on port 8080');
});