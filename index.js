var cubeOne = document.querySelector('#cube_one');
var cubeTwo =  document.querySelector('#cube_two');
var button = document.querySelector('#roll_button');
var currentClass = '';

function changeSide(cubeSelected, side) {
  var showClass = 'show-' + side;
  console.log(showClass);
  const classCheck = cubeSelected.classList;
  console.log(classCheck);  
  cubeSelected.classList.remove(classCheck[1]);
  
  cubeSelected.classList.add(showClass);
}

const random_number = function(range) {
  return Math.floor(Math.random() * range);
}

const arrayOfSides = ["front",  "right" , "back", "left", "top", "bottom" ]
// set initial side


const roll = function () {
  
  changeSide(cubeOne, arrayOfSides[random_number(arrayOfSides.length)] );
  changeSide(cubeTwo, arrayOfSides[random_number(arrayOfSides.length)] );
}

changeSide(cubeOne, "front" );
changeSide(cubeTwo, "front" );


button.addEventListener( 'click', roll );