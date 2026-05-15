'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SEPARATION = 100;
const AMOUNTX = 72;
const AMOUNTY = 42;

export function DottedSurface() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initialW = container.clientWidth || window.innerWidth;
    const initialH = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, initialW / initialH, 1, 10000);
    camera.position.set(0, 280, 700);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(initialW, initialH);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const canvas = renderer.domElement;
    canvas.style.position = 'absolute';
    canvas.style.inset = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    container.insertBefore(canvas, container.firstChild);

    const total = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(total * 3);
    const scales = new Float32Array(total);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0x1f1f2e) },
        opacity: { value: 0 },
      },
      vertexShader: `
        attribute float scale;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float opacity;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          float alpha = 1.0 - smoothstep(0.35, 0.5, d);
          gl_FragColor = vec4(color, alpha * opacity);
        }
      `,
      transparent: true,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let count = 0;
    let fadeIn = 0;
    let rafId: number | null = null;

    const computeStaticFrame = () => {
      let i = 0;
      let j = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
          positions[i] = x;
          positions[i + 1] = 0;
          positions[i + 2] = z;

          const dx = ix / AMOUNTX - 0.5;
          const dz = iy / AMOUNTY - 0.5;
          const dist = Math.sqrt(dx * dx + dz * dz);
          const falloff = Math.max(0.15, 1 - dist * 1.2);
          scales[j] = 4 * falloff;

          i += 3;
          j++;
        }
      }
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.scale.needsUpdate = true;
    };

    const animate = () => {
      rafId = requestAnimationFrame(animate);

      if (fadeIn < 1) {
        fadeIn = Math.min(fadeIn + 0.008, 1);
        material.uniforms.opacity.value = fadeIn * 0.85;
      }

      let i = 0;
      let j = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
          const y =
            Math.sin((ix + count) * 0.3) * 60 + Math.sin((iy + count) * 0.5) * 60;

          positions[i] = x;
          positions[i + 1] = y;
          positions[i + 2] = z;

          const waveScale =
            (Math.sin((ix + count) * 0.3) + 1) * 7 +
            (Math.sin((iy + count) * 0.5) + 1) * 7;
          const dx = ix / AMOUNTX - 0.5;
          const dz = iy / AMOUNTY - 0.5;
          const dist = Math.sqrt(dx * dx + dz * dz);
          const falloff = Math.max(0.15, 1 - dist * 1.2);

          scales[j] = (waveScale + 4) * falloff;

          i += 3;
          j++;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.scale.needsUpdate = true;

      camera.position.y = 280 + Math.sin(count * 0.05) * 20;
      camera.lookAt(scene.position);

      count += 0.04;
      renderer.render(scene, camera);
    };

    if (prefersReducedMotion) {
      material.uniforms.opacity.value = 0.85;
      computeStaticFrame();
      renderer.render(scene, camera);
    } else {
      animate();
    }

    const resizeObserver = new ResizeObserver(() => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resizeObserver.observe(container);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 1,
          background:
            'radial-gradient(ellipse 55% 45% at 35% 42%, rgba(250,250,250,0.82) 0%, rgba(250,250,250,0.45) 40%, rgba(250,250,250,0.1) 65%, transparent 100%)',
        }}
      />
    </div>
  );
}
