import styles from './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  console.log(styles);
  const button = document.querySelector('button');
  const guessField = document.querySelector('#guess');
  const hint = document.querySelector('#message');

  let rand = Math.floor(Math.random() * Math.floor(100));

  button.onclick = (e) => {
    let number = parseInt(guessField.value);
    if (number === NaN) {
      hint.innerHTML = "Please enter a number";
    } else if (number > rand) {
      hint.innerHTML = "too high";
    } else if (rand > number) {
      hint.innerHTML = "too low";
    } else {
      hint.innerHTML = "You Win! I made a new number";
      rand = Math.floor(Math.random() * Math.floor(100));
    }
  };
});
