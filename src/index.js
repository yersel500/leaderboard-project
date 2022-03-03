import './style.css';
import {
  inputName, inputScore, theForm, theContainer, refreshBtn
} from './modules/selectors.js';
import {postData, showData} from './modules/post-get.js';

theForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // action when submit the form
  const myName = inputName.value;
  const myScore = inputScore.value;

  if (myName !== '' && myScore !== '') {
    let info = new FormData(theForm); 
    postData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lMefZ0gh9HW9MoCXepfi/scores/', {user: info.get('user'), score: info.get('score') })
    .then(data => {
      console.log(data);
    });
  }
  inputName.value = '';
  inputScore.value = '';
});


refreshBtn.addEventListener('click', () => {
  showData(theContainer);
})

