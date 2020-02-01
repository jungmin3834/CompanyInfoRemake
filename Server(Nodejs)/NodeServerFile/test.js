//express 라이브러리를 가지고 옴 안될 경우 npm install express
var express = require('express'); 

//express 변수 안에 있는 속성값을 사용하기 위해 app에 저장
var app = express(); 

//get 함수 등록 첫번째 경로에 엑세스 되었을 때 두번째 인자의 함수 호출
app.get('/', function(req, res){ 
    res.send('Hello World!'); 
}) 

//test용 함수로 /list 경로에 접근하게 되었을 때 발생
app.get('/list', function(req, res){ 
    res.send('list Test Success'); 
}) 

//포트 번호 및 server 변수 할당.
var server = app.listen(3000, function(){ 
    console.log('Server is running!'); 
})
