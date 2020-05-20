//var submit = document.querySelector('input[type="submit"]');
//submit.addEventListener("submit",displayMessage);

function displayMessage(){

	var containerDiv = document.getElementById("msgDiv");
	var form = document.getElementById("form");
	form.style.display="none";
	//This makes it such that when you click submit ,all form disappears
		var msgh1 = document.createElement("h1");
	msgh1.innerText="Thank you for the feedback!";
		var msgp1 = document.createElement("p");
	msgp1.innerText="Your form has been successfully submitted!";
		var msgp2 = document.createElement("p");
	msgp2.innerText="Your opinions and comments are very important to us and we read every message that we receive!";
		var msgp3 = document.createElement("p");
	msgp3.innerText="We hope to be able to improve our service and we appreciate you taking your time to fill out our feedback form!";
		var msgp4 = document.createElement("p");
	msgp4.innerText="Still have more questions?"
		var msgSpan = document.createElement("span");
	msgSpan.innerText=" Click here to submit another feedback form!";
	//msgp4.innerText = "OR find our contact details at the bottom of the page";
	
	//Append span to p4(last paragraph )
	msgp4.appendChild(msgSpan);
	
	//Appending all the text to the div
	containerDiv.appendChild(msgh1);
	containerDiv.appendChild(msgp1);
	containerDiv.appendChild(msgp2);
	containerDiv.appendChild(msgp3);
	containerDiv.appendChild(msgp4);

	//To hyperlink back to submit another form
	var link = document.createElement("a");
	msgp4.appendChild(link);
	link.appendChild(msgSpan);
	link.href ="ContactPage.html";
	
	
}





//<div>
//<h1> Thank you for your feedback!</h1>
//<p>Your form has been successfully submitted!</p> --> With bold
//<p>Your opinions and comments are very important to us and we read every message that we receive!</p>
//<p>We hope to be able to improve our service and we appreciate you taking your time to fill out our feedback form</p>
//<p> Still have more questions?<a href="link"> <span>Click here to submit another feedback form! </span></a>
//OR find our contact details at the bottom of the page</p>

//</div>
