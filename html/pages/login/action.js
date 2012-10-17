// JavaScript Document
$(document).ready(function(){
	$("#register").click(function(){
		window.location.href = "/pages/registration/page.html";
	});
	
	$("#loginSubmit").click(function(){
		$("#usernameMsg").text("");
		$("#passwordMsg").text("");
		
		var username = $("#username").val();
		var password = $("#password").val();
		
		if(username=="")
		{
			$("#usernameMsg").text("Please enter username");
			return false;
		}
		if(password=="")
		{
			$("#passwordMsg").text("Please enter password");
			return false;
		}
		$("#responseMsg").text("Processing.....");
		var data = new Object();
		data.username = username;
		data.password = password;
		Backing.authenticate(data);
		return false;
	});
});

emitter.on('authenticated',function(data){
	backingObject.userObj=data;
	if(data.privilege == "admin"){
            window.location.href = "/pages/personnel/page.html";
        }
	else if(data.privilege == "user")
		window.location.href = "/pages/myactivities/page.html";
	else
            $("#responseMsg").text("Enter valid Login details");
});
