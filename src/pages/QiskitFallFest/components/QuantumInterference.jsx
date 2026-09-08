import React, { useState, useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const colors = {
  white: 0xffffff,
  lightGray: 0xf0f0f0,
  gray: 0xdddddd,
  mediumGray: 0x888888,
  darkCharcoal: 0x444444
};

const Plexus = () => {
  const pointsRef = useRef();
  const linesRef = useRef();
  const centerGlowRef = useRef();
  
  const particleCount = 200;
  const maxDistance = 40;
  const sceneSize = 400;

  const [data] = useState(() => {
    const pos = new Float32Array(particleCount * 3);
    const spd = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * sceneSize;
      pos[i * 3 + 1] = (Math.random() - 0.5) * sceneSize;
      pos[i * 3 + 2] = (Math.random() - 0.5) * sceneSize;

      spd[i * 3] = (Math.random() - 0.5) * 0.2;
      spd[i * 3 + 1] = (Math.random() - 0.5) * 0.2;
      spd[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
    }
    return {
      positions: pos,
      speeds: spd,
      linePositions: new Float32Array(particleCount * particleCount * 3)
    };
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (pointsRef.current && linesRef.current && centerGlowRef.current) {
      // Rotate entire scene
      pointsRef.current.rotation.y += 0.0003;
      linesRef.current.rotation.y += 0.0003;

      const currentPositions = pointsRef.current.geometry.attributes.position.array;
      
      // Interference logic: central point pulse
      const sourceOffset = Math.sin(time * 2) * 5;
      centerGlowRef.current.scale.set(1 + sourceOffset * 0.05, 1 + sourceOffset * 0.05, 1 + sourceOffset * 0.05);
      centerGlowRef.current.material.opacity = 0.5 + Math.sin(time * 3) * 0.2;

      for (let i = 0; i < particleCount; i++) {
        // Move points
        currentPositions[i * 3] += data.speeds[i * 3];
        currentPositions[i * 3 + 1] += data.speeds[i * 3 + 1];
        currentPositions[i * 3 + 2] += data.speeds[i * 3 + 2];

        // Wrap around edges
        if (Math.abs(currentPositions[i * 3]) > sceneSize / 2) data.speeds[i * 3] *= -1;
        if (Math.abs(currentPositions[i * 3 + 1]) > sceneSize / 2) data.speeds[i * 3 + 1] *= -1;
        if (Math.abs(currentPositions[i * 3 + 2]) > sceneSize / 2) data.speeds[i * 3 + 2] *= -1;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;

      // Generate connections
      let lineIndex = 0;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = currentPositions[i * 3] - currentPositions[j * 3];
          const dy = currentPositions[i * 3 + 1] - currentPositions[j * 3 + 1];
          const dz = currentPositions[i * 3 + 2] - currentPositions[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < maxDistance * maxDistance) {
            data.linePositions[lineIndex++] = currentPositions[i * 3];
            data.linePositions[lineIndex++] = currentPositions[i * 3 + 1];
            data.linePositions[lineIndex++] = currentPositions[i * 3 + 2];
            data.linePositions[lineIndex++] = currentPositions[j * 3];
            data.linePositions[lineIndex++] = currentPositions[j * 3 + 1];
            data.linePositions[lineIndex++] = currentPositions[j * 3 + 2];
          }
        }
      }

      // Update lines
      linesRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(data.linePositions.subarray(0, lineIndex), 3));
      linesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* Central Interference Source */}
      <mesh ref={centerGlowRef}>
        <sphereGeometry args={[10, 32, 32]} />
        <meshBasicMaterial color={colors.mediumGray} transparent={true} opacity={0.5} blending={THREE.AdditiveBlending} />
      </mesh>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={data.positions.length / 3}
            array={data.positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          color={colors.darkCharcoal} 
          size={2} 
          transparent={true} 
          opacity={0.6} 
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial 
          color={colors.gray} 
          transparent={true} 
          opacity={0.2} 
        />
      </lineSegments>
    </group>
  );
};

export default function QuantumInterference() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[var(--bg-primary)]">
      <Canvas camera={{ position: [0, 0, 250], fov: 75 }} gl={{ alpha: true, antialias: true }}>
        <Plexus />
      </Canvas>
    </div>
  );
}
