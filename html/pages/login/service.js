
var UserModule =
{
    authenticate:function(data,handler){
        loginProcess({
            'page':'User',
            'method':'authenticate',
            'data':data
        },handler);
    }
}