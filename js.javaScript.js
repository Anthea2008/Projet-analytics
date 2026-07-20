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
</script>