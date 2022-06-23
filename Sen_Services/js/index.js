let propositionEl = document.getElementById("proposition-el");
let searchEl = document.getElementById("search-el");
let showelementEl = document.getElementById("showelement-el");
let conEl = document.getElementById("con-el");
let con2El = document.getElementById("con2-el");
let anim1El = document.getElementById("anim1EL");
let anim2El = document.getElementById("anim2EL");
const splitText = anim1El.textContent.split("");

let myForm = document.getElementById("myform");
let myUsername = document.getElementById("username");

function proposition(){
    conEl.textContent = "Connectez-vous ou créez un compte dés maintenant";
    conEl.style.color = "red";
}

function search(){
    con2El.textContent = "Connectez-vous ou créez un compte dés maintenant";
    con2El.style.color = "red";
}

for (var i = 0;i<splitText.length < 1; i++) {
    anim1El.innerHtml += "<span"
}