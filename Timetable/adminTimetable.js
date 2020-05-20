var contact = JSON.parse(localStorage.getItem('timetable'));
 
function get() {
	
	if(contact !=null) {
	
	for(i = 0;i<contact.length; i++){
	
	var table = document.getElementById("addtable");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0); 
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	
	cell1.innerHTML= [contact[i].date];
	cell2.innerHTML= [contact[i].activityTime];
	cell3.innerHTML= [contact[i].venue];
	cell4.innerHTML= [contact[i].activityName];
	cell5.innerHTML= [contact[i].whatToBring];
	cell6.innerHTML= [contact[i].slotsAvailable];
	
	
	}
	
	}
	else{
		return;
	}
}