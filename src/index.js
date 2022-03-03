import './style.css';
import {
  inputName, inputScore, theForm, theContainer,
} from './modules/selectors.js';
import { get } from 'lodash';

theForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // action when submit the form
  const myName = inputName.value;
  const myScore = inputScore.value;

  // if (myName !== '' && myScore !== '') {
  //   const scoreContainer = document.createElement('div');
  //   scoreContainer.classList.add('unit-score');
  //   scoreContainer.innerHTML = `${myName}: ${myScore}`;
  //   theContainer.appendChild(scoreContainer);
  // }

  // const gameName = {name:'sport-yersel'};
  // fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(gameName)
  // })
  //   .then( res => res.json())
  //   .then(data => {
  //     console.log(data);
  //   } )

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  async function getData() {
    let response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lMefZ0gh9HW9MoCXepfi/scores/');
    let data = await response.json();
    return data;
}

 async function showData() {
  let { result } = await getData();
  result.forEach(gamer => {

    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('unit-score');
    scoreContainer.innerHTML = `${gamer.user}: ${gamer.score}`;
    theContainer.appendChild(scoreContainer)
  });

}


  if (myName !== '' && myScore !== '') {
    let info = new FormData(theForm);
    console.log(info);
    console.log(info.get('user'));
    console.log(info.get('score'));
    
    postData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lMefZ0gh9HW9MoCXepfi/scores/', {user: info.get('user'), score: info.get('score') })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

  showData();
    
    
    
    
    
    // fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lMefZ0gh9HW9MoCXepfi/scores/', {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({user: info.get('user'), score: info.get('score') })
    // })
    //   .then( res => res.json())
    //   .then(data => {
    //     console.log(data);
    //   } )
  }
});
