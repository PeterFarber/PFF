/*
	File: pff-wheel-animation.scss
	Author: Peter Farber
	Contributors: N/A
	Last Modified: 4/23/2017
	Copyright: PFF (Peter Farber's Framework)
	License: MIT
*/

$(document).ready(function(){
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
});	