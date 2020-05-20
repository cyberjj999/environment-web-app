/*
// locate the DOM element
var myVideo = document.getElementById('myVideo');
// create a VisSense instance with our video
var videoElementArea = VisSense(myVideo);
// create a monitor builder with the VisSense object
var monitorBuilder = VisSense.VisMon.Builder(videoElementArea);
// register a function that is called when the element becomes fully visible
monitorBuilder.on('fullyvisible', function() {
    myVideo.play(); // start playing the video (or keep playing)
});
// register a function that is called when the element becomes hidden
monitorBuilder.on('hidden', function() {
    myVideo.pause(); // pause the video (or stay paused)
});
// finish the builder an make a concrete monitor
var videoVisibilityMonitor = monitorBuilder.build();
// start observing the element
videoVisibilityMonitor.start();
*/


/*
var razan = document.getElementById("razan");
var nicholas = document.getElementById("nicholas");
razan.addEventListener("mouseover",displayRazan);
razan.addEventListener("mouseleave",canceldisplayRazan);

function displayRazan(){
	nicholas.style.display = "none";
}

function canceldisplayRazan(){
	nicholas.style.display = "visible";
}*/
/*
var razan = document.getElementById("razan");
var nicholas = document.getElementById("nicholas");
var darren = document.getElementById("darren");
var jiajun = document.getElementById("jiajun");
var robin = document.getElementById("robin");

razan.addEventListener("mouseover",hoverRazan);
/*
function hoverRazan () {
	var timer;
	timer = setInterval(changeRazan,3000);
}

function changeRazan () {
	//if (razan.src = TeamMembers/razan.jpg)
	razan.setAttribute("src","TeamMembers/razan2.jpg");
	
	//else 
		//razan.setAttribute("src","TeamMembers/razan.jpg");
}*/

var myIndex = 0;
changeRazan();
changeNicholas();
changeDarren();
changeJiaJun();
changeRobin();
function changeRazan() {
    var i;
    var razan = document.getElementsByClassName("razanClass");
    for (i = 0; i < razan.length; i++) {
       razan[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > razan.length) {myIndex = 1}    
    razan[myIndex-1].style.display = "block";  
    setTimeout(changeRazan, 2000); // Change image every 2 seconds
}
function changeNicholas() {
    var i;
    var nicholas = document.getElementsByClassName("nicholasClass");
    for (i = 0; i < nicholas.length; i++) {
       nicholas[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > nicholas.length) {myIndex = 1}    
    nicholas[myIndex-1].style.display = "block";  
    setTimeout(changeNicholas, 2000); // Change image every 2 seconds
}
function changeDarren() {
    var i;
    var darren = document.getElementsByClassName("darrenClass");
    for (i = 0; i < darren.length; i++) {
       darren[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > darren.length) {myIndex = 1}    
    darren[myIndex-1].style.display = "block";  
    setTimeout(changeDarren, 2000); // Change image every 2 seconds
}
function changeJiaJun() {
    var i;
    var jiajun = document.getElementsByClassName("jiajunClass");
    for (i = 0; i < jiajun.length; i++) {
       jiajun[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > jiajun.length) {myIndex = 1}    
    jiajun[myIndex-1].style.display = "block";  
    setTimeout(changeJiaJun, 2000); // Change image every 2 seconds
}
function changeRobin() {
    var i;
    var robin = document.getElementsByClassName("robinClass");
    for (i = 0; i < robin.length; i++) {
       robin[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > robin.length) {myIndex = 1}    
    robin[myIndex-1].style.display = "block";  
    setTimeout(changeRobin, 2000); // Change image every 2 seconds
}