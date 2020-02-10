
var mysql      = require('mysql');
var errorControl = require('./ErrorControl');

connection = mysql.createConnection({
    host     : '127.0.0.1',
    port : '8888',
    user     : 'root',
    password : 'root',
    database : 'mydb'
  });

var dbControl = { 

    connectDB(){
        connection.connect(function(err) {
            return "Fail";
        });
        return "엥";
    },
    disconnectDB(){
        connection.end(function(err) {
            return "Fail";
        });
    },
    companyDataInsert(data)
      {
        
          var querycompany_info = connection.query('INSERT INTO company_info SET ?', data.queryCompanyData, function(err, result) {
              return errorControl.errorControl.eventHandler(err , 'Insert Company_info Error');
          });
          
          var queryqualification = connection.query('INSERT INTO qualification SET ?', data.queryPassQualificationData, function(err, result) {
              return errorControl.errorControl.eventHandler(err , 'Insert qualification Error');
          });
          //dbControl.disconnectDB();
          return "success";
      },
      companyDataSelectAll(data)
      { 
          var querycompany_info = connection.query('SELECT * FROM company_info , qualification WHERE name = ?', data.queryCompanyData.name , function(err, result) {
            errorControl.errorControl.eventHandler(err , 'SELECT companys Error');
              return null;
          });
          return querycompany_info;
      },
     companyDataUpdate(data)
      {
          var query = connection.query('UPDATE  company_info SET ?', data.queryCompanyData , ' WHERE name ?', 
          data.queryCompanyData.name , function(err, result) {
              return errorControl.errorControl.eventHandler(err , 'UPDATE company_info Error');
          });
      
          var query = connection.query('UPDATE  qualification SET ?', data.queryPassQualificationData , ' WHERE name ?', 
          data.queryCompanyData.name , function(err, result) {
              return errorControl.errorControl.eventHandler(err , 'UPDATE qualification Error');
          });
      
          return "Success";
      },
      companyDataDelete(data)
      {
          var query = connection.query('DELETE FROM company_info where name ?' , data.queryCompanyData.name , function(err, result) {
              return errorControl.errorControl.eventHandler(err , 'DELETE company_info Error');
          });
          var query = connection.query('DELETE FROM qualification where name ?' , data.queryCompanyData.name , function(err, result) {
              return errorControl.errorControl.eventHandler(err , 'DELETE qualification Error');
          });
          return "success";
      }
};


module.exports.DB = dbControl;

