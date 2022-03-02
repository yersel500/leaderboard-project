import './style.css';
import {
  inputName, inputScore, theForm, theContainer,
} from './modules/selectors.js';

theForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // action when submit the form
  const myName = inputName.value;
  const myScore = inputScore.value;

  if (myName !== '' && myScore !== '') {
    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('unit-score');
    scoreContainer.innerHTML = `${myName}: ${myScore}`;
    theContainer.appendChild(scoreContainer);
  }
});
