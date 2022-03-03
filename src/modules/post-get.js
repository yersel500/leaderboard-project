export async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getData() {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lMefZ0gh9HW9MoCXepfi/scores/');
  const data = await response.json();
  return data;
}

export async function showData(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const { result } = await getData();
  result.sort((a, b) => b.score - a.score);
  result.forEach((gamer, index) => {
    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('unit-score');
    scoreContainer.innerHTML = `<p>${index + 1}</p><p>${gamer.user}</p><p>${gamer.score}</p>`;
    container.appendChild(scoreContainer);
  });

  // result.forEach((gamer) => {
  //   const scoreContainer = document.createElement('div');
  //   scoreContainer.classList.add('unit-score');
  //   scoreContainer.innerHTML = `<p>1</p><p>${gamer.user}</p><p>${gamer.score}</p>`;
  //   container.appendChild(scoreContainer);
  // });
}