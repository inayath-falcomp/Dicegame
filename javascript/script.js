alert("its working");
function play(){
  document.getElementById("dice1").style.display = "none";
  document.getElementById("dice2").style.display = "none";
  document.getElementById("dice3").style.display = "none";
  document.getElementById("dice4").style.display = "none";
  document.getElementById("dice5").style.display = "none";
  document.getElementById("dice6").style.display = "none";
  document.getElementById("dice11").style.display = "none";
  document.getElementById("dice12").style.display = "none";
  document.getElementById("dice13").style.display = "none";
  document.getElementById("dice14").style.display = "none";
  document.getElementById("dice15").style.display = "none";
  document.getElementById("dice16").style.display = "none";
  var dice1 = Math.floor(Math.random()*6)+1;
  var dice2 = Math.floor(Math.random()*6)+1;
  dice1 = "dice"+dice1;
  dice2 = "dice1"+dice2;

  document.getElementById(dice1).style.display = "block";
  document.getElementById(dice2).style.display = "block";

}
