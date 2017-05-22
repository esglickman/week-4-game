$(document).ready(function(){

	var randomNumber = Math.floor((Math.random() * 150)+30);
	var randomCrystal = Math.floor((Math.random() * 30)+1);
	var goalNumber = "";
	var totalScore = "";
	var wins = "";
	var loses = "";

	$("#goalBox").click(function() {
	goalNumber = $(this).val();
	$("#goalAmount").text(randomNumber);
	});



});