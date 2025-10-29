
const autoformations = [
    { name: "Let competence", code: "C8" },
    { name: "Gestion de tempt", code: "C7" },
    { name: "delepment web", code: "C6" },
    { name: "Bases de données", code: "C5" },
    { name: "Réseaux informatiques", code: "C4" },
    { name: "Cybersécurité", code: "C3" },
    { name: "Intelligence artificielle", code: "C2" },
    { name: "transversales", code: "C1" },
  ];
  
  
  function startGame() {
    let score = 0;
    let rounds = 7; 
  
    for (let i = 0; i < rounds; i++) {
    
      const question = autoformations[Math.floor(Math.random() * autoformations.length)];
      
    
      let answer = prompt(`Question ${i + 1}/${rounds} : Quel est le code de la compétence pour "${question.name}" ? `);
      
    
      if (answer && answer.toUpperCase() === question.code) {
        alert(" Bonne réponse !");
        score++;
      } else {
        alert(` Mauvaise réponse ! La bonne réponse était : ${question.code}`);
      }
    }
  
   
    alert(` Partie terminée ! Votre score est : ${score} / ${rounds}`);
  }
  
 
  startGame();
  