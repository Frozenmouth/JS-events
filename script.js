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


