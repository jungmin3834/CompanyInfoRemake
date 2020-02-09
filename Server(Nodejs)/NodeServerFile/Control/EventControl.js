
const dataControl = require('./DataControl');
const dbControl = require('./DbControl');

var eventControl ={
    insertManager(req,res){
        var data = dataControl.queryDataMake(req.body);
        if(dbControl.DB.companyDataInsert(data) == "Fail")
            res.send("Fail");
        else
            res.send("success");
    },
    selectAllManager(req,res)
    {
        if(dbControl.DB.companyDataSelectAll(data) == "Fail")
        res.send("Fail");
        else
        res.send("success");
        
    },
    updateManger(req,res)
    {
        if(dbControl.DB.companyDataUpdate(data) == "Fail")
        res.send("Fail");
        else
        res.send("success");
    },
    deleteManager(req,res)
    {
        if(dbControl.DB.companyDataDelete(data) == "Fail")
        res.send("Fail");
        else
        res.send("success");
    }
};

module.exports.eventControl = eventControl;