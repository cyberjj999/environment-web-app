var login = JSON.parse(localStorage.getItem('form'));

var usernametextbox = document.getElementById('username1');
var passwordtextbox = document.getElementById('userpass1');

var store = [];


function usercheck(){

		var i;
	
	if(login!=null){
		for ( i=0; i<login.length;i++ ) {
			
			if(usernametextbox.value == login[i].username && passwordtextbox.value == login[i].Password)
			{	
				var login1 ={};
				login1.username = login[i].username;
				login1.email = login[i].email;
				login1.adminno = login[i].adminno;
				
				sessionStorage.setItem("studentname",JSON.stringify(login));
				
				window.location.href = '../Studenthome/Studenthome.html';
				return true;
			}
		}
	}
			
			else if(usernametextbox.value == "admin" && passwordtextbox.value =="adminpassword"){
				window.location.href= 'newpage.html';
				return false;
				
			}
			
			else if(usernametextbox.value == "teacher" && passwordtextbox.value == "teacherpassword"){
				window.location.href = '../Teacherhome/Teacherhome.html';
				return false;
			}
			
			else {
// Get the modal
				var modal = document.getElementById('myModal');

// Get the button that opens the modal
				var btn = document.getElementById("myBtn");



// Get the <span> element that closes the modal
				var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
				btn.onclick = function() {
				document.getElementById("message").innerText="Check your input";
				modal.style.display = "block";
				
				span.onclick = function() {
				modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
				window.onclick = function(event) {
				if (event.target == modal) {
				modal.style.display = "none";
    }
}
}				
			}
}		

		


