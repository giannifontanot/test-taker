let questionNum = 0;
let timeoutHandle;
let score = 0;
const totalQuestions = JsonQuestions.length;


function fShowThisResult() {
    let header = "Hey, you can do better ";
    let user = document.getElementById("divUser").value;
    if (score > 0){
        header = "CONGRATULATIONS ";
    }
    alert( header+ user + "!!! \r\n Your score is: " + score);
    let newScore = {"student": user, "score": "" + score};
    let JsonScores = JSON.parse(localStorage.getItem("JsonScores"));
    JsonScores.push(newScore);
    localStorage.setItem("JsonScores", JSON.stringify(JsonScores));
 }

function fShowScores() {
    // localStorage.clear();
    let sScoreContent = "";
    let JsonScores = JSON.parse(localStorage.getItem("JsonScores"));

    if (JsonScores.length > 0) {
        document.getElementById('scoreList').innerHTML = "";
    }

    console.log("---> JsonScores :" + JsonScores);
    for (let i = 0; i < JsonScores.length; i++) {
        sScoreContent = JsonScores[i].student + " - " + JsonScores[i].score + " points."
        let newLi = document.createElement("li");
        newLi.innerText = sScoreContent;
        let scoreListEl = document.getElementById("scoreList");
        scoreListEl.appendChild(newLi);
    }


}

function getNextQuestion() {
    messageEl.style.display = "none";

    if ((totalQuestions === (questionNum))) {
        clearInterval(timeoutHandle);
        fShowThisResult();
        fNewGame();
    }

    document.getElementById("divQuestion").innerHTML = JsonQuestions[questionNum].question;
    document.getElementById("divOptionA").innerHTML = JsonQuestions[questionNum].optionA;
    document.getElementById("divOptionB").innerHTML = JsonQuestions[questionNum].optionB;
    document.getElementById("divOptionC").innerHTML = JsonQuestions[questionNum].optionC;
    document.getElementById("divOptionD").innerHTML = JsonQuestions[questionNum].optionD;
    document.getElementById("divAnswer").innerHTML = "";


}

function fNewGame() {
    document.getElementById("divQuestion").style.display = "none";
    document.getElementById("divOptionA").style.display = "none";
    document.getElementById("divOptionB").style.display = "none";
    document.getElementById("divOptionC").style.display = "none";
    document.getElementById("divOptionD").style.display = "none";
    document.getElementById("divText").style.display = "inline-block";
    document.getElementById("btnBegin").style.display = "inline-block";
    document.getElementById("divTimer").innerHTML = "00:00";
    document.getElementById("divScore").innerHTML = "0";
    document.getElementById("divUser").value = "";

    score = 0;
    questionNum = 0;

    fShowScores();

}

function fBegin(e) {

    const userEl = document.getElementById('divUser');
    if (userEl.value === "") {
        sendMessage("Please write a User Name.", "secondary");
        return false;
    }

    if (localStorage.getItem("JsonScores") == null) {
        localStorage.setItem("JsonScores", "[]");
    }
    document.getElementById("divQuestion").style.display = "block";
    document.getElementById("divOptionA").style.display = "block";
    document.getElementById("divOptionB").style.display = "block";
    document.getElementById("divOptionC").style.display = "block";
    document.getElementById("divOptionD").style.display = "block";
    document.getElementById("divText").style.display = "none";
    document.getElementById("btnBegin").style.display = "none";

    countdown(1);
    getNextQuestion();
}

function fAnswerSelected(answerSelected) {
    if ("DIV" + JsonQuestions[questionNum].answer.toString().toUpperCase() === answerSelected.id.toString().toUpperCase()) {
        document.getElementById("divAnswer").innerHTML = "Right";
        questionNum++;
        score++;
        document.getElementById("divScore").innerHTML = score;
        setTimeout(getNextQuestion, 1000);
    } else {
        document.getElementById("divAnswer").innerHTML = "Wrong";
        questionNum++;
        setTimeout(getNextQuestion, 1000);
    }
}

