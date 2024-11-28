//  npm i figlet

var name = require("figlet");

name("NSLONi", function(err, data){
    if(err){
        console.log("Error.....");
        console.dir(err);
        return;
    }
    console.log(data);
});


/*
 _   _ ____  _     ___  _   _ _ 
| \ | / ___|| |   / _ \| \ | (_)
|  \| \___ \| |  | | | |  \| | |
| |\  |___) | |__| |_| | |\  | |
|_| \_|____/|_____\___/|_| \_|_|

*/