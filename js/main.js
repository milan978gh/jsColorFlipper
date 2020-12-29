const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const color = document.querySelector('.color');
const btn = document.getElementById('btn');


btn.addEventListener('click', () => {
  const random = randomNumber();
  color.textContent = colors[random];
  document.body.style.backgroundColor = colors[random];
});

function randomNumber() {
  return Math.floor(Math.random() * colors.length);
}