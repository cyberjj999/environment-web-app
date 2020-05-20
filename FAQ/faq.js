/*var coll = document.getElementsByClassName("collapsible");
var i;



for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}*/

var accordions = document.querySelectorAll("button.collapsible");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}

function closeAll() {
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove("active");
    accordions[i].nextElementSibling.classList.remove("show");
  }
}

function filterQns(){
	var input , filter , div , buttons,i;
	input = document.getElementById("filter");
	filter = input.value.toUpperCase();
	div = document.getElementById("filteringDiv");
	buttons = div.getElementsByClassName("collapsible");
	h1 = document.getElementsByTagName("h1");
	 for (i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            buttons[i].style.display = "";
        } else {
            buttons[i].style.display = "none";
        }
    }
}


/*
var input = document.getElementById("filter");
input.addEventListener("keyup", removeLogin);


function removeLogin(e) {
input.value.toLowerCase();
	if (input.value == login) {
		document.body.backgroundColor = "red";
		document.getElementById("Attendance").style.display = "none"
		document.getElementById("EbookingSystem").style.display = "none"
		document.getElementById("testimonial").style.display = "none"
	}
}*/
var input = document.getElementById("filter");
input.addEventListener("keydown",closeAll);
	
/*

function filterQns(){
	var input , filter , div , buttons,i;
	input = document.getElementById("filter");
	filter = input.value.toUpperCase();
	div = document.getElementById("filteringDiv");
	buttons = div.getElementsByClassName("collapsible");
	h1 = document.getElementsByTagName("h1");
	var test = document.getElementsByClassName("test");
	for (i = 0; i < h1.length; i++) {
        if (h1[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            h1[i].style.display = "";
			test[0,1,2]
		
        } else {
            h1[i].style.display = "none";
			buttons[i].style.display = "none";
		
        }
    }
}*/
/*
var blacklist = ["and", "or", "/", "\\"];

function validate(input) {
  for (var i = 0; i < blacklist.length; ++i) {
    if (input.indexOf(blacklist[i]) >= -1) {
      // String is present
      return false;
    }
  }
  // No blacklisted strings are present
  return true;
}

if (validate) {
	document.body.backgroundColor ="red";
}*/




/*
function filterQns(){
	var input , filter , div , buttons,i;
	input = document.getElementById("filter");
	filter = input.value.toUpperCase();
	div = document.getElementById("filteringDiv");
	buttons = div.getElementsByClassName("collapsible");
	 for (i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            buttons[i].style.display = "";
        } else {
            buttons[i].style.display = "none";
        }
    }
}
*/
/*
Type information in search bar , u can see that u can filter the Login Issue (under the QNS , but cant filter the ans
until you actually open the answer off the QNS (E-booking system Q:Did not mark attendance)
+If u collapse the question accidentally , the answer will get filtered as well and the qns for it will disappear
How to fix it or isit okay?
When u search ure not searching for ans , but more of a qns ( is this okay or .. )

How to make it such that , if u type login , then only Login Issue will come out( the rest of the issues
will be filtered out)
I can filter the buttons but not the heading 
eg when u type login , all other issues eg attendance issue etc etc all disappears.
*/