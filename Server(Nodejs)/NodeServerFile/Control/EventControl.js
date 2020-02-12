
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
        var data = dataControl.queryDataControl.queryDataMake(req.body);
        console.log(data.prename)
        dbControl.DB.companyDataUpdate(data,res);

    },
    deleteManager(req,res)
    {
        var data = dataControl.queryDataControl.queryDataMake(req.body);
        if(dbControl.DB.companyDataDelete(data) == "Fail")
        res.send("Fail");
        else
        res.send("success");
    }
};

module.exports.eventControl = eventControl;