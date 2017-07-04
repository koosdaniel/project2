var container;
var changeColor;
var resetColor;
var originalColor;
var permaColor;
var perma;
var counter = 0;
var colorMemory;

window.onload = function(event) {
	container = document.getElementById("big");
	var containerStyle = window.getComputedStyle(container);

	originalColor = containerStyle.backgroundColor;

	perma = true;


	changeColor = function(elem) {

		var elemStyle = window.getComputedStyle(elem);
		container.style.backgroundColor = elemStyle.backgroundColor;
		if(counter > 0 ){
			perma = false;
		}
		else{
			perma = true;
		}
	}
	resetColor = function() {
		if(perma){
			container.style.backgroundColor = originalColor;
		   }
		else{
			container.style.backgroundColor = colorMemory;
		}
	}

	permaColor = function(elem){
		var elemStyle = window.getComputedStyle(elem);
		container.style.backgroundColor = elemStyle.backgroundColor;
		colorMemory =  elemStyle.backgroundColor;
		perma = false;
		counter ++;
	}
}
