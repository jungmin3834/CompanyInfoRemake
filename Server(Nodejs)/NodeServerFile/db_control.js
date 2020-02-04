
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
});

var connectDB = function(){
    connection.connect(function(err) {
        return "Fail";
    });
}

var disconnectDB = function(){
    connection.end(function(err) {
        return "Fail";
    });
}

var companyDataInsert = function(data)
{
   
    var querycompany_info = connection.query('INSERT INTO company_info SET ?', data.queryCompanyData, function(err, result) {
        return "Fail";
    });
    var queryqualification = connection.query('INSERT INTO qualification SET ?', data.queryPassQualificationData, function(err, result) {
        return "Fail";
    });
    return "success";
    console.log(query.sql);
}

var companyDataSelectAll = function(data)
{ 
    var querycompany_info = connection.query('SELECT * FROM company_info , qualification WHERE name = ?', data.queryCompanyData.name , function(err, result) {
        return "Fail";
    });

}

var companyDataUpdate = function(data)
{
    var query = connection.query('UPDATE  company_info SET ?', data.queryCompanyData , ' WHERE name ?', 
    data.queryCompanyData.name , function(err, result) {
        return "Fail";
    });

    var query = connection.query('UPDATE  qualification SET ?', data.queryPassQualificationData , ' WHERE name ?', 
    data.queryCompanyData.name , function(err, result) {
        return "Fail";
    });

}

var companyDataDelete = function(data)
{
    var query = connection.query('DELETE FROM company_info where name ?' , data.queryCompanyData.name , function(err, result) {
        return "Fail";
    });
    var query = connection.query('DELETE FROM qualification where name ?' , data.queryCompanyData.name , function(err, result) {
        return "Fail";
    });

    return "success";
}