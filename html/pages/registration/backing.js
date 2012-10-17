var MyEventEmitter = function(){};
MyEventEmitter.prototype = new AbstractEventsDispatcher;
var emitter = new MyEventEmitter();
var clientDummyMode = false;

var backingObject={
	
}

var Backing={
	addUser:function(data){
		RegistrationModule.addUser(data,function(res,err){
			if (res)
			{
				var res = JSON.parse(res);
				if(res == "added"){
					alert("added");
				}else if(res == "present"){
					alert("present")
				}else{
					alert("error")
				}
			}
			
		});
	}
};

