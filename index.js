var animals = ["dog.jpg", "cat.jpg", "bird.jpg"];
var counter = 0;
function forwardAnimal(){
    if(counter==2)  counter= 0;
    else counter++;
    document.getElementById("image").src = animals[counter];
}
function backAnimal(){
    if(counter==0) counter = 2;
    else counter--;
    document.getElementById("image").src = animals[counter];
}
document.getElementById("back").addEventListener("click", backAnimal);
document.getElementById("forward").addEventListener("click", forwardAnimal);

/*
function disappear(){
    document.getElementById("div1").innerHTML = "";
}

var counter = 0;
function changeImage(){
    if(counter % 3 == 0){
        document.getElementById("image").src = "cat.jpg";
        counter++;
    }
    else if(counter % 3 == 1){
        document.getElementById("image").src = "bird.jpg";
        counter++;
    }
    else{
        document.getElementById("image").src = "dog.jpg";
        counter++;
    }
}
document.getElementById("button").addEventListener("click", changeImage);
*/

/*
var counter = 0;

function toggleRed(){
    if(counter % 2 == 0){
        document.getElementById("div1").style.color = "red";
        counter++;
    }
    else if (counter % 2 == 1){
        document.getElementById("div1").style.color = "black";
        counter++;
    }
    alert(counter);
}

document.getElementById("button").addEventListener("click", toggleRed);
*/