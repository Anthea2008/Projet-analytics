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
