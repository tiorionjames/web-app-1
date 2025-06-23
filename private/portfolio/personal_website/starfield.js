const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];
const numStars = 255;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random(),
      opacityDirection: Math.random() > 0.5 ? 1 : -1,
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.globalAlpha = star.opacity;
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  });
  ctx.globalAlpha = 1;
}

function moveStars() {
  stars.forEach((star) => {
    star.y += star.speed;
    star.opacity += star.opacityDirection * 0.010;
    if (star.opacity <= 0.4 || star.opacity >= 1) {
      star.opacityDirection *= -1;
    }
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
}

function animate() {
  drawStars();
  moveStars();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createStars();
});

resizeCanvas();
createStars();
animate();
