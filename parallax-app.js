const parallax = document.getElementById("parallax");

function moveBackground() {
  const yPos = window.scrollY;
  parallax.style.backgroundPositionY = `${yPos * 0.5}px`;
}

window.addEventListener("scroll", moveBackground);

const textElement = document.getElementById("parallaxText");
const buttonElement = document.getElementById("parallaxButton");

window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;

  textElement.style.transform = `translateY(${scrollValue * -0.5}px)`;
  buttonElement.style.transform = `translateY(${scrollValue * -0.5}px)`;
});
