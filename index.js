var cubeOne = document.querySelector('#cube_one');
var cubeTwo =  document.querySelector('#cube_two');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cubeOne.classList.remove( currentClass );
    cubeTwo.classList.remove( currentClass );
  }
  cubeOne.classList.add( showClass );
  cubeTwo.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );