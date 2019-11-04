var allboxes = document.querySelectorAll('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9, #box10, #box11, #box12, #box13, #box14, #box15, #box16, #box17, #box18, #box19, #box20, #box21, #box22, #box23, #box24, #box25, #box26, #resetbox, #images, #image1, #image2, #image3, #image4, #image5, #image6, #image7, #image8, #image9, #image10, #image11, #image12, #image13, #image14, #image15, #image16, #aline1, #aline2, #aaline1, #aaline2, #aaline3, #kaline1, #kaline2, #iline1, #iiline1, #uline1, #uuline1, #chaline1, #yaline1, #yaline2, #shaline1, #shaline2');
	for(var i=0; allboxes[i]; i++){
 	var changebox =  allboxes[i];
 	changebox.style.transitionDuration = "0.8s";
}

function Letter() {

	var allboxes = document.querySelectorAll('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9, #box10, #box11, #box12, #box13, #box14, #box15, #box16, #box17, #box18, #box19, #box20, #box21, #box22, #box23, #box24, #box25, #box26, #image1, #image2, #image3, #image4, #image5, #image6, #image7, #image8, #image9, #image10, #image11, #image12, #image13, #image14, #image15, #image16');
	var hlines = document.querySelectorAll('#aline1, #aaline1, #kaline1, #iline1, #iiline1, #uline1, #uuline1, #chaline1, #yaline1, #shaline1')
	var vlines = document.querySelectorAll('#aline2, #aaline2, #aaline3, #kaline2, #yaline2, #shaline2')

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

	document.getElementById("aaline1").style.left  = "85.6vw";
	document.getElementById("aaline2").style.top  = "86.5vh";
	document.getElementById("aaline3").style.top  = "86.5vh";

	document.getElementById("kaline2").style.top  = "86.3vh";

	document.getElementById("uuline1").style.left  = "85.6vw";

	document.getElementById("chaline1").style.left  = "85.6vw";

	document.getElementById("yaline1").style.left  = "85.6vw";
	document.getElementById("yaline2").style.top  = "86.3vh";

	document.getElementById("shaline1").style.left  = "85.6vw";
	document.getElementById("shaline2").style.top  = "86.3vh";

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
	document.getElementById("image3").style.opacity  = "1";
}

function Click3() {
	Letter();
	document.getElementById("box3").style.opacity  = "1";

	document.getElementById("image6").style.opacity  = "1";
}

function Click4() {
	Letter();
	document.getElementById("box4").style.opacity  = "1";

	document.getElementById("iline1").style.width  = "50.5vw";

	document.getElementById("image8").style.opacity  = "1";
}

function Click5() {
	Letter();
	document.getElementById("box5").style.opacity  = "1";

	document.getElementById("uline1").style.width  = "30.3vw";

	document.getElementById("image11").style.opacity  = "1";
}

function Click6() {
	Letter();
	document.getElementById("box6").style.opacity  = "1";

	document.getElementById("aaline1").style.width  = "50.5vw";
	document.getElementById("aaline1").style.left  = "35.1vw";
	document.getElementById("aaline2").style.height  = "60.8vh";
	document.getElementById("aaline2").style.top  = "25.7vh";
	document.getElementById("aaline3").style.height  = "50.8vh";
	document.getElementById("aaline3").style.top  = "35.7vh";

	document.getElementById("image2").style.opacity  = "1";
}

function Click7() {
	Letter();
	document.getElementById("box7").style.opacity  = "1";

	document.getElementById("image4").style.opacity  = "1";
}

function Click8() {
	Letter();
	document.getElementById("box8").style.opacity  = "1";

	document.getElementById("image7").style.opacity  = "1";
}

function Click9() {
	Letter();
	document.getElementById("box9").style.opacity  = "1";

	document.getElementById("aline1").style.width  = "40.4vw";

	document.getElementById("image10").style.opacity  = "1";
}

function Click10() {
	Letter();
	document.getElementById("box10").style.opacity  = "1";

	document.getElementById("uuline1").style.width  = "30.3vw";
	document.getElementById("uuline1").style.left  = "55.3vw";

	document.getElementById("image12").style.opacity  = "1";
}

function Click11() {
	Letter();
	document.getElementById("box11").style.opacity  = "1";

	document.getElementById("kaline1").style.width  = "50.5vw";
	document.getElementById("kaline2").style.height  = "48.8vh";
	document.getElementById("kaline2").style.top  = "37.7vh";
	
	document.getElementById("image5").style.opacity  = "1";
}

function Click12() {
	Letter();
	document.getElementById("box12").style.opacity  = "1";

	document.getElementById("chaline1").style.width  = "30.3vw";
	document.getElementById("chaline1").style.left  = "55.3vw";

	document.getElementById("image13").style.opacity  = "1";
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

	document.getElementById("image9").style.opacity  = "1";
}

function Click17() {
	Letter();
	document.getElementById("box17").style.opacity  = "1";

	document.getElementById("image14").style.opacity  = "1";
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

	document.getElementById("yaline1").style.width  = "30.3vw";
	document.getElementById("yaline1").style.left  = "55.3vw";

	document.getElementById("yaline2").style.height  = "37vh";
	document.getElementById("yaline2").style.top  = "49.7vh";

	document.getElementById("image15").style.opacity  = "1";
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

	document.getElementById("shaline1").style.width  = "10.1vw";
	document.getElementById("shaline1").style.left  = "75.5vw";

	document.getElementById("shaline2").style.height  = "61vh";
	document.getElementById("shaline2").style.top  = "25.6vh";

	document.getElementById("image16").style.opacity  = "1";
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
	var hlines = document.querySelectorAll('#aline1, #aaline1, #kaline1, #iline1, #iiline1, #uline1, #uuline1, #chaline1, #yaline1, #shaline1')
	var vlines = document.querySelectorAll('#aline2, #aaline2, #aaline3, #kaline2, #yaline2, #shaline2')
	var iletters = document.querySelectorAll('#image1, #image2, #image3, #image4, #image5, #image6, #image7, #image8, #image9, #image10, #image11, #image12, #image13, #image14, #image15, #image16')

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

	document.getElementById("aaline1").style.left  = "85.6vw";
	document.getElementById("aaline2").style.top  = "86.5vh";
	document.getElementById("aaline3").style.top  = "86.5vh";

	document.getElementById("kaline2").style.top  = "86.3vh";

	document.getElementById("uuline1").style.left  = "85.6vw";

	document.getElementById("chaline1").style.left  = "85.6vw";

	document.getElementById("yaline1").style.left  = "85.6vw";
	document.getElementById("yaline2").style.top  = "86.3vh";

	document.getElementById("shaline1").style.left  = "85.6vw";
	document.getElementById("shaline2").style.top  = "86.3vh";
}
