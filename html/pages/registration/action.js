// JavaScript Document
$(document).ready(function(){
	
	$("#register").click(function(){
		$("#email").text("");
		$("#passwd").text("");
		
		var username = $("#email").val();
		var password = $("#passwd").val();
		var privilege=$('input:radio[name=privilege]:checked').val();
		
		if(username=="")
		{
			$("#email").text("Please enter email address");
			return false;
		}
		if(password=="")
		{
			$("#passwd").text("Please enter password");
			return false;privilege
		}
		$("#responseMsg").text("Processing.....");
		var data = new Object();
		data.userName = username;
		data.password = password;
		data.privilege= privilege;
		Backing.addUser(data);
		//return false;
	});
});
/*
emitter.on('authenticated',function(data){
	if(data)
		window.location.href = "/pages/sourcing/page.html";
	else
		$("#responseMsg").text("Enter valid Login details");
});
*/