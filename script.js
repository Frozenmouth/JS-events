// Fonctionnalité 1 : : Cliquer sur le footer >>> la console affiche "clic numéro x"

let footerClicker = document.querySelector("footer")
let i = 1
let onFooterClick = function() {
  console.log(`click numéro ${i}`)
  i++
}
footerClicker.addEventListener("click", onFooterClick)
