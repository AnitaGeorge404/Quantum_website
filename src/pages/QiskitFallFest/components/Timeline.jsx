import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { schedule } from '../data/schedule';
import SplitText from './SplitText';

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" ref={containerRef} className="pt-32 pb-24 relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <SplitText
          text="About the Event"
          tag="h2"
          className="text-4xl md:text-5xl font-black mb-6 text-[var(--text-primary)]"
          delay={10}
          duration={0.2}
        />
        <SplitText
          text="From Quantum Fundamentals to Real-World Quantum Applications. A five-day online event designed to introduce students to quantum computing, provide hands-on experience with Qiskit, connect participants with experts from academia and industry, and foster collaborative learning through a virtual hackathon."
          tag="p"
          className="text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto"
          delay={5}
          duration={0.15}
          splitType="words"
        />
      </div>

      <div className="relative min-h-[800px] py-10 overflow-hidden lg:overflow-visible">
        {/* The central vertical line */}
        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-[var(--border-color)] lg:-translate-x-1/2 rounded-full z-0" />
        
        {/* Animated progressive line */}
        <motion.div 
          className="absolute left-8 lg:left-1/2 top-0 w-1 bg-gradient-to-b from-[var(--accent-pink)] to-[var(--accent-blue)] lg:-translate-x-1/2 rounded-full shadow-[0_0_15px_var(--accent-blue)] z-10"
          style={{ height: lineHeight }}
        />

        {/* Nodes */}
        <div className="relative z-20 space-y-0">
          {schedule.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <Node 
                key={idx} 
                item={item} 
                isLeft={isLeft} 
                progress={scrollYProgress} 
                index={idx} 
                total={schedule.length} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Node({ item, isLeft, progress, index, total }) {
  const nodeTriggerPoint = (index + 0.5) / total;
  
  const opacity = useTransform(
    progress,
    [nodeTriggerPoint - 0.2, nodeTriggerPoint],
    [0, 1]
  );
  
  const y = useTransform(
    progress,
    [nodeTriggerPoint - 0.2, nodeTriggerPoint],
    [50, 0]
  );
  
  const scale = useTransform(
    progress,
    [nodeTriggerPoint - 0.1, nodeTriggerPoint],
    [0, 1]
  );

  return (
    <div className={`relative flex items-center z-20 w-full min-h-[140px] py-6 ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      
      {/* Spacer for one half on desktop */}
      <div className="hidden lg:block lg:w-1/2"></div>
      
      {/* Center dot */}
      <div className="flex items-center justify-center shrink-0 absolute left-8 lg:left-1/2 -translate-x-1/2 w-8 h-8 z-30">
         <motion.div 
           className="w-4 h-4 rounded-full border-[2px] border-[var(--accent-blue)] bg-[var(--background)] shadow-[0_0_10px_var(--accent-blue)]"
           style={{ scale, opacity }}
         />
      </div>

      {/* Card area */}
      <div className={`w-full pl-20 lg:pl-0 lg:w-1/2 flex ${isLeft ? 'lg:justify-end lg:pr-16' : 'lg:justify-start lg:pl-16'}`}>
         
         <motion.div 
           className={`relative w-full max-w-[450px] p-6 lg:p-8 group text-left`}
           style={{ opacity, y }}
         >
           {/* Card Background */}
           <div className="absolute inset-0 bg-[var(--panel-bg)]/80 backdrop-blur-xl border border-[var(--border-color)] group-hover:border-[var(--accent-blue)] transition-colors duration-500 rounded-lg"></div>

           {/* Corner accents */}
           <div className="absolute top-0 left-0 w-8 h-8 border-t-[2px] border-l-[2px] border-transparent group-hover:border-[var(--accent-blue)] transition-all duration-500 rounded-tl-lg"></div>
           <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[2px] border-r-[2px] border-transparent group-hover:border-[var(--accent-blue)] transition-all duration-500 rounded-br-lg"></div>

           <div className={`relative z-20 flex flex-col gap-2 items-start`}>
             {/* Background Number */}
             <div className="absolute -top-6 -right-2 text-7xl lg:text-8xl font-bold font-sans pointer-events-none transition-colors duration-500 select-none">
               <span className="text-[var(--border-color)] opacity-40 group-hover:text-[var(--accent-blue)] group-hover:opacity-10 transition-colors duration-500">
                 0{index + 1}
               </span>
             </div>

             {/* Date / Time */}
             <h3 className="text-[var(--text-primary)] font-bold font-mono text-xl lg:text-2xl tracking-wide uppercase mt-2 relative z-10">
               {item.time}
             </h3>

             {/* Divider */}
             <div className="h-[2px] bg-[var(--accent-blue)] my-2 transition-all duration-700 ease-out w-0 group-hover:w-full relative z-10"></div>

             {/* Title */}
             <h4 className="text-lg font-semibold transition-colors duration-500 text-[var(--muted-foreground)] group-hover:text-[var(--text-primary)] relative z-10">
               {item.title}
             </h4>

             {/* Description */}
             <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mt-2 relative z-10">
               {item.speaker.bio}
             </p>
             
             {/* Speaker Name (if any) */}
             {item.speaker.name !== "TBA" && (
                <div className="text-xs font-bold text-[var(--accent-pink)] mt-2 relative z-10">
                  Speaker: {item.speaker.name}
                </div>
             )}
           </div>
         </motion.div>
      </div>
    </div>
  );
}
