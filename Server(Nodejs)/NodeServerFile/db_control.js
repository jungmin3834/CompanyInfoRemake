
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
});

var company_data_insert = function(data)
{
    connection.connect(function(err) {
        // connected! (unless `err` is set)
    });

    var query = connection.query('INSERT INTO company_info SET ?', data.queryCompanyData, function(err, result) {
        // Neat!
    });

    var query = connection.query('INSERT INTO qualification SET ?', data.queryPassQualificationData, function(err, result) {
        // Neat!
    });

    console.log(query.sql);
}