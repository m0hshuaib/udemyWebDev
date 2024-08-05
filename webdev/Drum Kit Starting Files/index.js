var audioFiles = {
    w: "crash.mp3",
    a: "kick-bass.mp3",
    s: "snare.mp3",
    d: "tom-1.mp3",
    j: "tom-2.mp3",
    k: "tom-3.mp3",
    l: "tom-4.mp3"
};

var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
    temp = i;
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var drumId = this.innerHTML;
        playSound(drumId);
    });
    
}

document.addEventListener("keydown", function(event) {
    drumId = event.key;
    if (drumId in audioFiles) {
        playSound(drumId);
    }
});

function playSound(drumId) {
    var audio = new Audio();
    audio.src = "sounds/" + audioFiles[drumId];
    audio.play();
}
