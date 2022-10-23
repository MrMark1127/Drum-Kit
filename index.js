let drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {

    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml)
    buttonAnimation(buttonInnerHtml)
    
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key)
  buttonAnimation(event.key)
})

function makeSound(key) {
  switch (key) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    case "k":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    default:
      break;
  }
}

function buttonAnimation(currentKey) {

  let activeButton = document.querySelector(`.${currentKey}`)
  
  activeButton.classList.add('pressed')

  setTimeout(function() {
    activeButton.classList.remove('pressed')
  }, 100);
}