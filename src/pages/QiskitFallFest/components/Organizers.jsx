import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, MapPin } from 'lucide-react';
import { featuredOrganizer } from '../data/organizers';
import DotField from './DotField';
import CircularGallery from './CircularGallery';

const studentGalleryItems = [
  { image: 'https://placehold.co/600x800/444444/444444.png', text: 'Student Lead' },
  { image: 'https://placehold.co/600x800/444444/444444.png', text: 'Quantum Track' },
  { image: 'https://placehold.co/600x800/444444/444444.png', text: 'Workshops & Events' },
  { image: 'https://placehold.co/600x800/444444/444444.png', text: 'Design & Media' },
  { image: 'https://placehold.co/600x800/444444/444444.png', text: 'Community & PR' },
  { image: 'https://placehold.co/600x800/444444/444444.png', text: 'Logistics & Tech' },
];

export default function Organizers() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Outer Event Organizers Card with Unified DotField Background */}
      <div className="relative overflow-hidden bg-[var(--panel-bg)]/80 border border-[var(--border-color)] rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-md">
        {/* Full-width DotField Background for the entire Event Organizers container */}
        <div className="absolute inset-0 pointer-events-auto">
          <DotField
            dotRadius={4.5}
            dotSpacing={6}
            cursorRadius={380}
            cursorForce={0.12}
            bulgeStrength={80}
            glowRadius={0}
            gradientFrom="rgba(156, 163, 175, 0.75)"
            gradientTo="rgba(107, 114, 128, 0.55)"
            glowColor="transparent"
          />
        </div>

        {/* Section Content sitting over DotField */}
        <div className="relative z-10 pointer-events-none">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center text-[var(--text-primary)]">Event Organizers</h2>
          
          {/* QuDAIS Lab Background Card */}
          <div className="flex justify-center mb-2 pointer-events-auto">
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[420px] bg-[var(--panel-bg)]/85 backdrop-blur-xl border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden group"
              style={{
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Subtle Ambient Gradient Corner Glows */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center w-full">
                {/* Logo Container */}
                <div className="relative w-full max-w-[320px]">
                  <img 
                    src="/photos/qudais_logo.jpeg" 
                    alt="QuDAIS Lab Logo" 
                    className="w-full h-auto object-contain rounded-xl drop-shadow-sm bg-white p-2"
                  />
                </div>

              </div>
            </motion.div>
          </div>

          {/* Student Organizers Section with Circular Gallery */}
          <div className="border-t border-[var(--border-color)]/60 pt-6 mt-4">
            <div className="text-center mb-6">

              <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">Student Organizers</h3>
            </div>

            {/* Circular Gallery Container */}
            <div className="relative w-full h-[400px] md:h-[450px] pointer-events-auto select-none rounded-2xl overflow-hidden">
              <CircularGallery
                items={studentGalleryItems}
                bend={3}
                textColor="#000000"
                borderRadius={0.06}
                scrollEase={0.03}
                scrollSpeed={2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


