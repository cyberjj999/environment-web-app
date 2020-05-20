//Declaring all varibles(getting each buttons)
var sit = document.getElementById("sit");
var sbm = document.getElementById("sbm");
var seg = document.getElementById("seg");
var shl = document.getElementById("shl");
var sidm = document.getElementById("sidm");
var buttons = document.getElementById("buttons");

//Add event listener to each button
sit.addEventListener("click",showTimetableSit);
sbm.addEventListener("click",showTimetableSbm);
seg.addEventListener("click",showTimetableSeg);
shl.addEventListener("click",showTimetableShl);
sidm.addEventListener("click",showTimetableSidm);


function showTimetableSit(){
	//sit.style.display = "none";
	var timetable = document.createElement("img");
	timetable.setAttribute("src","timetableimage.jpg");
	timetable.style.height="70%";
	buttons.appendChild(timetable);
	//var timetable1 = document.createElement("
}



//Make the timetable , such that when u press eg SIT , a timetable pops out(ABOVE THE BUTTONS)
//Then if u spam click , it doesnt appear 10 times or some shit
//Make the buttons appear throughout the entire time but when u click each timetable,a new timetable pops out,SOLVE THIS TONIGHT AND SHOW TOMMOROW :D

