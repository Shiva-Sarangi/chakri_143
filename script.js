// Falling hearts
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);

// Gift click
const giftBox = document.getElementById("giftBox");

giftBox.addEventListener("click", () => {
  giftBox.classList.add("open");
  setTimeout(() => {
    window.location.href = "gift.html";
  }, 1200);
});