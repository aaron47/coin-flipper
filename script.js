let coinFlipper = {
  'coinSide': ['H', 'T']
};
document.getElementById('coin-flip').addEventListener('click', flipCoin);
document.getElementById('reset').addEventListener('click', reset);

function reset() {
  document.querySelector('img').remove();
}

function randomCoin() {
  let randomIndex = Math.floor(Math.random() * 2);
  return coinFlipper['coinSide'][randomIndex];
}

function flipCoin() {
  let coin = randomCoin();
  let coinImage =  document.createElement('img');
  coinImage.id = 'headsSide';
  if (coin === 'H') {
    coinImage.src = 'heads.png';
    setTimeout(function() { document.querySelector('body').appendChild(coinImage); }, 1000);
  } else {
    coinImage.src = 'tails.png';
    setTimeout(function() {document.querySelector('body').appendChild(coinImage); }, 1000);
  }
}