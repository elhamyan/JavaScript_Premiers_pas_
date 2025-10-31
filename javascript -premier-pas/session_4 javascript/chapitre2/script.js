let titre = document.getElementById("titre");
let image = document.querySelector("img");
let bouton = document.querySelector(".btn");

bouton.addEventListener("click", function() {
  titre.innerText = "Titre modifié !";
  titre.classList.toggle("highlight");
  image.setAttribute("src", "photo/2216x1244.jpg");
  image.setAttribute("alt", "Nouvelle image");
});
