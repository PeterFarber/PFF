/*
	File: pff-wheel-animation.scss
	Author: Peter Farber
	Contributors: N/A
	Last Modified: 4/23/2017
	Copyright: PFF (Peter Farber's Framework)
	License: MIT
*/

//Animate the Wheels in.
 $(".pff-wheel").each(function(index, element){
	var PFF_Wheel_Thump = $(element).children(".pff-wheel-thumb");
	var PFF_Wheel_SDA = PFF_Wheel_Thump.css("stroke-dasharray").split(", ");
	var PFF_Transition = PFF_Wheel_Thump.css("transition");
	PFF_Wheel_Thump.css("transition", "none");
	PFF_Wheel_Thump.css("stroke-dashoffset", PFF_Wheel_SDA[0]);
	setTimeout(function() {
		PFF_Wheel_Thump.css("transition", PFF_Transition);
	    PFF_Wheel_Thump.css("stroke-dashoffset", 0);
	}, 300);
});

$(document).ready(function(){

	//Animate in/out based on the type passed in.
	function pff_amimate(element, type) {
		var PFF_Wheel_Thump = $(element).children(".pff-wheel-thumb");
		var PFF_Wheel_SDA = PFF_Wheel_Thump.css("stroke-dasharray").split(", ");
		if(type == "in"){
			PFF_Wheel_Thump.css("stroke-dashoffset", PFF_Wheel_SDA[0]);
		}else{
		    PFF_Wheel_Thump.css("stroke-dashoffset", 0);
		}
	}

    //On mouse enter animate selected element out.
	$( ".pff-wheel" ).mouseenter(function() {
		pff_amimate(this, "in");
	});

	//On mouse leave animate selected element in.
	$( ".pff-wheel" ).mouseleave(function() {
		pff_amimate(this, "out");
	});


});	