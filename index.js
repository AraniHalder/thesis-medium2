var allboxes = document.querySelectorAll('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9, #box10, #box11, #box12, #box13, #box14, #box15, #box16, #box17, #box18, #box19, #box20, #box21, #box22, #box23, #box24, #box25, #box26, #resetbox, #images, #image1, #image2, #image3, #image4, #image5, #image6, #image7, #image8, #image9, #image10, #image11, #image12, #image13, #image14, #image15, #image16, #image17, #image18, #image19, #image20, #image21, #image22, #image23, #image24, #image25, #image26, #aline1, #aline2, #aaline1, #aaline2, #aaline3, #kaline1, #kaline2, #iline1, #iiline1, #uline1, #uuline1, #chaline1, #yaline1, #yaline2, #shaline1, #shaline2, #maline1, #maline2, #paline1, #paline2, #shhaline1, #shhaline2, #raline1, #raline2, #naline1, #naline2, #ttaline1, #saline1, #saline2, #laline1, #laline2, #nnaline1, #nnaline2, #taline1, #bgimage1, #bgimage2, #bgimage3, #bgimage4, #bgimage5, #bgimage6, #bgimage7, #bgimage8, #bgimage9, #bgimage10, #bgimage11, #bgimage12, #bgimage13, #bgimage14, #bgimage15, #bgimage16, #bgimage17, #bgimage18, #bgimage19, #bgimage20, #bgimage21, #bgimage22, #bgimage23, #bgimage24, #bgimage25, #bgimage26, #htext1, #htext2, #htext3, #htext4, #htext5, #htext6, #sidetext3, #sidetext4, #vtext1, #vtext2, #vtext3, #vtext4, #vtext5, #vtext6, #vtext7');
	for(var i=0; allboxes[i]; i++){
 	var changebox =  allboxes[i];
 	changebox.style.transitionDuration = "0.8s";
}

function Letter() {

	var allboxes = document.querySelectorAll('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9, #box10, #box11, #box12, #box13, #box14, #box15, #box16, #box17, #box18, #box19, #box20, #box21, #box22, #box23, #box24, #box25, #box26, #image1, #image2, #image3, #image4, #image5, #image6, #image7, #image8, #image9, #image10, #image11, #image12, #image13, #image14, #image15, #image16, #image17, #image18, #image19, #image20, #image21, #image22, #image23, #image24, #image25, #image26, #bgimage1, #bgimage2, #bgimage3, #bgimage4, #bgimage5, #bgimage6, #bgimage7, #bgimage8, #bgimage9, #bgimage10, #bgimage11, #bgimage12, #bgimage13, #bgimage14, #bgimage15, #bgimage16, #bgimage17, #bgimage18, #bgimage19, #bgimage20, #bgimage21, #bgimage22, #bgimage23, #bgimage24, #bgimage25, #bgimage26');
	var hlines = document.querySelectorAll('#aline1, #aaline1, #kaline1, #iline1, #iiline1, #uline1, #uuline1, #chaline1, #yaline1, #shaline1, #maline1, #paline1, #shhaline1, #raline1, #naline1, #ttaline1, #saline1, #laline1, #nnaline1, #taline1')
	var vlines = document.querySelectorAll('#aline2, #aaline2, #aaline3, #kaline2, #yaline2, #shaline2, #maline2, #paline2, #shhaline2, #raline2, #naline2, #saline2, #laline2, #nnaline2')
	var hortext = document.querySelectorAll('#htext1, #htext2, #htext3, #htext4, #htext5, #htext6, #vtext1, #vtext2, #vtext3, #vtext4, #vtext5, #vtext6, #vtext7')


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

	for(var i=0; hortext[i]; i++){
    var changehortext =  hortext[i];
    changehortext.style.opacity = "30%";
	}

	// show resetbox
	document.getElementById("resetbox").style.opacity  = "1";

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

	document.getElementById("maline2").style.top  = "86.3vh";

	document.getElementById("paline1").style.left  = "85.6vw";
	document.getElementById("paline2").style.top  = "86.3vh";

	document.getElementById("shhaline1").style.left  = "85.6vw";
	document.getElementById("shhaline2").style.top  = "86.3vh";

	document.getElementById("raline2").style.top  = "86.3vh";

	document.getElementById("naline1").style.left  = "85.6vw";
	document.getElementById("naline2").style.top  = "86.3vh";

	document.getElementById("saline1").style.left  = "85.6vw";
	document.getElementById("saline2").style.top  = "86.3vh";

	document.getElementById("laline1").style.left  = "85.6vw";
	document.getElementById("laline2").style.top  = "86.3vh";

	document.getElementById("nnaline2").style.top  = "86.3vh";

	document.getElementById("sidetext3").style.opacity  = "1";
	document.getElementById("sidetext4").style.opacity  = "1";
}


function Click1() {
	Letter();
	document.getElementById("box1").style.opacity  = "1";

	document.getElementById("aline1").style.width  = "50.5vw";
	document.getElementById("aline2").style.height  = "48.8vh";
	document.getElementById("aline2").style.top  = "37.7vh";

	document.getElementById("image1").style.opacity  = "1";

	document.getElementById("bgimage1").style.opacity  = "1";

	document.getElementById("htext6").style.opacity  = "1";

	document.getElementById("vtext1").style.opacity  = "1";
}

function Click2() {
	Letter();
	document.getElementById("box2").style.opacity  = "1";
	document.getElementById("image3").style.opacity  = "1";

	document.getElementById("bgimage2").style.opacity  = "1";

	document.getElementById("htext6").style.opacity  = "1";

	document.getElementById("vtext2").style.opacity  = "1";
}

function Click3() {
	Letter();
	document.getElementById("box3").style.opacity  = "1";

	document.getElementById("image6").style.opacity  = "1";

	document.getElementById("bgimage3").style.opacity  = "1";

	document.getElementById("htext6").style.opacity  = "1";

	document.getElementById("vtext3").style.opacity  = "1";
}

function Click4() {
	Letter();
	document.getElementById("box4").style.opacity  = "1";

	document.getElementById("iline1").style.width  = "50.5vw";

	document.getElementById("image8").style.opacity  = "1";

	document.getElementById("bgimage4").style.opacity  = "1";

	document.getElementById("htext6").style.opacity  = "1";

	document.getElementById("vtext4").style.opacity  = "1";
}

function Click5() {
	Letter();
	document.getElementById("box5").style.opacity  = "1";

	document.getElementById("uline1").style.width  = "30.3vw";

	document.getElementById("image11").style.opacity  = "1";

	document.getElementById("bgimage5").style.opacity  = "1";

	document.getElementById("htext6").style.opacity  = "1";

	document.getElementById("vtext5").style.opacity  = "1";
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

	document.getElementById("bgimage6").style.opacity  = "1";

	document.getElementById("htext5").style.opacity  = "1";

	document.getElementById("vtext1").style.opacity  = "1";
}

function Click7() {
	Letter();
	document.getElementById("box7").style.opacity  = "1";

	document.getElementById("image4").style.opacity  = "1";

	document.getElementById("bgimage7").style.opacity  = "1";

	document.getElementById("htext5").style.opacity  = "1";

	document.getElementById("vtext2").style.opacity  = "1";
}

function Click8() {
	Letter();
	document.getElementById("box8").style.opacity  = "1";

	document.getElementById("image7").style.opacity  = "1";

	document.getElementById("bgimage8").style.opacity  = "1";

	document.getElementById("htext5").style.opacity  = "1";

	document.getElementById("vtext3").style.opacity  = "1";
}

function Click9() {
	Letter();
	document.getElementById("box9").style.opacity  = "1";

	document.getElementById("aline1").style.width  = "40.4vw";

	document.getElementById("image10").style.opacity  = "1";

	document.getElementById("bgimage9").style.opacity  = "1";

	document.getElementById("htext5").style.opacity  = "1";

	document.getElementById("vtext4").style.opacity  = "1";
}

function Click10() {
	Letter();
	document.getElementById("box10").style.opacity  = "1";

	document.getElementById("uuline1").style.width  = "30.3vw";
	document.getElementById("uuline1").style.left  = "55.3vw";

	document.getElementById("image12").style.opacity  = "1";

	document.getElementById("bgimage10").style.opacity  = "1";

	document.getElementById("htext5").style.opacity  = "1";

	document.getElementById("vtext5").style.opacity  = "1";
}

function Click11() {
	Letter();
	document.getElementById("box11").style.opacity  = "1";

	document.getElementById("kaline1").style.width  = "50.5vw";
	document.getElementById("kaline2").style.height  = "48.8vh";
	document.getElementById("kaline2").style.top  = "37.7vh";
	
	document.getElementById("image5").style.opacity  = "1";

	document.getElementById("bgimage11").style.opacity  = "1";

	document.getElementById("htext4").style.opacity  = "1";

	document.getElementById("vtext1").style.opacity  = "1";
}

function Click12() {
	Letter();
	document.getElementById("box12").style.opacity  = "1";

	document.getElementById("chaline1").style.width  = "30.3vw";
	document.getElementById("chaline1").style.left  = "55.3vw";

	document.getElementById("image13").style.opacity  = "1";

	document.getElementById("bgimage12").style.opacity  = "1";

	document.getElementById("htext4").style.opacity  = "1";

	document.getElementById("vtext4").style.opacity  = "1";
}

function Click13() {
	Letter();
	document.getElementById("box13").style.opacity  = "1";

	document.getElementById("paline1").style.width  = "30.3vw";
	document.getElementById("paline1").style.left  = "55.3vw";

	document.getElementById("paline2").style.height  = "61vh";
	document.getElementById("paline2").style.top  = "25.6vh";

	document.getElementById("image18").style.opacity  = "1";	

	document.getElementById("bgimage13").style.opacity  = "1";

	document.getElementById("htext4").style.opacity  = "1";

	document.getElementById("vtext5").style.opacity  = "1";
}

function Click14() {
	Letter();
	document.getElementById("box14").style.opacity  = "1";

	document.getElementById("ttaline1").style.width  = "40.4vw";

	document.getElementById("image22").style.opacity  = "1";	

	document.getElementById("bgimage14").style.opacity  = "1";

	document.getElementById("htext4").style.opacity  = "1";

	document.getElementById("vtext6").style.opacity  = "1";
}

function Click15() {
	Letter();
	document.getElementById("box15").style.opacity  = "1";

	document.getElementById("taline1").style.width  = "40.4vw";

	document.getElementById("image26").style.opacity  = "1";

	document.getElementById("bgimage15").style.opacity  = "1";

	document.getElementById("htext4").style.opacity  = "1";

	document.getElementById("vtext7").style.opacity  = "1";
}

function Click16() {
	Letter();
	document.getElementById("box16").style.opacity  = "1";

	document.getElementById("image9").style.opacity  = "1";

	document.getElementById("bgimage16").style.opacity  = "1";

	document.getElementById("htext3").style.opacity  = "1";

	document.getElementById("vtext1").style.opacity  = "1";
}

function Click17() {
	Letter();
	document.getElementById("box17").style.opacity  = "1";

	document.getElementById("image14").style.opacity  = "1";

	document.getElementById("bgimage17").style.opacity  = "1";

	document.getElementById("htext3").style.opacity  = "1";

	document.getElementById("vtext4").style.opacity  = "1";
}

function Click18() {
	Letter();
	document.getElementById("box18").style.opacity  = "1";

	document.getElementById("maline1").style.width  = "30.3vw";
	document.getElementById("maline2").style.height  = "60.5vh";
	document.getElementById("maline2").style.top  = "26vh";

	document.getElementById("image17").style.opacity  = "1";

	document.getElementById("bgimage18").style.opacity  = "1";

	document.getElementById("htext3").style.opacity  = "1";

	document.getElementById("vtext5").style.opacity  = "1";
}

function Click19() {
	Letter();
	document.getElementById("box19").style.opacity  = "1";

	document.getElementById("naline1").style.width  = "30.3vw";
	document.getElementById("naline1").style.left  = "55.3vw";

	document.getElementById("naline2").style.height  = "61vh";
	document.getElementById("naline2").style.top  = "25.6vh";

	document.getElementById("image21").style.opacity  = "1";

	document.getElementById("bgimage19").style.opacity  = "1";

	document.getElementById("htext3").style.opacity  = "1";

	document.getElementById("vtext6").style.opacity  = "1";
}

function Click20() {
	Letter();
	document.getElementById("box20").style.opacity  = "1";

	document.getElementById("nnaline1").style.width  = "30.3vw";

	document.getElementById("nnaline2").style.height  = "60.5vh";
	document.getElementById("nnaline2").style.top  = "26vh";

	document.getElementById("image25").style.opacity  = "1";

	document.getElementById("bgimage20").style.opacity  = "1";

	document.getElementById("htext3").style.opacity  = "1";

	document.getElementById("vtext7").style.opacity  = "1";
}

function Click21() {
	Letter();
	document.getElementById("box21").style.opacity  = "1";

	document.getElementById("yaline1").style.width  = "30.3vw";
	document.getElementById("yaline1").style.left  = "55.3vw";

	document.getElementById("yaline2").style.height  = "37vh";
	document.getElementById("yaline2").style.top  = "49.7vh";

	document.getElementById("image15").style.opacity  = "1";

	document.getElementById("bgimage21").style.opacity  = "1";

	document.getElementById("htext2").style.opacity  = "1";

	document.getElementById("vtext4").style.opacity  = "1";
}

function Click22() {
	Letter();
	document.getElementById("box22").style.opacity  = "1";

	document.getElementById("raline1").style.width  = "40.4vw";

	document.getElementById("raline2").style.height  = "48.8vh";
	document.getElementById("raline2").style.top  = "37.7vh";	

	document.getElementById("image20").style.opacity  = "1";

	document.getElementById("bgimage22").style.opacity  = "1";

	document.getElementById("htext2").style.opacity  = "1";

	document.getElementById("vtext6").style.opacity  = "1";
}

function Click23() {
	Letter();
	document.getElementById("box23").style.opacity  = "1";

	document.getElementById("laline1").style.width  = "30.3vw";
	document.getElementById("laline1").style.left  = "55.3vw";

	document.getElementById("laline2").style.height  = "61vh";
	document.getElementById("laline2").style.top  = "25.6vh";

	document.getElementById("image24").style.opacity  = "1";

	document.getElementById("bgimage23").style.opacity  = "1";

	document.getElementById("htext2").style.opacity  = "1";

	document.getElementById("vtext7").style.opacity  = "1";
}

function Click24() {
	Letter();
	document.getElementById("box24").style.opacity  = "1";

	document.getElementById("shaline1").style.width  = "10.1vw";
	document.getElementById("shaline1").style.left  = "75.5vw";

	document.getElementById("shaline2").style.height  = "61vh";
	document.getElementById("shaline2").style.top  = "25.6vh";

	document.getElementById("image16").style.opacity  = "1";

	document.getElementById("bgimage24").style.opacity  = "1";

	document.getElementById("htext1").style.opacity  = "1";

	document.getElementById("vtext4").style.opacity  = "1";
}

function Click25() {
	Letter();
	document.getElementById("box25").style.opacity  = "1";

	document.getElementById("shhaline1").style.width  = "50.5vw";
	document.getElementById("shhaline1").style.left  = "35.1vw";

	document.getElementById("shhaline2").style.height  = "36.6vh";
	document.getElementById("shhaline2").style.top  = "49.9vh";

	document.getElementById("image19").style.opacity  = "1";

	document.getElementById("bgimage25").style.opacity  = "1";

	document.getElementById("htext1").style.opacity  = "1";

	document.getElementById("vtext6").style.opacity  = "1";
}

function Click26() {
	Letter();
	document.getElementById("box26").style.opacity  = "1";

	document.getElementById("saline1").style.width  = "30.3vw";
	document.getElementById("saline1").style.left  = "55.3vw";

	document.getElementById("saline2").style.height  = "48.8vh";
	document.getElementById("saline2").style.top  = "37.7vh";

	document.getElementById("image23").style.opacity  = "1";

	document.getElementById("bgimage26").style.opacity  = "1";

	document.getElementById("htext1").style.opacity  = "1";

	document.getElementById("vtext7").style.opacity  = "1";
}

function Reset() {
	var allboxes = document.querySelectorAll('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9, #box10, #box11, #box12, #box13, #box14, #box15, #box16, #box17, #box18, #box19, #box20, #box21, #box22, #box23, #box24, #box25, #box26');
	var hlines = document.querySelectorAll('#aline1, #aaline1, #kaline1, #iline1, #iiline1, #uline1, #uuline1, #chaline1, #yaline1, #shaline1, #maline1, #paline1, #shhaline1, #raline1, #naline1, #ttaline1, #saline1, #laline1, #nnaline1, #taline1')
	var vlines = document.querySelectorAll('#aline2, #aaline2, #aaline3, #kaline2, #yaline2, #shaline2, #maline2, #paline2, #shhaline2, #raline2, #naline2, #saline2, #laline2, #nnaline2')
	var iletters = document.querySelectorAll('#image1, #image2, #image3, #image4, #image5, #image6, #image7, #image8, #image9, #image10, #image11, #image12, #image13, #image14, #image15, #image16, #image17, #image18, #image19, #image20, #image21, #image22, #image23, #image24, #image25, #image26, #bgimage1, #bgimage2, #bgimage3, #bgimage4, #bgimage5, #bgimage6, #bgimage7, #bgimage8, #bgimage9, #bgimage10, #bgimage11, #bgimage12, #bgimage13, #bgimage14, #bgimage15, #bgimage16, #bgimage17, #bgimage18, #bgimage19, #bgimage20, #bgimage21, #bgimage22, #bgimage23, #bgimage24, #bgimage25, #bgimage26')
	var hortext = document.querySelectorAll('#htext1, #htext2, #htext3, #htext4, #htext5, #htext6, #vtext1, #vtext2, #vtext3, #vtext4, #vtext5, #vtext6, #vtext7')


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

	for(var i=0; hortext[i]; i++){
    var changehortext =  hortext[i];
    changehortext.style.opacity = "100%";
	}	

	// hide resetbox
	document.getElementById("resetbox").style.opacity  = "0";

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

	document.getElementById("maline2").style.top  = "86.3vh";

	document.getElementById("paline1").style.left  = "85.6vw";
	document.getElementById("paline2").style.top  = "86.3vh";

	document.getElementById("shhaline1").style.left  = "85.6vw";
	document.getElementById("shhaline2").style.top  = "86.3vh";

	document.getElementById("raline2").style.top  = "86.3vh";

	document.getElementById("naline1").style.left  = "85.6vw";
	document.getElementById("naline2").style.top  = "86.3vh";

	document.getElementById("saline1").style.left  = "85.6vw";
	document.getElementById("saline2").style.top  = "86.3vh";

	document.getElementById("laline1").style.left  = "85.6vw";
	document.getElementById("laline2").style.top  = "86.3vh";

	document.getElementById("nnaline2").style.top  = "86.3vh";

	document.getElementById("sidetext3").style.opacity  = "30%";
	document.getElementById("sidetext4").style.opacity  = "30%";



}
