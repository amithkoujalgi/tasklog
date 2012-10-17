var server_url  = 'http://tasklogger.jit.su/';
var ajax_url  = server_url+'get';
function process(data,handler)
{
	$.ajax({
		url:ajax_url,
		data:{'json':JSON.stringify(data)},
		type: 'POST',
		async:'false',
		timeout:50000,
		dataType:'html',
		success:function(data)
		{
			if(data == 'sessionExpired'){
				window.location.href = "/pages/session.html";
			}else{
			handler(JSON.parse(data),null);
			}
		},
		error: function(xhr) {
			handler(null,xhr);
		}
	});
} 

function loginProcess(data,handler)
{
	$.ajax({
		url:server_url+'login',
		data:{'json':JSON.stringify(data)},
		type: 'POST',
		async:'false',
		timeout:50000,
		dataType:'html',
		success:function(data)
		{
			handler(JSON.parse(data),null);
		},
		error: function(xhr) {
			handler(null,xhr);
		}
	});
}
