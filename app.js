// script.js
const confettiContainer = document.querySelector('.confetti-container');

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.backgroundColor = randomColor();
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
  confettiContainer.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 5000);
}

function randomColor() {
  const colors = ['#FFD700', '#FF69B4', '#87CEEB', '#32CD32', '#FF4500'];
  return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(createConfetti, 150);

  