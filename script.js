document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.question');
  const submitButton = document.getElementById('submit');
  const scoreDiv = document.getElementById('score');

  // Load progress from session storage
  const progress = JSON.parse(sessionStorage.getItem('progress')) || {};

  // Restore selected options
  for (const questionId in progress) {
    const question = document.getElementById(questionId);
    const selectedOption = progress[questionId];
    const optionElement = question.querySelector(`input[value="${selectedOption}"]`);
    if (optionElement) {
      optionElement.checked = true;
    }
  }

  // Event listener for option selection
  questions.forEach((question) => {
    const options = question.querySelectorAll('input[type="radio"]');
    options.forEach((option) => {
      option.addEventListener('change', () => {
        const questionId = question.id;
        const selectedOption = question.querySelector('input[type="radio"]:checked').value;
        progress[questionId] = selected
