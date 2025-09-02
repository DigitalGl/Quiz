document.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById("welcome-screen");
  const questionScreen = document.getElementById("question-screen");
  const resultScreen = document.getElementById("result-screen");

  const playerForm = document.getElementById("player-form");
  const playerNameInput = document.getElementById("player-name");

  const currentPlayerDisplay = document.getElementById("current-player");
  const currentQuestionDisplay = document.getElementById("current-question");
  const totalQuestionsDisplay = document.getElementById("total-questions");
  const currentScoreDisplay = document.getElementById("current-score");

  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const optionTemplate = document.getElementById("option-template");

  const feedBackContainer = document.getElementById("feedback-container");
  const feedbackText = document.getElementById("feedback-text");
  const nextButton = document.getElementById("next-button");

  const resultPlayerName = document.getElementById("result-player-name");
  const resultScore = document.getElementById("result-score");
  const resultTotal = document.getElementById("result-total");
  const resultPercentage = document.getElementById("result-percentage");
  const restartButton = document.getElementById("restart-button");

  let currentQuestion = 0;
  let score = 0;
  let currentPlayer = "";
  let hasAnswered = false;
  let quizQuestions = [];
  let isLoading = true;
  let isError = false;

  let questionsCount = quizQuestions.length;
  resultTotal.innerText = questionsCount;
  totalQuestionsDisplay.innerText = questionsCount;

  playerForm.addEventListener("submit", startGame);

  nextButton.addEventListener("click", () => {
    questionScreen.classList.add("fade-out");
    feedBackContainer.classList.add("hidden");
    setTimeout(() => {
      currentQuestion++;
      hasAnswered = false;
      questionScreen.classList.remove("fade-out");
      feedBackContainer.classList.add("hidden");
      if (currentQuestion < questionsCount) {
        loadQuestion(currentQuestion);
      } else {
        showResults();
      }
    }, 1000);
  });

  restartButton.addEventListener("click", resetQuiz);

  function loadQuestion(index) {
    currentQuestionDisplay.textContent = index + 1;
    const question = quizQuestions[index];
    questionText.innerText = question.question;
    optionsContainer.innerHTML = "";
    feedBackContainer.classList.add("hidden");
    feedBackContainer.classList.remove("correct");
    feedBackContainer.classList.remove("incorrect");

    question.options.forEach((option, i) => {
      const optionLement = optionTemplate.content.cloneNode(true);
      const radioInput = optionLement.querySelector("input");
      const label = optionLement.querySelector("label");

      const optionId = `option-${index}-${i}`;
      radioInput.id = optionId;
      label.htmlFor = optionId;
      label.innerText = option;

      const optionContainer = optionLement.querySelector(".option");
      optionContainer.addEventListener("click", () => {
        console.log("option clicked");
        if (!hasAnswered) {
          selectOption(i);
        }
      });

      optionsContainer.appendChild(optionLement);
    });
  }

  function selectOption(selectedIndex) {
    hasAnswered = true;
    const question = quizQuestions[currentQuestion];
    const options = optionsContainer.querySelectorAll(".option");
    feedBackContainer.classList.remove("hidden");

    options.forEach((opt) => {
      opt.classList.remove("correct");
      opt.classList.remove("incorrect");
    });

    console.log(selectedIndex);
    const isCorrect = selectedIndex === question.correctAnswer;

    if (isCorrect) {
      score++;
      options[selectedIndex].classList.add("correct");
      feedBackContainer.classList.add("correct");
      feedbackText.innerText = `Correct! ${question.explanation}`;
      currentScoreDisplay.innerText = score;
    } else {
      options[selectedIndex].classList.add("incorrect");
      feedBackContainer.classList.add("incorrect");
      feedbackText.innerText = `Incorrect! ${question.explanation}`;
    }
  }

  function showResults() {
    questionScreen.classList.remove("active");
    resultScreen.classList.add("active");

    const percentage = Math.round((score / questionsCount) * 100);
    resultPercentage.innerText = `${percentage}%`;
    resultScore.innerText = score;
  }

  function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    currentPlayer = "";
    hasAnswered = false;
    currentPlayerDisplay.innerText = "";
    currentQuestionDisplay.innerText = 1;
    feedBackContainer.classList.remove("correct", "incorrect");
    playerNameInput.value = "";
    welcomeScreen.classList.add("active");
    resultScreen.classList.remove("active");
    playerForm.classList.remove("hidden");
  }

  function startGame(e) {
    e.preventDefault();
    if(isLoading || isError) return;
    currentPlayer = playerNameInput.value.trim();
    if (!currentPlayer) {
      alert("Enter your name");
      return;
    }

    let countDown = 3;
    const dountDownElement = document.createElement("div");
    dountDownElement.classList.add("countdown");
    welcomeScreen.appendChild(dountDownElement);
    dountDownElement.innerText = countDown;
    playerForm.classList.add("hidden");


    const timer = setInterval(() => {
      countDown--;
      dountDownElement.innerText = countDown;
      if (countDown <= 0) {
        dountDownElement.remove();
        clearInterval(timer);
        currentPlayerDisplay.innerText = currentPlayer;
        resultPlayerName.innerText = currentPlayer;
        welcomeScreen.classList.remove("active");
        questionScreen.classList.add("active");
        loadQuestion(currentQuestion);
      }
    }, 1000);
  }

  requestNewQuestions("https://js-quiz-questions-server.vercel.app/api/questions?limit=30");


    function requestNewQuestions(url) {
      fetch(url)
      .then((res) => res.json())
      .then((responseObject) => {
            quizQuestions = responseObject.data
            questionsCount = quizQuestions.length;
            resultTotal.innerText = questionsCount;
            totalQuestionsDisplay.innerText = questionsCount;
            isLoading = false;
            isError = false;
        })
        .catch((error) => {
          console.error("Error fetching quiz questions:", error);
          requestNewQuestionsButton.classList.remove("hidden");
          isLoading = false;
          isError = true;
        })
    }

});