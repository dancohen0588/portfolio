'use client';

import { useEffect, useRef } from 'react';

/**
 * Static prism illustration drawn once on a canvas: a white beam enters a glass
 * prism and leaves as a violet → cyan spectrum. No animation loop, no WebGL.
 * Placeholder until the licensed hero photo is dropped in (see spec.md).
 */
export function PrismBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.scale(dpr, dpr);

      ctx.fillStyle = '#18181B';
      ctx.fillRect(0, 0, w, h);

      const px = w * 0.62;
      const py = h * 0.48;

      // Incoming white beam
      const beam = ctx.createLinearGradient(0, py, px, py);
      beam.addColorStop(0, 'rgba(255,255,255,0)');
      beam.addColorStop(1, 'rgba(255,255,255,0.75)');
      ctx.beginPath();
      ctx.moveTo(0, py - 3);
      ctx.lineTo(px, py - 1);
      ctx.lineTo(px, py + 1);
      ctx.lineTo(0, py + 3);
      ctx.closePath();
      ctx.fillStyle = beam;
      ctx.fill();

      // Prism
      ctx.beginPath();
      ctx.moveTo(px - 70, py + 70);
      ctx.lineTo(px, py - 80);
      ctx.lineTo(px + 70, py + 70);
      ctx.closePath();
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.35)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Spectrum fan
      const colors = ['#DB2777', '#E85D8A', '#A855F7', '#7C3AED', '#38BDF8', '#06B6D4'];
      colors.forEach((color, i) => {
        const a0 = -0.02 + i * 0.055;
        const a1 = a0 + 0.07;
        const len = w;
        const g = ctx.createLinearGradient(px, py, w, py + Math.tan((a0 + a1) / 2) * len);
        g.addColorStop(0, `${color}FF`);
        g.addColorStop(1, `${color}00`);
        ctx.beginPath();
        ctx.moveTo(px + 20, py + 10);
        ctx.lineTo(px + 20 + len * Math.cos(a0), py + 10 + len * Math.sin(a0));
        ctx.lineTo(px + 20 + len * Math.cos(a1), py + 10 + len * Math.sin(a1));
        ctx.closePath();
        ctx.fillStyle = g;
        ctx.globalAlpha = 0.75;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      const glow = ctx.createRadialGradient(px + 40, py, 0, px + 40, py, 320);
      glow.addColorStop(0, 'rgba(168,85,247,0.35)');
      glow.addColorStop(1, 'rgba(168,85,247,0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
