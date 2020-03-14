var photo1;
var photo2;
var photo3;
var photo4;
var photo5;
var photo6;
var photo7;
var photo8;
var photo9;

function getPhotos() {
	photo1 = document.querySelector("#dance");
	photo2 = document.querySelector("#hike");
	photo3 = document.querySelector("#paintball");
	photo4 = document.querySelector("#jazzy");
	photo5 = document.querySelector("#monkey");
	photo6 = document.querySelector("#range");
	photo7 = document.querySelector("#fam");
	photo8 = document.querySelector("#ball");
	photo9 = document.querySelector("#miguel");
	console.log("got them!")
}

function gray() { 
	photo1.style.filter = "grayscale(100%)";
	photo2.style.filter = "grayscale(100%)";
	photo3.style.filter = "grayscale(100%)";
	photo4.style.filter = "grayscale(100%)";
	photo5.style.filter = "grayscale(100%)";
	photo6.style.filter = "grayscale(100%)";
	photo7.style.filter = "grayscale(100%)";
	photo8.style.filter = "grayscale(100%)";
	photo9.style.filter = "grayscale(100%)";
}

function color() { 
	photo1.style.filter = "grayscale(0%)";
	photo2.style.filter = "grayscale(0%)";
	photo3.style.filter = "grayscale(0%)";
	photo4.style.filter = "grayscale(0%)";
	photo5.style.filter = "grayscale(0%)";
	photo6.style.filter = "grayscale(0%)";
	photo7.style.filter = "grayscale(0%)";
	photo8.style.filter = "grayscale(0%)";
	photo9.style.filter = "grayscale(0%)";
}

function desaturate() { 
	photo1.style.filter = "saturate(43%)";
	photo2.style.filter = "saturate(43%)";
	photo3.style.filter = "saturate(43%)";
	photo4.style.filter = "saturate(43%)";
	photo5.style.filter = "saturate(43%)";
	photo6.style.filter = "saturate(43%)";
	photo7.style.filter = "saturate(43%)";
	photo8.style.filter = "saturate(43%)";
	photo9.style.filter = "saturate(43%)";
}

function sepia() { 
	photo1.style.filter = "sepia(100%)";
	photo2.style.filter = "sepia(100%)";
	photo3.style.filter = "sepia(100%)";
	photo4.style.filter = "sepia(100%)";
	photo5.style.filter = "sepia(100%)";
	photo6.style.filter = "sepia(100%)";
	photo7.style.filter = "sepia(100%)";
	photo8.style.filter = "sepia(100%)";
	photo9.style.filter = "sepia(100%)";
}

function reverse() { 
	photo1.style.filter = "hue-rotate(180deg)";
	photo2.style.filter = "hue-rotate(180deg)";
	photo3.style.filter = "hue-rotate(180deg)";
	photo4.style.filter = "hue-rotate(180deg)";
	photo5.style.filter = "hue-rotate(180deg)";
	photo6.style.filter = "hue-rotate(180deg)";
	photo7.style.filter = "hue-rotate(180deg)";
	photo8.style.filter = "hue-rotate(180deg)";
	photo9.style.filter = "hue-rotate(180deg)";
}


