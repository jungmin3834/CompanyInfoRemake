
var mainStart = function(){
     var db = require('./Control/DbControl');
    console.log(db.DB.connectDB());
     //console.log("Server Start. ");
 }

mainStart();



