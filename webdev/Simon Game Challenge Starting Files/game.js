const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;


// Function to generate the next sequence
function nextSequence() {
    level += 1;
    $("h1").text("Level " + level);
    const randomNumber = Math.floor(Math.random() * 4); // Generate random number between 0 and 3
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    animateButton(randomChosenColor);
    playSound(randomChosenColor);
    return randomNumber;
}

// Function to play a sound
function playSound(color) {
    var soundSrc = "sounds/" + color + ".mp3";
    var sound = new Audio(soundSrc);
    sound.play();
}

// Add new color to the game pattern and play its sound
function addNewColorToPattern() {
    var randomChosenColor = buttonColours[nextSequence()];
    gamePattern.push(randomChosenColor);          
}

// Function to animate the new button 
function animateButton(color) {
    const selector = "#" + color;
    $(selector).fadeOut(100).fadeIn(100);
}

function flashAnimation(element, elementClass) {
    element.addClass(elementClass);
    setTimeout (() => {
        element.removeClass(elementClass);
    }, 100);
}

// Function to compare user pattern with game pattern
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Game pattern = " + gamePattern);
        console.log("user pattern = " + userClickedPattern);
        if (gamePattern.length == userClickedPattern.length){
            setTimeout(() => {
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
    } else {
        started = false;
        playSound("wrong");
        flashAnimation($("body"), "game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        restartGame();
        $(document).one("keypress", function(){
            started = true;
            nextSequence();
        });
    }
}

function restartGame() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
   
}


$(document).one("keypress", function(){
    started = true;
    nextSequence();
});



$(".btn").on("click", function(){
    if (started == true) {
        clickedButton = $(this);
        var userChosenColour = clickedButton.attr("id");
        userClickedPattern.push(userChosenColour);
        flashAnimation(clickedButton, "pressed")
        playSound(userChosenColour);
        checkAnswer(userClickedPattern.length - 1);
    }
   
})


