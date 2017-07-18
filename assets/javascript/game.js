var target = 0;
var button1 = 0;
var button2 = 0;
var button3 = 0;
var button4 = 0;
var sum = 0;
var wins = 0;
var losses = 0;
var message = "New Game. Click to Play.";

//Function to get random number
//parameters:
//   rangeLow: minimum random number
//   rangeHigh: maximum random number
//returns: 
//   int: random number between rangeLow-rangeHigh
function getRandom(rangeLow, rangeHigh) {
	x = Math.random();
	x = x * (rangeHigh - rangeLow);
	x = Math.floor(x) + rangeLow;
	return x
}

//Function to initalize round
//initilizes target to random value between 19-120
//initilizes buttons to random values between 1-12
function startRound() {
	target = getRandom(19, 120);
	button1 = getRandom(1, 12);
	button2 = getRandom(1, 12);
	button3 = getRandom(1, 12);
	button4 = getRandom(1, 12);
	sum = 0;
	refreshHTML();
}

//Function to add button click numbers together
//declare winner/loser
function addToSum(n) {
	sum += n;
	if (sum == target) {
		winRound();
	} else if (sum > target) {
		loseRound();
	} else {
		message = "Keep Playing!"
	}
}

//Declares winner and restart round
function winRound() {
	wins++;
	message = "You Win! New Round"
	startRound();
}

//Declares loser and restarts round
function loseRound() {
	losses++;
	message = "You Lost! New Round"
	startRound();
}

//Function rewrites the HTML with each action
function refreshHTML() {
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("sum").innerHTML = sum;
	document.getElementById("target").innerHTML = target;
	document.getElementById("message").innerHTML = message;
}

startRound();

//jQuery for button clicks
$(document).ready(function () {

	$("#glasses").on("click", function () {
		addToSum(button1);
		refreshHTML();
	});

	$("#hat").on("click", function () {
		addToSum(button2);
		refreshHTML();
	});

	$("#cauldron").on("click", function () {
		addToSum(button3);
		refreshHTML();
	});

	$("#candles").on("click", function () {
		addToSum(button4);
		refreshHTML();
	});

});
