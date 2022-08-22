var randomValue1 = Math.floor(Math.random() * 6) + 1;
var randomValue2 = Math.floor(Math.random() * 6) + 1;


if(randomValue1 !== "" && randomValue2 !== ""){
    document.querySelector(".dice .img1").setAttribute("src", "./images/dice"+randomValue1+".png");
    document.querySelector(".dice .img2").setAttribute("src", "./images/dice"+randomValue2+".png");
} else{
    alert("Something went wrong!!");
}

if(randomValue1 > randomValue2){
    document.querySelector("h1").innerHTML = "🚩Player1 Wins!!!";
} else if(randomValue1 < randomValue2){
    document.querySelector("h1").innerHTML = "🚩Player2 Wins!!!";
} else{
    document.querySelector("h1").innerHTML = "Draw!!!";
}
