const myButton = document.getElementById("myButton");

let yourScore = document.querySelector("#yourScore");
let compScore = document.querySelector("#compScore");
console.log(yourScore.innerText);
console.log(compScore.innerText);
let winner = null;
title = document.querySelector("h3");

function playGame() {
    console.log("clicked");
    let randNumber1 = Math.ceil(Math.random()*6);
    document.querySelector(".img1").setAttribute("src", `images/dice${randNumber1}.png`);

    let randNumber2 = Math.ceil(Math.random()*6);
    document.querySelector(".img2").setAttribute("src", `images/dice${randNumber2}.png`);
    
    if (randNumber1 > randNumber2) {
        title.innerText = "You win!";
        title.style.color = "green";
        yourScoreValue = yourScore.innerText;
        yourScoreValue++;
        yourScore.innerText = yourScoreValue;
    } else if (randNumber1 < randNumber2) {
        title.innerText = "Computer wins!";
        title.style.color = "red";
        compScoreValue = compScore.innerText;
        compScoreValue++
        compScore.innerText = compScoreValue;
    } else {
        title.innerText = "Match drawn!";
        title.style.color = "grey";
    }
}

myButton.addEventListener("click", playGame);
