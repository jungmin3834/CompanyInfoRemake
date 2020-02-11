
const dataControl = require('./DataControl');
const dbControl = require('./DbControl');
dbControl.DB.connectDB();

var eventControl ={
    insertManager(req,res){
        var data = dataControl.queryDataControl.queryDataMake(req.body);
        //console.log(data);
        dbControl.DB.companyDataInsert(data);
       // if( == "Fail")
            
    },
    selectAllManager(req,res)
    {
        if(dbControl.DB.companyDataSelectAll(res) == "Fail")
            console.log("success");
        
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