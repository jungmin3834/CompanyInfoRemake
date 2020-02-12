
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
          
          var queryqualification = connection.query('INSERT INTO passQualification SET ?', data.queryPassQualificationData, function(err, result) {
              return errorControl.errorControl.eventHandler(err , 'Insert qualification Error');
          });
          //dbControl.disconnectDB();
          return "success";
      },
      companyDataSelectAll(res)
      { 
          var querycompany_info = connection.query('SELECT * FROM company_info , passQualification WHERE company_info.name=passQualification.name ' , function(err, result) {
            errorControl.errorControl.eventHandler(err , 'SELECT companys Error');
            res.json(result);        
          });

          return querycompany_info;
      },
     companyDataUpdate(data,res)
      {
          var sql = "UPDATE company_info SET ? WHERE name= " + "'"+data.prename.name+ "'";
          console.log(sql);
          connection.query(sql, [data.queryCompanyData], function(err, result) {
              errorControl.errorControl.eventHandler(err , 'UPDATE company_info Error');
              return;
          });
      
          sql = "UPDATE passQualification SET ? WHERE name=" + "'"+data.prename.name+ "'";
          connection.query(sql, [data.queryPassQualificationData] , function(err, result) {
              errorControl.errorControl.eventHandler(err , 'UPDATE passQualification Error');
              return;
          });

          res.send("Success!");
          return "Success";
      },
      companyDataDelete(data)
      {
          var query = connection.query('DELETE FROM company_info WHERE company_info.name=?' , data.queryCompanyData.name , function(err, result) {
              return errorControl.errorControl.eventHandler(err , 'DELETE company_info Error');
          });
          var query = connection.query('DELETE FROM passQualification WHERE passQualification.name=?' , data.queryCompanyData.name , function(err, result) {
              return errorControl.errorControl.eventHandler(err , 'DELETE qualification Error');
          });
          return "success";
      }
};


module.exports.DB = dbControl;

