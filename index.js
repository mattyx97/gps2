var gpstracker = require("gpstracker");
var server = gpstracker.create().listen(5000, function(){
    console.log('listening your gps trackers on port', 5000);
});
 
server.trackers.on("connected", function(tracker){
    
    console.log("tracker connected with imei:", tracker.imei);
    server.send_to(tracker.imei, 'powercar 11');

    
    tracker.on("help me", function(){
        console.log(tracker.imei + " pressed the help button!!".red);
    });
 
    tracker.on("position", function(position){
        console.log("tracker {" + tracker.imei +  "}: lat", 
                            position.lat, "lng", position.lng);
    });
 
    tracker.trackEvery(30).seconds();
});
