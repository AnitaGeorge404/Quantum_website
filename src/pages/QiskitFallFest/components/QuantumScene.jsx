import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, useGLTF, Html, Center } from '@react-three/drei';
import * as THREE from 'three';

// Split out of Experience.jsx so three.js, the .glb and the .hdr are only
// fetched once the section is near the viewport, instead of competing with
// the page's images on first load.

function QuantumModel(props) {
  const { scene } = useGLTF('/models/quantum-computer.glb');

  React.useLayoutEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.geometry.computeBoundingBox();
        const bbox = child.geometry.boundingBox;
        const width = bbox.max.x - bbox.min.x;
        const height = bbox.max.y - bbox.min.y;
        const depth = bbox.max.z - bbox.min.z;

        const newMaterial = new THREE.MeshStandardMaterial({
          metalness: 0.8,
          roughness: 0.25
        });

        const detRandom = (child.name.length + child.uuid.length) % 3;

        if (width > 1.0 && depth > 1.0 && height < 0.5) {
          // Flat disks -> Gold
          newMaterial.color.set('#D4AF37');
        } else if (height > 0.8 && width < 0.5 && depth < 0.5) {
          // Tall thin objects -> Silver
          newMaterial.color.set('#C0C0C0');
          newMaterial.metalness = 0.9;
        } else if (bbox.max.y > 2.0 && width > 1.5) {
          // Huge top flange -> Darker Titanium
          newMaterial.color.set('#A0A0A0');
          newMaterial.metalness = 0.8;
        } else {
          // Smaller components
          if (detRandom === 0) {
            newMaterial.color.set('#B87333'); // Copper
          } else if (detRandom === 1) {
            newMaterial.color.set('#D4AF37'); // Gold
          } else {
            newMaterial.color.set('#C0C0C0'); // Silver
          }
        }

        child.material = newMaterial;
      }
    });
  }, [scene]);

  return <primitive object={scene} {...props} />;
}

export default function QuantumScene({ isInView }) {
  return (
    <Canvas
      frameloop={isInView ? 'always' : 'never'}
      camera={{ position: [0, 0, 10], fov: 40 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      gl={{ antialias: false, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 10, 10]} intensity={1.0} color="#ffffff" />
      <directionalLight position={[-10, 10, -10]} intensity={0.5} color="#ffffff" />
      <directionalLight position={[10, -10, -10]} intensity={0.5} color="#ffffff" />
      <directionalLight position={[-10, -10, 10]} intensity={0.5} color="#ffffff" />
      <directionalLight position={[0, 0, 15]} intensity={1.0} color="#ffffff" />

      <Suspense fallback={<Html center><div className="qff-label whitespace-nowrap">Loading model…</div></Html>}>
        <Center>
          <QuantumModel scale={5} />
        </Center>
        <Environment files="/potsdamer_platz_1k.hdr" />
        <ContactShadows position={[0, -5, 0]} opacity={0.3} scale={20} blur={2} far={10} />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        rotateSpeed={2}
        minDistance={4}
        maxDistance={20}
        autoRotate
        autoRotateSpeed={1.0}
      />
    </Canvas>
  );
}
