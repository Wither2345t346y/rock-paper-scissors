const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const gameElements = ["rock","paper","scissors"]


rock.addEventListener("click",(
    function(){
        console.log("Камень")
    }

))

scissors.addEventListener("click",(
    function(){
        console.log("ножницы")
    }

))

paper.addEventListener("click",(
    function(){
        console.log("бумага")
    }

))




    function getRandomInt(max) {
        return Math.floor(Math.random() * max)};
  

  console.log("compyter", gameElements[getRandomInt(3)])

