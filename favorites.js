document.addEventListener("DOMContentLoaded", () => {
  const favoriteQuestions = JSON.parse(localStorage.getItem('favorites')) || [];
  const favoriteContainer = document.getElementById('favorites-container');
  const favoriteTemplate = document.getElementById('favorites-template');

  function renderFavoriteQuestions() {
    favoriteContainer.innerHTML = '';
    if (favoriteQuestions.length === 0) {
      favoriteContainer.innerHTML = '<p>No favorite questions yet.</p>';
      return;
    }
    favoriteQuestions.forEach((questionData, index) => {
      const questionElement = favoriteTemplate.content.cloneNode(true); // Исправлено: contentEditable на content
      questionElement.querySelector('.question-text').textContent = `${index + 1} - ${questionData.question}`; // Исправлено: question-text на .question-text, index на index + 1

      const optionContainer = questionElement.querySelector('#options-container'); // Исправлено: getElementById на querySelector
      questionData.options.forEach((option, optionIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        if (optionIndex === questionData.correctAnswer) {
          optionDiv.classList.add('correct');
        }
        optionDiv.innerHTML = `
          <input type="radio" disabled name="option-${index}" id="option-${index}-${optionIndex}"/>
          <label for="option-${index}-${optionIndex}">${option}</label>
        `;
        optionContainer.appendChild(optionDiv); // Исправлено: appendChold на appendChild
      });

      questionElement.querySelector('.correct-answer').textContent = `Correct Answer: ${questionData.options[questionData.correctAnswer]}`;
      questionElement.querySelector('.explanation').textContent = questionData.explanation;
      questionElement.querySelector('.theme').textContent = `Theme: ${questionData.theme}`;

      favoriteContainer.appendChild(questionElement);
    });
  }

  renderFavoriteQuestions();
});