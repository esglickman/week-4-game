$(document).ready(function(){

	
	var goalNumber = 0;
	var totalScore = 0;
	var randomNumber = Math.floor((Math.random() * 150)+30);
	
	
//When you click the goal box it will generate a random number
	function restart(){
		//$("#goalAmount").append(goalNumber);
		randomNumber;
		$("#goalAmount").text(randomNumber);	
	}

	restart();


	function win() {
	
		var wins = 0;
		wins++;

		$("#winAmount").append(wins);
		reset();

	}

	function lose() {
		var losses = 0;
		losses++;
		$("#loseAmount").append(losses);
		reset;
	}
	
//When you click on the crystals, they will generate a number and it will go in the scoreBox
	$(".crystals").click(function() {
	//generates random crystal number when u click
	var randomCrystal = Math.floor((Math.random() * 30)+1);

	totalScore = Number(randomCrystal) + Number(totalScore);
	$("#scoreAmount").text(totalScore);
	console.log("#scoreAmount");


	}); 

	if (totalScore == randomNumber) {
		win();
		reset();

	} else if (totalScore > randomNumber) { 
		lose();
		reset();
	}


		/*if ("#scoreAmount" > "#goalAmount") {
			var loses = 0;
			$("#loseAmount").append(loses++);

			restart();
		}

		winLose();


	};

	//winLose();

	console.log(goalNumber);
	console.log(totalScore);
	console.log("#scoreAmount");
	console.log("#goalAmount");


			
	//});*/
	

});