var timingt = JSON.parse(localStorage.getItem('time'));
var i;

function preventback()
{window.history.forward();} //when user go to other page
setTimeout("preventback()",0); //
window.onunload=function(){null};

function addslot() {
	
	if(timingt !=null) {
	
	for(i = 0;i<timingt.length; i++){
	
	var table = document.getElementById("table");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0); 
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	
	cell1.innerHTML= [timingt[i].name];
	cell2.innerHTML= [timingt[i].admin];
	cell3.innerHTML= [timingt[i].personInCharge];
	cell4.innerHTML= [timingt[i].venue];
	cell5.innerHTML= [timingt[i].date];
	cell6.innerHTML= [timingt[i].StartTime];
	cell7.innerHTML= [timingt[i].EndTime];
	
	}
	
	}
	else{
		return;
	}
}