
var mysql      = require('mysql');
var errorControl = require('./ErrorControl');

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
        return eventHandler(err , 'Insert Company_info Error');
    });
    var queryqualification = connection.query('INSERT INTO qualification SET ?', data.queryPassQualificationData, function(err, result) {
        return eventHandler(err , 'Insert qualification Error');
    });
    return "success";
}

var companyDataSelectAll = function(data)
{ 
    var querycompany_info = connection.query('SELECT * FROM company_info , qualification WHERE name = ?', data.queryCompanyData.name , function(err, result) {
        eventHandler(err , 'SELECT companys Error');
        return null;
    });
    return querycompany_info;
}

var companyDataUpdate = function(data)
{
    var query = connection.query('UPDATE  company_info SET ?', data.queryCompanyData , ' WHERE name ?', 
    data.queryCompanyData.name , function(err, result) {
        return eventHandler(err , 'UPDATE company_info Error');
    });

    var query = connection.query('UPDATE  qualification SET ?', data.queryPassQualificationData , ' WHERE name ?', 
    data.queryCompanyData.name , function(err, result) {
        return eventHandler(err , 'UPDATE qualification Error');
    });

    return "Success";
}

var companyDataDelete = function(data)
{
    var query = connection.query('DELETE FROM company_info where name ?' , data.queryCompanyData.name , function(err, result) {
        return eventHandler(err , 'DELETE company_info Error');
    });
    var query = connection.query('DELETE FROM qualification where name ?' , data.queryCompanyData.name , function(err, result) {
        return eventHandler(err , 'DELETE qualification Error');
    });
    return "success";
}