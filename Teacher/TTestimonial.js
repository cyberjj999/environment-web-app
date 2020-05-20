
var test = JSON.parse(localStorage.getItem("gpa"));

function Print() {
	
	window.print();
	
}

function preventback()
{window.history.forward();} //when user go to other page
setTimeout("preventback()",0); //
window.onunload=function(){null};

function change() {
	
	if(test !=null){
	for(i = 0; i < test.length; i++){
		
	var create = document.createElement("option");
	
	var pic = document.getElementById('testimonial').add(create);
	var pic1 = document.getElementById('testimonial').options[i+1];
	pic1.value = [test[i].name];
	pic1.text = [test[i].name];
		
	}
	
	
}
}


/* function table() {
	
	if (test !==null) {
	document.getElementById('gAlias').innerText = test[0];
	document.getElementById('gAdmin').innerText = test[1];
	document.getElementById('gWadp').innerText = test[2];
	document.getElementById('gCmath').innerText = test[3];
	document.getElementById('gCstle').innerText = test[4];
	document.getElementById('gPrgEss').innerText = test[5];
	document.getElementById('gComSkill').innerText = test[6];
	document.getElementById('gAchievement').innerText = test[7];
	}
	else {
	return;
		
	}
		
} */



function selectvalue() {
	
	var sel = document.getElementById('testimonial');
	
		
	for(var i =0; i < sel.length; i++){
	if (sel.options[i+1].selected == true){
			
	document.getElementById('gAdmin').innerText = test[i].admin;
	document.getElementById('gWadp').innerText = test[i].wadp;
	document.getElementById('gCmath').innerText = test[i].cmath;
	document.getElementById('gCstle').innerText = test[i].cstle;
	document.getElementById('gPrgEss').innerText = test[i].prgess;
	document.getElementById('gComSkill').innerText = test[i].comskill;
	document.getElementById('gAchievement').innerText = test[i].achievement;
	break;
		}
}
}

