

var eventHandlerControl = {
    eventHandler(err)
    { 
         console.log("System Error : " ,err.message());
         return "Fail";
    }
};

module.exports.errorControl = eventHandlerControl;