//When the page is refreshed
if (sessionStorage.getItem("pageLoaded")){
    //a random number between 1 and six should be generated for player 1 and player two
    player1Number = Math.floor((Math.random() * 6) + 1);
    player2Number = Math.floor((Math.random() * 6) + 1);
    //update the message: 
    if (player1Number == player2Number){
        message = "Draw!";
    } 
    else if (player1Number > player2Number) {
        message = "🚩 Player 1 Wins!";
    } else {
        message = "Player 2 Wins! 🚩";
    }
    document.querySelector("h1").innerHTML = message;
    //the dice images should be updated for each player
    document.querySelector(".img1").setAttribute("src", "images/dice" + player1Number + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + player2Number + ".png");
  
}else {
    sessionStorage.setItem('pageLoaded', 'true')
}