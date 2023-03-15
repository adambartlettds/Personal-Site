// main.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// main.js

const canvas = document.getElementById("binaryCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const binary = "01";
const columns = canvas.width / 10;

const drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff00";
  ctx.font = "10px Source Code Pro";

  for (let i = 0; i < drops.length; i++) {
    const text = binary[Math.floor(Math.random() * binary.length)];
    ctx.fillText(text, i * 10, drops[i] * 10);

    if (drops[i] * 10 > canvas.height || Math.random() > 0.99) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 35);
