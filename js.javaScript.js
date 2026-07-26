<script>
function calculateScore() {
    let form = document.getElementById("quizForm");
    let result = 0;
    const totalQuestions = 9;

    for (let i = 1; i <= totalQuestions; i++) {
        let question = form["q" + i];
        for (let answer of question) {
            if (answer.checked && answer.value === "1") {
                result++;
            }
        }
    }

    document.getElementById("result").innerText =
        "Votre score est : " + result + " / " + totalQuestions;
}
    // Fonction pour envoyer un événement personnalisé à Google Analytics (GA4)
function trackStudentAction(actionName) {
  if (typeof gtag === 'function') {
    gtag('event', 'student_interaction', {
      'event_category': 'Espace Etudiant',
      'event_label': actionName
    });
    console.log("Événement envoyé à GA4 : " + actionName);
  }
}

// Exemple d'utilisation sur un bouton de téléchargement :
// <button onclick="trackStudentAction('Téléchargement Planning')">Télécharger le Planning</button>
</script>

<!-- HTML : La barre de recherche et la liste -->
<input type="text" id="searchInput" placeholder="Rechercher un cours..." onkeyup="filterCourses()">

<ul id="courseList">
  <li>Mathématiques - Algèbre</li>
  <li>Informatique - JavaScript Web</li>
  <li>Physique - Mécanique</li>
  <li>Anglais - Communication</li>
</ul>

<!-- JavaScript Dynamique -->
<script>
function filterCourses() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let items = document.querySelectorAll('#courseList li');

  items.forEach(item => {
    let text = item.textContent.toLowerCase();
    // Affiche ou masque l'élément selon la recherche
    item.style.display = text.includes(input) ? "" : "none";
  });
}
</script>

<!-- HTML : Le formulaire -->
<div class="calculator">
  <h3>Calculateur de Moyenne</h3>
  <input type="number" id="note1" placeholder="Note 1 (ex: 14)" max="20">
  <input type="number" id="note2" placeholder="Note 2 (ex: 16)" max="20">
  <button onclick="calculateAverage()">Calculer</button>
  
  <p id="result">Moyenne : -- / 20</p>
</div>

<!-- JavaScript Dynamique -->
<script>
function calculateAverage() {
  let n1 = parseFloat(document.getElementById('note1').value);
  let n2 = parseFloat(document.getElementById('note2').value);

  if (isNaN(n1) || isNaN(n2)) {
    alert("Veuillez entrer deux notes valides !");
    return;
  }

  let avg = (n1 + n2) / 2;
  document.getElementById('result').textContent = `Moyenne : ${avg.toFixed(2)} / 20`;
}
</script>


