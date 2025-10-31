// Charger la bibliothèque depuis localStorage ou initialiser
let bibliotheque = JSON.parse(localStorage.getItem("bibliotheque")) || [
  { code: 1, titre: "Clean Code", auteur: "Robert C. Martin", disponible: true },
  { code: 2, titre:" Eloquent JavaScript", auteur:"Marijn Haverbeke", disponible: false }
]; 

// Fonction pour afficher le catalogue
function afficherCatalogue() {
  const container = document.getElementById("catalogue");
  container.innerHTML = "";

  bibliotheque.forEach(livre => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${livre.titre}</h3>
      <p><strong>Auteur :</strong> ${livre.auteur}</p>
      <p><strong>Code :</strong> ${livre.code}</p>
      <p><strong>Disponible :</strong> ${livre.disponible ? "Oui" : "Non"}</p>
      <p><strong>Prix :</strong> ${livre.prix}</p>
      <p><strong>Annee :</strong> ${livre.annee}</p>
      <button onclick="supprimerLivre(${livre.code})">Supprimer</button>
    `;
    container.appendChild(card);
  });

  majPiedPage();
}

// Supprimer un livre
function supprimerLivre(code) {
  bibliotheque = bibliotheque.filter(livre => livre.code !== code);
  sauvegarder();
  afficherCatalogue();
}

// Ajouter un livre
document.getElementById("formLivre").addEventListener("submit", (e) => {
  e.preventDefault();

  const nouveauLivre = {
    code: parseInt(document.getElementById("code").value),
    titre: document.getElementById("titre").value,
    auteur: document.getElementById("auteur").value,
    disponible: document.getElementById("disponible").value === "true"
  };

  // Vérifier si le code existe déjà
  const existe = bibliotheque.some(l => l.code === nouveauLivre.code);
  if (existe) {
    alert("⚠️ Ce code existe déjà !");
    return;
  }

  bibliotheque.push(nouveauLivre);
  sauvegarder();
  afficherCatalogue();

  e.target.reset();
  alert("✅ Livre ajouté avec succès !");
});

// Sauvegarder dans localStorage
function sauvegarder() {
  localStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
}

// Pied de page : statistiques
function majPiedPage() {
  document.getElementById("total").innerText = bibliotheque.length;
  document.getElementById("disponibles").innerText = bibliotheque.filter(l => l.disponible).length;
}

// Initialisation
afficherCatalogue();
