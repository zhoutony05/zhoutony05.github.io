function mouseOver (obj) {
    obj.innerHTML = "Good Job"
}


function mouseOff (obj){
    obj.innerHTML = "Test"
}


/*var id;
function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 250) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}*/

var id;
function squarePath() {
    var elem = document.getElementById("animate");
    var posX = 0;
    var posY = 0;

    id = setInterval(frame, 5);


    function frame(){
        if(posY == 0 && posX >= 0 && posX < 250){
            posX++;
            elem.style.left = posX + "px";
        }
        else if(posX == 250 && posY >= 0 && posY < 250){
            posY++;
            elem.style.top = posY + "px";
        }
        else if(posY == 250 && posX <= 250 && posX > 0){
            posX--;
            elem.style.left = posX + "px";
        }
        else if(posX == 0 && posY <= 250 && posY > 0){
            posY--;
            elem.style.top = posY + "px";
        }

    }
}








//Create a function called describeCar() that takes in the brand of Car string and the color of the car
// and have the function print the values 


