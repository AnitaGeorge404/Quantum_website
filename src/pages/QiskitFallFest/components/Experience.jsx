import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, useGLTF, Html, Center } from '@react-three/drei';
import * as THREE from 'three';
import TextType from './TextType';
import SplitText from './SplitText';
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
useGLTF.preload('/models/quantum-computer.glb');

export default function Experience() {
  return (
    <section id="events" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
        {/* Left Column - 3D Quantum Computer Box */}
        <div className="w-full lg:w-1/2 bg-white/40 border border-[var(--border-color)] backdrop-blur-md rounded-2xl overflow-hidden relative flex flex-col p-0 items-center justify-center min-h-[500px] lg:min-h-[600px] shadow-2xl">
          <div className="absolute top-4 left-4 z-20">
            <div className="inline-block px-3 py-1 rounded-full bg-black/5 border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] uppercase tracking-wider backdrop-blur-md">
              Interactive Hardware Model
            </div>
          </div>
          <div className="w-full h-full min-h-[500px] lg:min-h-[600px] cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
              <ambientLight intensity={1.2} />
              <directionalLight position={[10, 10, 10]} intensity={1.0} color="#ffffff" />
              <directionalLight position={[-10, 10, -10]} intensity={0.5} color="#ffffff" />
              <directionalLight position={[10, -10, -10]} intensity={0.5} color="#ffffff" />
              <directionalLight position={[-10, -10, 10]} intensity={0.5} color="#ffffff" />
              <directionalLight position={[0, 0, 15]} intensity={1.0} color="#ffffff" />
              
              <Suspense fallback={<Html center><div className="text-[var(--text-primary)] font-mono text-sm whitespace-nowrap bg-white/80 border border-[var(--border-color)] px-4 py-2 rounded-md backdrop-blur-md shadow-sm">Loading 3D Model...</div></Html>}>
                <Center>
                  <QuantumModel scale={5} />
                </Center>
                <Environment files="/potsdamer_platz_1k.hdr" />
                <ContactShadows position={[0, -5, 0]} opacity={0.4} scale={20} blur={2} far={10} />
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
          </div>
        </div>

        {/* Right Column - Core Objectives Box */}
        <div className="w-full lg:w-1/2 bg-white/40 border border-[var(--border-color)] backdrop-blur-md rounded-2xl p-8 md:p-12 text-[var(--text-primary)] flex flex-col justify-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black mb-10 text-[var(--text-primary)]">
            <TextType text="What you will earn" loop={false} startOnVisible={true} />
          </h2>
          
          <div className="space-y-8 mb-10 flex-grow">
            <div className="flex gap-6 border-b border-[var(--border-color)] pb-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Learn from the flock</h3>
                <p className="text-[var(--muted-foreground)] text-base leading-relaxed">Connect with industry experts and learn quantum fundamentals from scratch.</p>
              </div>
            </div>
            <div className="flex gap-6 border-b border-[var(--border-color)] pb-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Build in the cloud</h3>
                <p className="text-[var(--muted-foreground)] text-base leading-relaxed">Run real quantum circuits directly on IBM Quantum hardware during the hackathon.</p>
              </div>
            </div>
            <div className="flex gap-6 pb-2">
              <div>
                <h3 className="text-xl font-bold mb-2">Share the sky</h3>
                <p className="text-[var(--muted-foreground)] text-base leading-relaxed">Collaborate with peers globally and present your innovative projects to the community.</p>
              </div>
            </div>
          </div>

          <div className="mt-auto bg-[var(--muted)]/50 p-5 rounded-lg text-sm leading-relaxed border-l-4 border-[var(--accent-pink)] text-[var(--muted-foreground)]">
            Open to the public. Registration is required. This is a fully virtual event. Attendees must consent to event recording/photography during registration.
          </div>
        </div>
      </div>
    </section>
  );
}
