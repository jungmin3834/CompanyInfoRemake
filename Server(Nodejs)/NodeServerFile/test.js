var http = require('http'); 

http.createServer(function (req, res) { 
    res.writeHead(200, {'Content-Type': 'text/planin'});
    res.end('Hello World\n'); }
).listen(3333, '127.0.0.1'); 

console.log('Server running at http://127.0.0.1:3333/');


module.exports = function(app, fs)
{

     app.get('/',function(req,res){
         res.render('index', {
             title: "MY HOMEPAGE",
             length: 5
         })
     });



    app.get('/list', function (req, res) {
       fs.readFile( __dirname + "/../data/" + "user.json", 'utf8', function (err, data) {
           console.log( data );
           res.end( data );
       });
    })


}