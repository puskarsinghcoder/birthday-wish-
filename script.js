const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

function celebrate() {

  document.getElementById("message").innerHTML =
    "🎉 Once again, Happy Birthday Shital! 💖🎂";

  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 4,
      speed: Math.random() * 4 + 2,
      rotation: Math.random() * 360
    });
  }

  animateConfetti();
}

function animateConfetti() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  pieces.forEach((piece, index) => {

    piece.y += piece.speed;
    piece.rotation += 3;

    ctx.save();

    ctx.translate(piece.x, piece.y);
    ctx.rotate(piece.rotation * Math.PI / 180);

    ctx.fillStyle =
      `hsl(${Math.random() * 360}, 80%, 60%)`;

    ctx.fillRect(
      -piece.size / 2,
      -piece.size / 2,
      piece.size,
      piece.size
    );

    ctx.restore();

    if (piece.y > canvas.height) {
      pieces.splice(index, 1);
    }
  });

  if (pieces.length > 0) {
    requestAnimationFrame(animateConfetti);
  }
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
