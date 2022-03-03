export async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data)
  });
  return response.json();
}

export async function getData() {
  let response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lMefZ0gh9HW9MoCXepfi/scores/');
  let data = await response.json();
  return data;
}

export async function showData(container) {
while(container.firstChild) {
  container.removeChild(container.firstChild);
}
let { result } = await getData();
result.forEach(gamer => {

  const scoreContainer = document.createElement('div');
  scoreContainer.classList.add('unit-score');
  scoreContainer.innerHTML = `${gamer.user}: ${gamer.score}`;
  container.appendChild(scoreContainer)
});

}