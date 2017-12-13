$( document ).ready(function() {

  // Define global variables: totalScore, wins, losses
  var wins = 0;
  var losses = 0;
  var totalScore = 0;
  var randomNumber = 0;

  // Each crystal represents a number, number is hidden
  var blackCrystal = 6;
  var greenCrystal = 1;
  var purpleCrystal = 28;
  var rainbowCrystal = 13;

  // Create function to generate a random number and insert in #random-number span
  var updateRandomNumber = function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    $("#random-number").html(randomNumber);
  };

  updateRandomNumber();

  // Reset function - totalScore back to zero and re-run randomNumber function
  var reset = function() {
    totalScore = 0;
    updateRandomNumber();
  }

  // By clicking on a crystal, you will add a specific amount of points to your total score.
  $("#crystals-black").on("click", function() {
    totalScore = totalScore + blackCrystal;
    $("#total-score").html(totalScore);
  });

  $("#crystals-green").on("click", function() {
    totalScore = totalScore + greenCrystal;
    $("#total-score").html(totalScore);
  });

  $("#crystals-purple").on("click", function() {
    totalScore = totalScore + purpleCrystal;
    $("#total-score").html(totalScore);
  });

  $("#crystals-rainbow").on("click", function() {
    totalScore = totalScore + rainbowCrystal;
    $("#total-score").html(totalScore);
  });

  // If totalScore = randomNumber, increment wins and reset the game. If totalScore exceeds randomNumber, increment losses and reset the game.

  if (totalScore === randomNumber) {
    wins++;
    $("#wins").html(wins);
    reset();
    $("#randomNumber").html(randomNumber);
    $("#total-score").html(totalScore);
  } else if (totalScore > randomNumber) {
    losses++;
    $("#losses").html(losses);
    reset();
    $("#randomNumber").html(randomNumber);
    $("#total-score").html(totalScore);
  };



});
