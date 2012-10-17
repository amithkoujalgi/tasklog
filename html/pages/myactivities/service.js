var ActivityModule =
{
    getFullname:function(data,handler){
        process({
            'page':'User',
            'method':'checkLoginStatus',
            'data':data
        },handler);
    },
    getMyActivities:function(data,handler){
        process({
            'page':'User',
            'method':'getActivities',
            'data':data
        },handler);
    }
}
