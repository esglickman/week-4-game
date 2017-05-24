$(document).ready(function(){

	var randomNumber = Math.floor((Math.random() * 150)+30);
	var goalNumber = 0;
	var totalScore = 0;
	
	
//When you click the goal box it will generate a random number
	
	$("#goalBox").click(function() {
	goalNumber = $(this).val();
	$("#goalAmount").text(randomNumber);

	});
//When you click on the crystals, they will generate a number and it will go in the scoreBox
	$(".crystals").click(function() {
	//generates random crystal number when u click
	var randomCrystal = Math.floor((Math.random() * 30)+1);

	totalScore = Number(randomCrystal) + Number(totalScore);
	$("#scoreAmount").text(totalScore);
	console.log("#scoreAmount");

	}); 

	function winLose() {
		if (totalScore == goalNumber) {
		var wins = "";
		$("#winAmount").html(wins);
			wins++;
		}

		if (totalScore > goalNumber) {
			var loses = "";
			$("#loseAmount").html(loses++);
			console.log(totalScore);
			loses++;
		}


	};

	winLose();


			
	//});
	

});