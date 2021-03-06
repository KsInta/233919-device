var letter = document.querySelector(".letter");
var popup = document.querySelector(".popup-container");
var close = popup.querySelector(".popup-container-close");
  
var form = popup.querySelector(".popup-form");
var username = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message-text]");

var map = document.querySelector (".map");
var popupmap = document.querySelector (".popup-map");
var mapclose = popupmap.querySelector (".popup-container-close");

/*Модальное окно*/
letter.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-container-display");
  username.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-container-display");
});

form.addEventListener("submit", function(event) {
  if (!username.value || !email.value || !message.value) {
    event.preventDefault();
  } 
});

/*Карта*/
map.addEventListener("click", function(event) {
  event.preventDefault();
  popupmap.classList.add("popup-map-display");
});

mapclose.addEventListener("click", function(event) {
  event.preventDefault();
  popupmap.classList.remove("popup-map-display");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {   
    if (popup.classList.contains("popup-container-display")) {
      popup.classList.remove("popup-container-display");
    }
    if (popupmap.classList.contains("popup-map-display")) {
      popupmap.classList.remove("popup-map-display");
    }
  }
});

  