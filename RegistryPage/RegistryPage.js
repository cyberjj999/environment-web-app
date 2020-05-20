var register = [];

// Stores data in local storage
function registerform() {
	
	if(localStorage.getItem('form') === null) {
		var rForm = {};
		rForm.username = document.getElementById('username').value;
		rForm.email = document.getElementById('email').value;
		rForm.Password = document.getElementById('password').value;
		rForm.adminno = document.getElementById('admin').value;
		register.push(rForm);

		localStorage.setItem('form', JSON.stringify(register));	
			
}

		else{
	
		var get = localStorage.getItem('form');
		get = JSON.parse(get);

		var rForm = {};
		rForm.username = document.getElementById('username').value;
		rForm.email = document.getElementById('email').value;
		rForm.Password = document.getElementById('password').value;
		rForm.adminno = document.getElementById('admin').value;
		get.push(rForm);

		localStorage.setItem('form', JSON.stringify(get));

}
}