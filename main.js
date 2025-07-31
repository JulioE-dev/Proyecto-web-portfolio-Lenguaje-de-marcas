const popup = document.getElementById('cookie-popup');
const btn = document.getElementById('acceptcookies');

// CUANDO NO HAY COOKIES ACEPTADAS

if(!localStorage.cookiesAccepted) {
  popup.classList.add("show");
}

// CUANDO SE ACEPTAN LAS COOKIES

btn.addEventListener("click", function(){
    localStorage.cookiesAccepted = true;
    popup.classList.remove("show");
});
