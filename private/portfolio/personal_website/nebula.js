const nebulaCanvas = document.getElementById('nebula');
const nebulaCtx = nebulaCanvas.getContext('2d');

function resizeNebula() {
  nebulaCanvas.width = window.innerWidth;
  nebulaCanvas.height = window.innerHeight;
}

function animateNebula() {
  nebulaCtx.clearRect(0, 0, nebulaCanvas.width, nebulaCanvas.height);

  const time = Date.now() * 0.00005;
  const offsetX = Math.sin(time) * 100;
  const offsetY = Math.cos(time) * 100;

  const gradient = nebulaCtx.createRadialGradient(
    nebulaCanvas.width / 2 + offsetX,
    nebulaCanvas.height / 2 + offsetY,
    150,
    nebulaCanvas.width / 2,
    nebulaCanvas.height / 2,
    nebulaCanvas.width
  );

  gradient.addColorStop(0, 'rgba(90, 30, 180, 0.4)');
  gradient.addColorStop(0.5, 'rgba(20, 10, 60, 0.2)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

  nebulaCtx.fillStyle = gradient;
  nebulaCtx.fillRect(0, 0, nebulaCanvas.width, nebulaCanvas.height);

  requestAnimationFrame(animateNebula);
}

window.addEventListener('resize', resizeNebula);

resizeNebula();
animateNebula();
