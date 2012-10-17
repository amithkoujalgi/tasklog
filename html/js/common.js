
var CommonBacking={

	
	logout:function(){
		process({'page':'User','method':'logout','data':1},function(res,err){
			if (res)
			{
				
				window.location.href = "/pages/login/page.html";
								
			}
		});
	},
	checkLoginStatus:function(){
		process({'page':'User','method':'checkLoginStatus','data':1},function(res,err){
			if (res)
			{
				var resObj = res;
				if(resObj.isLoggedIn){
					$("#logedin-user-name").text(resObj.userName)
				}else{
					window.location.href = "/pages/login/page.html";
				}
				
			}
		});
	}
};
CommonBacking.checkLoginStatus();
$("#logout").live('click',function (e) {
    CommonBacking.logout();
 });

function getUTCString(date){
	var d = new Date(date)
	return d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()
	
}