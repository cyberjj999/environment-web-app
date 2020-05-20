function preventback()
{window.history.forward();} //when user go to other page
setTimeout("preventback()",0); //
window.onunload=function(){null};

var eBooking = JSON.parse(localStorage.getItem("slot"));
var i;
var timing = [];


function changecontent() {
	
	if (eBooking != null) {
		
	for(i = 0; i < eBooking.length; i++) {
			
	var create = document.createElement("option");
	
	var pic = document.getElementById('personInCharge').add(create);
	var pic1 = document.getElementById('personInCharge').options[i+1];
	pic1.value = [eBooking[i].name];
	pic1.text = [eBooking[i].name];
	
	}
		
	for(i = 0; i < eBooking.length; i++) {
			
	var create1 = document.createElement("option");
	
	var venue = document.getElementById('venue').add(create1);
	var venue1 = document.getElementById('venue').options[i+1];
	venue1.value = [eBooking[i].venue];
	venue1.text = [eBooking[i].venue];
		
		}
		
	for(i = 0; i < eBooking.length; i++) {
			
	var create2 = document.createElement("option");
	
	var date = document.getElementById('date').add(create2);
	var date1 = document.getElementById('date').options[i+1];
	date1.value = [eBooking[i].date];
	date1.text = [eBooking[i].date];
		
	}
		
	for(i = 0; i < eBooking.length; i++) {
			
	var create3 = document.createElement("option");
	
	var stime = document.getElementById('stime').add(create3);
	var stime1 = document.getElementById('stime').options[i+1];
	stime1.value = [eBooking[i].StartTime];
	stime1.text = [eBooking[i].StartTime];
	
	}
	
	for(i = 0; i < eBooking.length; i++) {
			
	var create4 = document.createElement("option");
	
	var etime = document.getElementById('etime').add(create4);
	var etime1 = document.getElementById('etime').options[i+1];
	etime1.value = [eBooking[i].EndTime];
	etime1.text = [eBooking[i].EndTime];
	}
	
}

	else {
		
	return;
		
	}
	
}
	
function send() {
	
	if(localStorage.getItem('time') === null) {
		if(document.getElementById('personInCharge').value !=null){
	var time = {};
	
	time.name =  document.getElementById('name').value;
	time.admin = document.getElementById('admin').value;
	time.personInCharge = document.getElementById('personInCharge').value;
	time.venue = document.getElementById('venue').value;
	time.date = document.getElementById('date').value;
	time.StartTime = document.getElementById('stime').value;
	time.EndTime = document.getElementById('etime').value;
	
	timing.push(time);
	
	localStorage.setItem('time', JSON.stringify(timing));
	
	
	}
	}
	
	else {
		
	var get = localStorage.getItem('time');
	get = JSON.parse(get);
	
	for(var i=0; i < get.length;i++){
	if(document.getElementById('name').value == get[i].name && 
	document.getElementById('admin').value == get[i].admin &&
	document.getElementById('personInCharge').value == get[i].personInCharge &&
	document.getElementById('venue').value == get[i].venue &&
	document.getElementById('date').value == get[i].date &&
	document.getElementById('stime').value == get[i].StartTime &&
	document.getElementById('etime').value == get[i].EndTime){
		alert("duplication");
		return;
	}
	}
	if(document.getElementById('personInCharge').value !=null){
	var time = {};
	
	time.name =  document.getElementById('name').value;
	time.admin = document.getElementById('admin').value;
	time.personInCharge = document.getElementById('personInCharge').value;
	time.venue = document.getElementById('venue').value;
	time.date = document.getElementById('date').value;
	time.StartTime = document.getElementById('stime').value;
	time.EndTime = document.getElementById('etime').value;
		
	get.push(time);
	localStorage.setItem('time', JSON.stringify(get));
	
	
	
	}
	}
}

function remove() {
	
	localStorage.removeItem('time');
	
}

function change(){
	var sel = document.getElementById('personInCharge');
	
	for ( var i=0;i<sel.length; i++){
		if (sel.options[i+1].selected == true){
			document.getElementById('venue').selectedIndex = i+1;
			document.getElementById('date').selectedIndex= i+1;
			document.getElementById('stime').selectedIndex= i+1;
			document.getElementById('etime').selectedIndex = i+1;
		}		
	}
}



	
