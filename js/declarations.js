/****************************
 * project2app/js/declarations.js
 * 
 * Synesthesizer: Layer Cake Music Demo
 * 2012 - Govinda Ram Pingali
 * LCC 6313 - Project 2
 * Georgia Institute of Technology
 ****************************/


//*** Global Variables ***//
var layerStep = 0;
var toggle = 0;
var i = 0;

//*** Emotion Variables ***//
var valence = 0;
var arousal = 0;

//*** Color Variables ***//
var red = 0;
var green = 0;
var blue = 0;

var color_result;



//*** Setting divs to variables ***//
var color1 = document.getElementById("option1_image");
var color2 = document.getElementById("option2_image");
var color3 = document.getElementById("option3_image");

var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
  
var vocals = document.getElementById("vocals");
var guitars = document.getElementById("guitars");
var keys = document.getElementById("keys");
var bass = document.getElementById("bass");
var drums = document.getElementById("drums");
   
var storyText = document.getElementById("storyText");
var buttonText = document.getElementById("buttonText");
var color_options = document.getElementById("color_options");

var results = document.getElementById("results");
var final = document.getElementById("final");
var result_color = document.getElementById("result_color");

var container = document.getElementById("container");
var intro = document.getElementById("intro");

var valence_span = document.getElementById("valence");
var arousal_span = document.getElementById("arousal");
var red_span = document.getElementById("red");
var green_span = document.getElementById("green");
var blue_span = document.getElementById("blue");




//*** Audio ***//

// Red
var drums_red = new Audio("media/drums_red.mp3");
var bass_red = new Audio("media/bass_red.mp3");
var keys_red = new Audio("media/keys_red.mp3");
var guitars_red = new Audio("media/guitars_red.mp3");
var vocals_red = new Audio("media/vocals_red.mp3");

// Green
var drums_green = new Audio("media/drums_green.mp3");
var bass_green = new Audio("media/bass_green.mp3");
var keys_green = new Audio("media/keys_green.mp3");
var guitars_green = new Audio("media/guitars_green.mp3");
var vocals_green = new Audio("media/vocals_green.mp3");

// Blue
var drums_blue = new Audio("media/drums_blue.mp3");
var bass_blue = new Audio("media/bass_blue.mp3");
var keys_blue = new Audio("media/keys_blue.mp3");
var guitars_blue = new Audio("media/guitars_blue.mp3");
var vocals_blue = new Audio("media/vocals_blue.mp3");


var drumsVariable;
var bassVariable;
var keysVariable;
var guitarsVariable;
var vocalsVariable;