//var gpa = ["name", "admin"];
function preventback()
{window.history.forward();} //when user go to other page
setTimeout("preventback()",0); //
window.onunload=function(){null};

var gpa = [];

function send() {

	if(localStorage.getItem('gpa') ===null) {
	var gpa1 = {};
	
	gpa1.name = document.getElementById('alias').value;
	gpa1.admin = document.getElementById('admin').value;
	gpa1.wadp = document.getElementById('wadp').value;
	gpa1.cmath = document.getElementById('cmath').value;
	gpa1.cstle = document.getElementById('cstle').value;
	gpa1.prgess = document.getElementById('prgess').value;
	gpa1.comskill = document.getElementById('comskill').value;
	gpa1.achievement = document.getElementById('achievement').value;
	
	
	gpa.push(gpa1);
	localStorage.setItem('gpa', JSON.stringify(gpa));
	
	}
	
	else {
	var get = localStorage.getItem('gpa');
	get = JSON.parse(get);
	 
	 for(var i=0; i < get.length;i++){
	if(document.getElementById('alias').value == get[i].name &&
	document.getElementById('admin').value == get[i].admin &&
	document.getElementById('wadp').value == get[i].wadp &&
	document.getElementById('cmath').value == get[i].cmath &&
	document.getElementById('cstle').value == get [i].cstle &&
	document.getElementById('prgess').value == get[i].prgess &&
	document.getElementById('comskill').value == get[i].comskill &&
	document.getElementById('achievement').value == get[i].achievement){
		alert("duplication");
		return;
	}
	}
	 
	var gpa1 = {};
	gpa1.name = document.getElementById('alias').value;
	gpa1.admin = document.getElementById('admin').value;
	gpa1.wadp = document.getElementById('wadp').value;
	gpa1.cmath = document.getElementById('cmath').value;
	gpa1.cstle = document.getElementById('cstle').value;
	gpa1.prgess = document.getElementById('prgess').value;
	gpa1.comskill = document.getElementById('comskill').value;
	gpa1.achievement = document.getElementById('achievement').value;
	
	get.push(gpa1);
	localStorage.setItem('gpa', JSON.stringify(get));
	
	
	
}
	}

function remove() {
	localStorage.removeItem('gpa');
	gpa.length = 0;
	
	
}

function cancel() {
	
	modal.style.display = "none";
}

	
	


