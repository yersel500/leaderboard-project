import _ from 'lodash';
import './style.css';

const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');
const submitBtn = document.querySelector('.submit');
const theForm = document.querySelector('.the-form');
const theContainer = document.querySelector('.container-name');



theForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // action when submit the form
  let myName = inputName.value;
  let myScore = inputScore.value;

  if (myName !== '' && myScore !== '') {
    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('unit-score');
    scoreContainer.innerHTML = `${myName}: ${myScore}`;
    theContainer.appendChild(scoreContainer);
  }
})


