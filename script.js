let getSquare = document.getElementById("square-two");
let explodeTrans = document.getElementById("splode-btn");

function addToSq() {
  getSquare.classList.add("splode");
}

function removeFromSq() {
  getSquare.classList.remove("splode");
}

explodeTrans.addEventListener("click", addToSq);

getSquare.addEventListener("transitionend", removeFromSq);
