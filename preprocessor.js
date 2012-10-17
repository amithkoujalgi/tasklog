var config = require('./config');
var fs=config.nodeModules().fs;
var util=config.nodeModules().util;
var url=config.nodeModules().url;
var path = config.nodeModules().path;
var events = config.nodeModules().events;
var assert = config.nodeModules().assert;
var pages = ["activities","personnel", "dashboard"];
/* Application session, logging, error handler
 * 
 * sets the request context with session data, log handler and error handler 
 * 
 * 
 */

module.exports = function preProcessor() {
	 
    return function getContext(req, res, next) {
		 
        try{
            var context = new Object();
            context.session = req.session;
            context.session.sessionID = req.sessionID;
            context.remoteip = req.connection.remoteAddress;
            req.session.cookie.expires = false;

            context.logger = function(log){
                console.log(log);
            };
            context.error = function(err){
                writeException(err);
                res.end();
            };
            context.resetSession = function(){
                req.session.destroy(function(err){
                    });
            };
            var url_parts = url.parse(req.url);
            var arr = path.normalize(url_parts.pathname).split('/');
            if(url_parts.pathname === "/"){
                res.writeHead(302, {
                    'Location': "/pages/login/page.html"
                });
                //res.redirect('/pages/login/page.html', 302);
                res.end();
                return;
            }
	    	
            if(arr.indexOf("page.html") > -1){
                if((arr[arr.length-2] !=='login') && context.session.userId == undefined){
			        	
                    res.writeHead(302, {
                        'Location': "/pages/session.html"
                    });
                    res.end();
                    return;
                }
            }
            if((arr.indexOf('get') > -1) && context.session.userId == undefined){
                res.end('sessionExpired');
                return;
            }else{
                req.context = context;
                next(); 
            }
        } catch(err){
            res.end();
        }
    }
};

function writeException(err) {
    try{
        util.inspect(err);
        if(err["name"] === "AssertionError") {
            console.log("Test failed!");
            console.log("Message: " + (err["message"] || "None"));
            console.log("Expected: " + err["expected"]);
            console.log("Actual: " + err["actual"]);
            console.log("Operation: " + err["operator"]);
        } else{
            console.log(JSON.stringify(err));
        }
		    
    } catch(err){
        console.log(JSON.stringify(err));
    }
    return;
}

