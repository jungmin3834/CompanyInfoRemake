
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
});

var company_data_insert = function(data)
{
    connection.connect(function(err) {
        return "Fail";
    });

    var query = connection.query('INSERT INTO company_info SET ?', data.queryCompanyData, function(err, result) {
        return "Fail";
    });

    var query = connection.query('INSERT INTO qualification SET ?', data.queryPassQualificationData, function(err, result) {
        return "Fail";
    });

    return "success";
    console.log(query.sql);
}