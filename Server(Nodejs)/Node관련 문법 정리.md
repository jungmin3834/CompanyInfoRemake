# Nodejs 관련 정리


## Express  
  
  Express는 nodeJs의 웹프레임워크의 종류 중 하나로 웹서버 구축에 있어 도움을 준다.

  설치 방법 : npm install express  
  //사용 시 require('express');   

## ejs 

  웹 html 부분에 javascript를 추가하는데 있어서 편하고 간단하게 사용 할 수 있게 해주는 모듈이라 볼 수 있다.  
  <% for(var i =0;i < 10 ;i++>) %>  
    <h1> 요런 식으로 사용 가능 </h1>  
  <% } %>  

  설치 방법 : npm install ejs  
  //사용 시 require('ejs'); 

## body-parser
  
  Post 메세지를 수신 받았을 때 url body 라인에서 원하는 정보를 쉽게 추출하기 위해서 만들어진 모듈.  

    설치 방법 : npm install body-parser
    var bodyParser = require('body-parser');  
    app.use(bodyparser); 

