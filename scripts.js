document
  .getElementById("surpriseButton")
  .addEventListener("click", function () {
    const surpriseContent = document.getElementById("surpriseContent");
    if (surpriseContent.style.display === "none") {
      surpriseContent.style.display = "block";
      startConfetti();
    } else {
      surpriseContent.style.display = "none";
    }
  });

// Countdown Timer
const countdownDate = new Date("2024-09-18T00:00:00").getTime();
const countdownElement = document.getElementById("countdownTimer");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    countdownElement.innerHTML = "Happy Birthday!";
  }
}

setInterval(updateCountdown, 1000);

// Photo Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Confetti Effect
function startConfetti() {
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  document.body.appendChild(confetti);

  // Simple confetti effect
  for (let i = 0; i < 100; i++) {
    const confettiPiece = document.createElement("div");
    confettiPiece.style.position = "absolute";
    confettiPiece.style.width = "10px";
    confettiPiece.style.height = "10px";
    confettiPiece.style.backgroundColor = `hsl(${
      Math.random() * 360
    }, 100%, 50%)`;
    confettiPiece.style.left = `${Math.random() * 100}%`;
    confettiPiece.style.top = `${Math.random() * 100}%`;
    confettiPiece.style.opacity = "0.8";
    confettiPiece.style.transform = `translate(-50%, -50%) rotate(${
      Math.random() * 360
    }deg)`;
    confettiPiece.style.borderRadius = "50%";
    confettiPiece.style.zIndex = "9999";
    confettiPiece.style.animation = `confetti-fall ${
      Math.random() * 3 + 2
    }s linear`;

    confetti.appendChild(confettiPiece);
  }

  // Remove confetti after animation
  setTimeout(() => {
    document.body.removeChild(confetti);
  }, 5000);
}

// Confetti Animation
const style = document.createElement("style");
style.textContent = `
  @keyframes confetti-fall {
      from { transform: translateY(-100vh); }
      to { transform: translateY(100vh); }
  }
`;
document.head.appendChild(style);
