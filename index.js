var randomValue1 = Math.floor(Math.random() * 6) + 1;
var randomValue2 = Math.floor(Math.random() * 6) + 1;


if(randomValue1 === 1){
    document.querySelector(".dice .img1").setAttribute("src", "./images/dice1.png");
} else if(randomValue1 === 2){
    document.querySelector(".dice .img1").setAttribute("src", "./images/dice2.png");
} else if(randomValue1 === 3){
    document.querySelector(".dice .img1").setAttribute("src", "./images/dice3.png");
} else if(randomValue1 === 4){
    document.querySelector(".dice .img1").setAttribute("src", "./images/dice4.png");
} else if(randomValue1 === 5){
    document.querySelector(".dice .img1").setAttribute("src", "./images/dice5.png");
} else{
    document.querySelector(".dice .img1").setAttribute("src", "./images/dice6.png");
}

if(randomValue2 === 1){
    document.querySelector(".dice .img2").setAttribute("src", "./images/dice1.png");
} else if(randomValue2 === 2){
    document.querySelector(".dice .img2").setAttribute("src", "./images/dice2.png");
} else if(randomValue2 === 3){
    document.querySelector(".dice .img2").setAttribute("src", "./images/dice3.png");
} else if(randomValue2 === 4){
    document.querySelector(".dice .img2").setAttribute("src", "./images/dice4.png");
} else if(randomValue2 === 5){
    document.querySelector(".dice .img2").setAttribute("src", "./images/dice5.png");
} else{
    document.querySelector(".dice .img2").setAttribute("src", "./images/dice6.png");
}

if(randomValue1 > randomValue2){
    document.querySelector("h1").innerHTML = "🚩Player1 Wins!!!";
} else if(randomValue1 < randomValue2){
    document.querySelector("h1").innerHTML = "🚩Player2 Wins!!!";
} else{
    document.querySelector("h1").innerHTML = "Draw!!!";
}