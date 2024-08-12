// Récupération des différents éléments
const tab = document.querySelector(".tab__form");
const tabHeader = document.querySelector(".tab__header");
const tabHeaderTitles = document.querySelectorAll(".tab__header h2");
const tabBody = document.querySelector(".tab__body");
const tabBodyItems = document.querySelectorAll(".tab__body form");

// Boucle for qui va parcourir les onglets
for (let i = 0; i < tabHeaderTitles.length; i++) {
  // Ecoute de l'événement "click" sur l'onglet choisi par l'utilisateur
  tabHeaderTitles[i].addEventListener("click", () => {
    tabHeader.querySelector(".active").classList.remove("active");
    tabHeaderTitles[i].classList.add("active");
    tabBody.querySelector(".active").classList.remove("active");
    tabBodyItems[i].classList.add("active");
  });
}
