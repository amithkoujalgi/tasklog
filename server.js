var config = require('./config');
var preprocessor = config.userModules().preprocessor;
var express = config.nodeModules().express;
var servicemap = config.servicemap();
var http = config.nodeModules().http;

var app = express();
http.createServer(app).listen(config.appConfig().port);
http.createServer(app).listen(process.env.PORT || 5000);
app.use(express.cookieParser('keyboard cat'));
app.use(express.session({
    secret:"test", 
    cookie: {
        maxAge: 6000000
    }
}));
app.use(express.bodyParser());
app.use(preprocessor())
app.use(express.static(config.appConfig().clientDir, {
    maxAge: 6000000
}));
app.use(express.errorHandler());
app.get('/testget', function(req, res){
    res.send('GET success');
    res.end();
});
app.post('/testpost', function(req, res){
    res.send('POST success');
    res.end();
});

app.post('/get', function(req, res){
    var obj = JSON.parse(req.body.json);
    var page = obj.page;
    var method = obj.method;
    var data = obj.data;
    var context = req.context;
    var startTime = new Date().getTime();
      
    var intervalId = setTimeout(function()
    {
        clearInterval(intervalId);
        res.end();
    },30000);
	    		
     
    //  console.log(page+" "+method);
    if( servicemap[page] && servicemap[page][method]){
        servicemap[page][method](function(result,err){
            try{
                var endTime = new Date().getTime();
                clearInterval(intervalId);
                if (err){
                    return context.error(err);
                }
                res.write(JSON.stringify(result));
                res.end();
				    
            } catch(err){
                console.log(err);
      			
            }
        },context,data );
    } 
	
});
app.post('/login', function(req, res){
    var obj = JSON.parse(req.body.json);
		
    var page = obj.page;
    var method = obj.method;
    var data = obj.data;
    var context = req.context;
    var startTime = new Date().getTime();
      
    var intervalId = setTimeout(function()
    {
        console.log("timeout");
        clearInterval(intervalId);
        res.end();
    },30000);
	    		
    if( servicemap[page] && servicemap[page][method]){
        servicemap[page][method](function(result,err){
            try{
                var endTime = new Date().getTime();
                clearInterval(intervalId);
                if (err){
                    return context.error(err);
                }
                res.write(JSON.stringify(result));
                res.end();
				    
            } catch(err){
                console.log(err);
            }
        },context,data );
    }
});
//app.listen(config.appConfig().port);
console.log("listening to "+ config.appConfig().port)
