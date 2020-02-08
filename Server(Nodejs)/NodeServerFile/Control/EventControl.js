
const dataControl = require('./DataControl');
const dbControl = require('./DbControl');

var insertManager = function(req,res)
{
    var data = dataControl.queryDataMake(req.body);
    if(dbControl.companyDataInsert(data) == "Fail")
        res.send("Fail");
    else
        res.send("success");
}

var selectAllManager = function(req,res)
{
    if(dbControl.companyDataSelectAll(data) == "Fail")
    res.send("Fail");
    else
    res.send("success");
    
}


var updateManger = function(req,res)
{
    if(dbControl.companyDataUpdate(data) == "Fail")
    res.send("Fail");
    else
    res.send("success");
}

var deleteManager = function(req,res)
{
    if(dbControl.companyDataDelete(data) == "Fail")
    res.send("Fail");
    else
    res.send("success");
}
