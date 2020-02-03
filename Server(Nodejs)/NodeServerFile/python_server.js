//express 라이브러리를 가지고 옴 안될 경우 npm install express
const express = require('express'); 
const bodyParser = require('body-parser');
const eventControl = require('./event_control');

var app = express(); 

app.use(bodyParser.json())

app.post('/insert',function(req,res){
    eventControl.insertManager(req,res);
});

app.post('/selectall',function(req,res){
    eventControl.selectAllManager(req,res);
});

app.post('/update',function(req,res){
    eventControl.updateManager(req,res);
});

app.post('/delete',function(req,res){
    eventControl.deleteManager(req,res);
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