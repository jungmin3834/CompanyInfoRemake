//express 라이브러리를 가지고 옴 안될 경우 npm install express
var express = require('express'); 


var bodyParser = require('body-parser');

var app = express(); 

app.use(bodyParser.json())
app.post('/',function(req,res){
        var msg = req.body.msg;
        
        console.log("python: " + req.body.msg + " : " + req.body.head);
});

//express 변수 안에 있는 속성값을 사용하기 위해 app에 저장


app.get(function(res)
{
    console.log("여기 ! " + res)
})

//get 함수 등록 첫번째 경로에 엑세스 되었을 때 두번째 인자의 함수 호출
app.get('/', function(req, res){ 
    console.log("여깅"+ req.url  + "\n"+ req.query["param1"]);
    
    res.send('Hello World!'); 
}) 

//test용 함수로 /list 경로에 접근하게 되었을 때 발생
app.get('/list', function(req, res){ 
    console.log("list \n"+ req.url  + "\n"+ req.query["param1"]);
    res.send('list Test Success'); 
}) 

//포트 번호 및 server 변수 할당.
var server = app.listen(3000, function(){ 
    console.log('Server is running!'); 
})
