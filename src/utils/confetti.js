// Lightweight, zero-dependency high-performance canvas confetti celebration
export const fireConfetti = (options = {}) => {
  const count = options.count || 80;
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const width = (canvas.width = window.innerWidth * dpr);
  const height = (canvas.height = window.innerHeight * dpr);
  ctx.scale(dpr, dpr);

  const colors = options.colors || [
    '#3b82f6', '#60a5fa', '#8b5cf6', '#ec4899', 
    '#f59e0b', '#10b981', '#06b6d4', '#6366f1'
  ];

  const particles = [];
  const originX = options.x !== undefined ? options.x * window.innerWidth : window.innerWidth / 2;
  const originY = options.y !== undefined ? options.y * window.innerHeight : window.innerHeight * 0.4;

  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
    const velocity = 8 + Math.random() * 14;
    particles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * velocity + (Math.random() - 0.5) * 4,
      vy: Math.sin(angle) * velocity - (options.burstUp ? 8 : 4),
      size: 6 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      opacity: 1,
      shape: Math.random() > 0.4 ? 'rect' : 'circle',
      gravity: 0.35 + Math.random() * 0.15,
      friction: 0.96
    });
  }

  let animationFrame;
  const startTime = Date.now();
  const maxDuration = 3500;

  const update = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    let active = false;

    for (const p of particles) {
      p.vx *= p.friction;
      p.vy *= p.friction;
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotSpeed;
      p.opacity -= 0.007;

      if (p.opacity > 0 && p.y < window.innerHeight + 50) {
        active = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    if (active && Date.now() - startTime < maxDuration) {
      animationFrame = requestAnimationFrame(update);
    } else {
      cancelAnimationFrame(animationFrame);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    }
  };

  animationFrame = requestAnimationFrame(update);
};
