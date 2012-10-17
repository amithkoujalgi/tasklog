
var RegistrationModule =
{
	addUser:function(data,handler){
		loginProcess({'page':'User','method':'RegisterProcess','data':data},handler);
    }
}