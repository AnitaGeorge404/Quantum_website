import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, useGLTF, Html, Center } from '@react-three/drei';
import * as THREE from 'three';
import { useInView } from 'framer-motion';
import SectionHeader, { Reveal } from './SectionHeader';
import { stickers } from '../data/stickers';

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

const outcomes = [
  { title: 'Learn from the flock', body: 'Connect with industry experts and learn quantum fundamentals from scratch.', icon: stickers.kingfisher },
  { title: 'Build in the cloud', body: 'Run real quantum circuits directly on IBM Quantum hardware during the hackathon.', icon: stickers.cloud },
  { title: 'Share the sky', body: 'Collaborate with peers globally and present your innovative projects to the community.', icon: stickers.swallow },
];

export default function Experience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  return (
    <section id="events" className="qff-section" ref={containerRef}>
      <div className="qff-container grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* 3D quantum computer */}
        <Reveal className="relative order-2 overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--surface)] lg:order-1">
          <div className="absolute left-4 top-4 z-10 qff-label">Interactive Hardware Model</div>
          <div className="h-[380px] w-full cursor-grab active:cursor-grabbing sm:h-[460px] lg:h-full lg:min-h-[560px]">
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
          </div>
        </Reveal>

        {/* Outcomes */}
        <div className="order-1 flex flex-col lg:order-2">
          <SectionHeader index="05" label="Why join" title="What you will earn" className="!mb-8" />

          <ol className="border-t border-[var(--border-strong)]">
            {outcomes.map((o, i) => (
              <Reveal as="li" key={o.title} delay={i * 0.06} className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 border-b border-[var(--border)] py-6">
                <span className="font-mono text-sm text-[var(--pink-strong)] pt-1">0{i + 1}</span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">{o.title}</h3>
                  <p className="mt-2 text-sm md:text-base leading-relaxed text-[var(--muted-foreground)]">{o.body}</p>
                </div>
                <img
                  src={o.icon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="w-14 md:w-16 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:-rotate-3"
                />
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.2} className="mt-8 border-l-2 border-[var(--pink)] pl-5 text-sm leading-relaxed text-[var(--muted-foreground)]">
            Open to the public. Registration is required. This is a fully virtual event. Attendees
            must consent to event recording/photography during registration.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
