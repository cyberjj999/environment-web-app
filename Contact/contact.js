 var contact = JSON.parse(localStorage.getItem('messages'));
 
function get() {
	
	if(contact !=null) {
	
	for(i = 0;i<contact.length; i++){
	
	var msg = document.getElementById("addMessages");
	var row = msg.insertRow(1);
	var cell1 = row.insertCell(0); 
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	
	cell1.innerHTML= [contact[i].name];
	cell2.innerHTML= [contact[i].email];
	cell3.innerHTML= [contact[i].contact];
	cell4.innerHTML= [contact[i].feedback];
	cell5.innerHTML= [contact[i].subject];
	cell6.innerHTML= [contact[i].message];
	cell7.innerHTML= [contact[i].dateOfSubmission];
	
	}
	
	}
	else{
		return;
	}
}