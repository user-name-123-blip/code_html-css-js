function htmlp() {
	document.getElementById("t1").style.display="block";
	document.getElementById("t2").style.display="none";
	document.getElementById("t3").style.display="none";
	document.getElementById("iframe").style.display="none";
	document.getElementById("h").style.color="#fff";
	document.getElementById("c").style.color="#8f3";
	document.getElementById("j").style.color="#8f3";
	document.getElementById("out").style.color="#8f3";
}

function cssp() {
	document.getElementById("t1").style.display="none";
	document.getElementById("t2").style.display="block";
	document.getElementById("t3").style.display="none";
	document.getElementById("iframe").style.display="none";
	document.getElementById("h").style.color="#8f3";
	document.getElementById("c").style.color="#fff";
	document.getElementById("j").style.color="#8f3";
	document.getElementById("out").style.color="#8f3";
}

function jsp() {
	document.getElementById("t1").style.display="none";
	document.getElementById("t2").style.display="none";
	document.getElementById("t3").style.display="block";
	document.getElementById("iframe").style.display="none";
	document.getElementById("h").style.color="#8f3";
	document.getElementById("c").style.color="#8f3";
	document.getElementById("j").style.color="#fff";
	document.getElementById("out").style.color="#8f3";
}

function outputp() {
	document.getElementById("t1").style.display="none";
	document.getElementById("t2").style.display="none";
	document.getElementById("t3").style.display="none";
	document.getElementById("iframe").style.display="block";
	document.getElementById("h").style.color="#8f3";
	document.getElementById("c").style.color="#8f3";
	document.getElementById("j").style.color="#8f3";
	document.getElementById("out").style.color="#fff";

	/*Code*/
	let hcode = document.getElementById("t1").value;
	let ccode = document.getElementById("t2").value;
	let jcode = document.getElementById("t3").value;
	let output = document.getElementById("iframe");

	output.contentDocument.body.innerHTML = hcode + "<style>"+ccode+"</style>";
	output.contentWindow.eval(jcode);
}