function Print() {
	
	window.print();
	
}
function preventback()
{window.history.forward();} //when user go to other page
setTimeout("preventback()",0); //
window.onunload=function(){null};