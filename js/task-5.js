function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
button.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
})