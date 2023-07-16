var randomnum1 = Math.floor(6*(Math.random())) + 1;
var randomnum2 = Math.floor(6*(Math.random())) + 1;
document.querySelector(".img1").setAttribute("src","./images/dice"+randomnum1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+randomnum2+".png");

if(randomnum1 == randomnum2){
    document.querySelector("h1").innerHTML="Draw!";
}
else if(randomnum1 > randomnum2){
    document.querySelector("h1").innerHTML="Player1 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Player2 Wins!";
}
