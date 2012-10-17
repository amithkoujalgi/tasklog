$(document).ready(function () {
    $('#resultDiv').hide();
    getFullname();
    
    $('#sortDropdown').live('change', function(){
	var sortBy = $('#sortDropdown').val();
	var activityArray = backingObject.activities;
	if(activityArray!=="" && sortBy!=="default")
	{
		if(sortBy==="reverse")
			activityArray=activityArray.reverse();
		else if(sortBy==="date")
			activityArray=sortByDate(activityArray);
		else if(sortBy==="timeTaken")
			activityArray=sortByTimeTaken(activityArray);
		sortRefresh(activityArray);
		backingObject.activities=activityArray;
	}
    });
    $('#sortOrderChange').live('click', function(){
	backingObject.activities=backingObject.activities.reverse();
	sortRefresh(backingObject.activities);
    });
});
emitter.on('name loaded', function(data){
	getMyActivities();
});
function getFullname(){
    Backing.getFullname();
}
function getMyActivities(){
	var obj = new Object;
	obj._id = backingObject.userObj.userId;
	Backing.getMyActivities(obj);
}
function sortByTimeTaken(sortObj){
	return sortObj.sort(function(a,b) { return parseFloat(a.timeTaken) - parseFloat(b.timeTaken) } );
}
function sortByDate(sortObj){
return sortObj.sort(function(a,b) { return parseFloat(a.startTime) - parseFloat(b.startTime) } );
}
function sortRefresh(sortdata){
$('#activityList').empty();
//sortdata.sort(function(a,b) { return parseFloat(a.startTime) - parseFloat(b.startTime) } );
                    for(var activity in sortdata)
                    {
                        var start = new Date(parseInt(sortdata[activity].startTime));
                        var end = new Date(parseInt(sortdata[activity].endTime));
                        var totalTime = Math.floor((end-start)/(1000*60));
                        $('#activityList').append("<tr><td><img height=30px src='/images/notes-icon.jpg' /> "+(parseInt(activity)+1)+"</td><td>"+sortdata[activity].activityTitle+"</td><td>"+sortdata[activity].activityDescription+"</td><td>"+start.toString().substring(0,start.toString().indexOf('G'))+"</td><td>"+end.toString().substring(0,end.toString().indexOf('G'))+"</td><td>"+totalTime+" Minutes</td></tr><tr><td align='center' colspan='6'><img width=100% height=2px src='/images/contnt.gif' /> </td><tr>");
                    }
}
