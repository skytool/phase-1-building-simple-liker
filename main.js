// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector(".modal");
const hidden = document.querySelector(".hidden");

const hiddenModal = function(){
  modal.classList.add("hidden");
  hidden.classList.add("hiden");
}

document.addEventListener("DOMContentLoaded", function(e){
  if(e.key === "DOMContentLoaded" && !modal.classList.contains("hidden")) {
    modalClose();
  }
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
