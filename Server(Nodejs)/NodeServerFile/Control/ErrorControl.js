

var eventHandlerControl = {
    eventHandler(err)
    { 
        if(err != null)
         console.log("System Error : " ,err.message);
         return "Fail";
    }
};

module.exports.errorControl = eventHandlerControl;