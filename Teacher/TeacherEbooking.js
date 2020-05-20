function preventback()
{window.history.forward();} //when user go to other page
setTimeout("preventback()",0); //
window.onunload=function(){null};

	var booking = [];
	

function add() {
	
	
	if(localStorage.getItem('slot') ===null) {
	var ebooking = {};
	
	ebooking.name = document.getElementById('personInCharge').value;
	ebooking.venue = document.getElementById('venue').value;
	ebooking.date = document.getElementById('date').value;
	ebooking.StartTime = document.getElementById('stime').value;
	ebooking.EndTime = document.getElementById('etime').value;
	
	booking.push(ebooking);
	
	localStorage.setItem('slot', JSON.stringify(booking));
	
	}
	
	else {
		
	var get = localStorage.getItem('slot');
	get = JSON.parse(get);
	
	for(var i=0; i < get.length;i++){
	if(document.getElementById('personInCharge').value == get[i].name && 
	document.getElementById('venue').value == get[i].venue &&
	document.getElementById('date').value == get[i].date &&
	document.getElementById('stime').value == get[i].StartTime &&
	document.getElementById('etime').value == get[i].EndTime ){
		alert("duplication");
		return;
	}
	}
		
	var ebooking = {};	
	ebooking.name = document.getElementById('personInCharge').value;
	ebooking.venue = document.getElementById('venue').value;
	ebooking.date = document.getElementById('date').value;
	ebooking.StartTime = document.getElementById('stime').value;
	ebooking.EndTime = document.getElementById('etime').value;

	
	get.push(ebooking);
	localStorage.setItem('slot', JSON.stringify(get));
	

}
	}


function exit() {
	
	localStorage.removeItem('slot');
	
	
}


