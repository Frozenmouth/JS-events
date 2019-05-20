// Fonctionnalité 1 : : Cliquer sur le footer >>> la console affiche "clic numéro x"

let footerClicker = document.querySelector("footer")
let i = 1
let onFooterClick = function() {
  console.log(`click numéro ${i}`)
  i++
}
footerClicker.addEventListener("click", onFooterClick)

// Fonctionnalité 2 : Cliquer sur le Hamburger menu >>> alternance destruction/ajout de la class collapse de la navbar

let hamburgerMenu = document.querySelector(".navbar-toggler");
let navbarHeader = document.getElementById("navbarHeader");
let onHamburgerClick = function() {
		navbarHeader.classList.toggle("collapse");
};
hamburgerMenu.addEventListener("click", onHamburgerClick);


// Fonctionnalité 3 : Cliquer sur le bouton edit de la 1ère card >>> texte de la card en rouge (irréversible)

let firstEditButton = document.querySelectorAll('.btn-group')[0].children[1];
let onFirstEditClick = function() { 
  firstEditButton.style.color ="red";
};
firstEditButton.addEventListener("click", onFirstEditClick);

