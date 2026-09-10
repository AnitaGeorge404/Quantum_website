import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function createCircleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext('2d');
  context.beginPath();
  context.arc(32, 32, 30, 0, Math.PI * 2, false);
  context.fillStyle = 'white';
  context.fill();
  return new THREE.CanvasTexture(canvas);
}

export default function NetBackground({
  particleCount = 50,
  particleColor = 0x5B45F2, // IBM Quantum purple
  lineColor = 0x7c3aed, // Vibrant violet line
  backgroundColor = 0xffffff,
  maxDistance = 145,
  interactive = true,
  className = "fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden",
  style,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768 || ('ontouchstart' in window);
    const effectiveParticles = isMobile ? 26 : Math.min(particleCount, 48);
    const effectiveMaxDist = isMobile ? maxDistance * 0.9 : maxDistance;

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1500
    );
    camera.position.z = 350;

    const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true, powerPreference: 'low-power' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0); // Transparent so background shows through
    container.appendChild(renderer.domElement);

    // 2. Create Particles
    const particlesData = [];
    const particlesGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(effectiveParticles * 3);

    // Confine depth (Z) so particles stay in front of camera and connect into visible webs
    const rangeX = 900;
    const rangeY = 650;
    const rangeZ = 160;

    for (let i = 0; i < effectiveParticles; i++) {
      const x = (Math.random() - 0.5) * rangeX;
      const y = (Math.random() - 0.5) * rangeY;
      const z = (Math.random() - 0.5) * rangeZ;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particlesData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.7,
          (Math.random() - 0.5) * 0.7,
          (Math.random() - 0.5) * 0.4
        ),
      });
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: particleColor,
      size: isMobile ? 4.5 : 6,
      transparent: true,
      opacity: 0.85,
      map: createCircleTexture(),
      alphaTest: 0.05,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particlesMesh);

    // 3. Create Lines
    const maxConnections = (effectiveParticles * (effectiveParticles - 1)) / 2;
    const linePositions = new Float32Array(maxConnections * 6);

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));

    const linesMaterial = new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: 0.38,
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // 4. Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event) => {
      if (!interactive) return;
      mouseX = (event.clientX - windowHalfX) * 0.1;
      mouseY = (event.clientY - windowHalfY) * 0.1;
    };

    if (interactive && !isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // 5. Animation Loop with Visibility Culling
    let animationFrameId = null;
    let isRunning = false;

    const animate = () => {
      if (!isRunning) return;
      animationFrameId = requestAnimationFrame(animate);

      // Camera parallax
      targetX = mouseX * 1.5;
      targetY = mouseY * 1.5;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      let vertexpos = 0;

      // Update particle positions
      const positions = particlesMesh.geometry.attributes.position.array;

      for (let i = 0; i < effectiveParticles; i++) {
        const particleData = particlesData[i];
        
        positions[i * 3] += particleData.velocity.x;
        positions[i * 3 + 1] += particleData.velocity.y;
        positions[i * 3 + 2] += particleData.velocity.z;

        // Bounce off bounds
        if (positions[i * 3 + 1] < -rangeY / 2 || positions[i * 3 + 1] > rangeY / 2) particleData.velocity.y = -particleData.velocity.y;
        if (positions[i * 3] < -rangeX / 2 || positions[i * 3] > rangeX / 2) particleData.velocity.x = -particleData.velocity.x;
        if (positions[i * 3 + 2] < -rangeZ / 2 || positions[i * 3 + 2] > rangeZ / 2) particleData.velocity.z = -particleData.velocity.z;

        // Check connections - cap at 3 connections per node for clean constellation geometry
        let connections = 0;
        for (let j = i + 1; j < effectiveParticles; j++) {
          if (connections >= 3) break;
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < effectiveMaxDist * effectiveMaxDist) {
            linePositions[vertexpos++] = positions[i * 3];
            linePositions[vertexpos++] = positions[i * 3 + 1];
            linePositions[vertexpos++] = positions[i * 3 + 2];

            linePositions[vertexpos++] = positions[j * 3];
            linePositions[vertexpos++] = positions[j * 3 + 1];
            linePositions[vertexpos++] = positions[j * 3 + 2];
            connections++;
          }
        }
      }

      particlesMesh.geometry.attributes.position.needsUpdate = true;

      linesMesh.geometry.setDrawRange(0, vertexpos / 3);
      linesMesh.geometry.attributes.position.needsUpdate = true;

      // Gentle continuous rotation
      scene.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    const startAnimation = () => {
      if (!isRunning) {
        isRunning = true;
        animate();
      }
    };

    const stopAnimation = () => {
      if (isRunning) {
        isRunning = false;
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(container);
    startAnimation();

    // 6. Handle Window Resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      stopAnimation();
      observer.disconnect();
      if (interactive && !isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      particlesGeometry.dispose();
      particleMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      renderer.dispose();
    };
  }, [particleCount, particleColor, lineColor, backgroundColor, maxDistance, interactive]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={style}
    />
  );
}
