//express 라이브러리를 가지고 옴 안될 경우 npm install express
var express = require('express'); 
var bodyParser = require('body-parser');
var dataControl = require('./data_control');
var dbControl = require('./db_control');

var app = express(); 

app.use(bodyParser.json())
app.post('/insert',function(req,res){

        var company = req.body.companyInfo;
        var passQualification = req.body.passQualification;
     
        var data = dataControl.query_data_make(req.body);
        dbControl.company_data_insert(data);
        res.send("nothing");

});

//express 변수 안에 있는 속성값을 사용하기 위해 app에 저장


app.get(function(res)
{
    console.log("여기 ! " + res)
})



//포트 번호 및 server 변수 할당.
var server = app.listen(3000, function(){ 
    console.log('Server is running!'); 
})
