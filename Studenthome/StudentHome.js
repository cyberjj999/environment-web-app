function preventback()
{window.history.forward();} //when user go to other page
setTimeout("preventback()",0); //
window.onunload=function(){null};

function upload() {
	
	document.getElementById('upload').style.display="block";
	
}

var thisimage = [];

function store() {

var image = {};

image.img = document.getElementById("img").files[0].name;
image.name = document.getElementById("iName").value;

thisimage.push(image);
localStorage.setItem('img', JSON.stringify(thisimage));
document.getElementById('upload').style.display="none";

}

var sSession = sessionStorage.getItem('studentname');
sSession = JSON.parse(sSession);

function name() {
var picture = localStorage.getItem('img');
picture = JSON.parse(picture);
document.getElementById('displayimage').src = picture[0];
	
if(sSession!=null){
document.getElementById('sName').innerText = sSession[0].username;
document.getElementById('sAdmin').innerText = sSession[0].adminno;
document.getElementById('sEmail').innerText = sSession[0].email;
}

else {
	
return;
	
}
}




	



