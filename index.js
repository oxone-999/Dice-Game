
var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;
var link1 = "images/dice" + num1 + ".png";
var link2 = "images/dice" + num2 + ".png";
document.querySelector(".img1").setAttribute("src",link1);
document.querySelector(".img2").setAttribute("src",link2);

if(num1>num2)
{
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!!";
    document.querySelector("h1").style.fontSize = "6rem";
}
else if(num1<num2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!!🚩";
    document.querySelector("h1").style.fontSize = "6rem";
}
else{
    document.querySelector("h1").innerHTML = "DRAW";
    document.querySelector("h1").style.fontSize = "6rem";
}
