var allboxes = document.querySelectorAll('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9, #box10, #box11, #box12, #box13, #box14, #box15, #box16, #box17, #box18, #box19, #box20, #box21, #box22, #box23, #box24, #box25, #box26, #resetbox, #images, #image1, #aline1, #aline2');
	for(var i=0; allboxes[i]; i++){
 	var changebox =  allboxes[i];
 	changebox.style.transitionDuration = "0.4s";
}

function Letter() {

	var allboxes = document.querySelectorAll('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9, #box10, #box11, #box12, #box13, #box14, #box15, #box16, #box17, #box18, #box19, #box20, #box21, #box22, #box23, #box24, #box25, #box26, #image1');
	var hlines = document.querySelectorAll('#aline1')
	var vlines = document.querySelectorAll('#aline2')

	for(var i=0; allboxes[i]; i++){
    var changebox =  allboxes[i];
    changebox.style.opacity = "0";
	}

	for(var i=0; hlines[i]; i++){
    var changehlines =  hlines[i];
    changehlines.style.width = "0px";
	}

	for(var i=0; vlines[i]; i++){
    var changevlines =  vlines[i];
    changevlines.style.height = "0px";
	}

	// show resetbox
	document.getElementById("resetbox").style.opacity  = "1";

	document.getElementById("images").style.opacity  = "1";

	document.getElementById("aline2").style.top  = "86.3vh";

}


function Click1() {
	Letter();
	document.getElementById("box1").style.opacity  = "1";
	document.getElementById("aline1").style.width  = "50.5vw";
	document.getElementById("aline2").style.height  = "48.8vh";
	document.getElementById("aline2").style.top  = "37.7vh";
	document.getElementById("image1").style.opacity  = "1";
}

function Click2() {
	Letter();
	document.getElementById("box2").style.opacity  = "1";
}

function Click3() {
	Letter();
	document.getElementById("box3").style.opacity  = "1";
}

function Click4() {
	Letter();
	document.getElementById("box4").style.opacity  = "1";
}

function Click5() {
	Letter();
	document.getElementById("box5").style.opacity  = "1";
}

function Click6() {
	Letter();
	document.getElementById("box6").style.opacity  = "1";
}

function Click7() {
	Letter();
	document.getElementById("box7").style.opacity  = "1";
}

function Click8() {
	Letter();
	document.getElementById("box8").style.opacity  = "1";
}

function Click9() {
	Letter();
	document.getElementById("box9").style.opacity  = "1";
}

function Click10() {
	Letter();
	document.getElementById("box10").style.opacity  = "1";
}

function Click11() {
	Letter();
	document.getElementById("box11").style.opacity  = "1";
}

function Click12() {
	Letter();
	document.getElementById("box12").style.opacity  = "1";
}

function Click13() {
	Letter();
	document.getElementById("box13").style.opacity  = "1";
}

function Click14() {
	Letter();
	document.getElementById("box14").style.opacity  = "1";
}

function Click15() {
	Letter();
	document.getElementById("box15").style.opacity  = "1";
}

function Click16() {
	Letter();
	document.getElementById("box16").style.opacity  = "1";
}

function Click17() {
	Letter();
	document.getElementById("box17").style.opacity  = "1";
}

function Click18() {
	Letter();
	document.getElementById("box18").style.opacity  = "1";
}

function Click19() {
	Letter();
	document.getElementById("box19").style.opacity  = "1";
}

function Click20() {
	Letter();
	document.getElementById("box20").style.opacity  = "1";
}

function Click21() {
	Letter();
	document.getElementById("box21").style.opacity  = "1";
}

function Click22() {
	Letter();
	document.getElementById("box22").style.opacity  = "1";
}

function Click23() {
	Letter();
	document.getElementById("box23").style.opacity  = "1";
}

function Click24() {
	Letter();
	document.getElementById("box24").style.opacity  = "1";
}

function Click25() {
	Letter();
	document.getElementById("box25").style.opacity  = "1";
}

function Click26() {
	Letter();
	document.getElementById("box26").style.opacity  = "1";
}

function Reset() {
	var allboxes = document.querySelectorAll('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9, #box10, #box11, #box12, #box13, #box14, #box15, #box16, #box17, #box18, #box19, #box20, #box21, #box22, #box23, #box24, #box25, #box26');
	var hlines = document.querySelectorAll('#aline1')
	var vlines = document.querySelectorAll('#aline2')
	var iletters = document.querySelectorAll('#image1')

	for(var i=0; allboxes[i]; i++){
    var changebox =  allboxes[i];
    changebox.style.opacity = "1";
	}

	for(var i=0; hlines[i]; i++){
    var changehlines =  hlines[i];
    changehlines.style.width = "0px";
	}

	for(var i=0; vlines[i]; i++){
    var changevlines =  vlines[i];
    changevlines.style.height = "0px";
	}

	for(var i=0; iletters[i]; i++){
    var changeiletters =  iletters[i];
    changeiletters.style.opacity = "0";
	}	

	// hide resetbox
	document.getElementById("resetbox").style.opacity  = "0";
	document.getElementById("images").style.opacity  = "0";

	document.getElementById("aline2").style.top  = "86.3vh";
}
