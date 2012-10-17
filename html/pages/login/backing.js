var MyEventEmitter = function(){};
MyEventEmitter.prototype = new AbstractEventsDispatcher;
var emitter = new MyEventEmitter();
var clientDummyMode = false;

var backingObject={
	userObj:""
}

var Backing={
    authenticate:function(data){
        UserModule.authenticate(data,function(res,err){
            if (res)
            {
                emitter.emit("authenticated",res);
            }
        });
    }
};

