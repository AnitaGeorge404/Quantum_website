import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { schedule } from '../data/schedule';
import SplitText from './SplitText';
import sticker01 from '../assets/svg/Sticker 01.svg';
import sticker02 from '../assets/svg/Sticker 02.svg';
import sticker03 from '../assets/svg/Sticker 03.svg';
import sticker04 from '../assets/svg/Sticker 04.svg';
import sticker05 from '../assets/svg/Sticker 05.svg';
import cloudImg from '../assets/svg/cloud1.svg';

const eventStickers = [sticker01, sticker02, sticker03, sticker04, sticker05];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" ref={containerRef} className="pt-16 pb-12 relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        className="text-center mb-10 flex flex-col items-center justify-center relative bg-no-repeat bg-center bg-[length:100%_100%] py-16 px-6 sm:px-12 md:py-20 md:px-24 mx-auto w-full max-w-5xl"
        style={{ backgroundImage: `url('${cloudImg}')` }}
      >
        <div className="relative z-10 max-w-3xl">
          <SplitText
            text="About the Event"
            tag="h2"
            className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]"
            delay={15}
            duration={0.4}
          />
          <SplitText
            text="From Quantum Fundamentals to Real-World Quantum Applications. A five-day online event designed to introduce students to quantum computing, provide hands-on experience with Qiskit, connect participants with experts from academia and industry, and foster collaborative learning through a virtual hackathon."
            tag="p"
            className="text-base md:text-lg text-[var(--text-primary)] opacity-80 leading-relaxed text-center"
            delay={8}
            duration={0.3}
            splitType="words"
          />
        </div>
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
  const [isHovered, setIsHovered] = useState(false);
  const stickerSrc = eventStickers[index % eventStickers.length];

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
      
      {/* Opposite Side Sticker Illustration on Desktop */}
      <div className={`hidden lg:flex lg:w-1/2 items-center ${isLeft ? 'justify-start pl-16' : 'justify-end pr-16'}`}>
        <motion.div
          style={{ opacity, y }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full max-w-[450px] flex items-center justify-center py-4"
        >
          <div className="relative cursor-pointer transition-transform duration-500 hover:scale-105">
            {/* Ambient glow on hover */}
            <div
              className={`absolute inset-0 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
                isHovered
                  ? 'opacity-70 bg-gradient-to-tr from-[var(--accent-pink)]/25 to-[var(--accent-blue)]/30 scale-110'
                  : 'opacity-0'
              }`}
            />
            <img
              src={stickerSrc}
              alt={`Event ${index + 1} sticker`}
              className={`w-52 h-52 xl:w-60 xl:h-60 object-contain select-none transition-all duration-500 ease-out transform ${
                isHovered
                  ? 'grayscale-0 opacity-100 scale-105 drop-shadow-[0_12px_24px_rgba(91,69,242,0.25)]'
                  : 'grayscale opacity-25 scale-95'
              }`}
            />
          </div>
        </motion.div>
      </div>

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
           className={`relative w-full max-w-[450px] p-6 lg:p-8 group text-left transition-all duration-500 ${
             isHovered ? 'shadow-xl' : 'shadow-sm'
           }`}
           style={{ opacity, y }}
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
         >
           {/* Mobile Background Sticker (behind tile on responsive screens < lg) */}
           <div className="lg:hidden absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-lg z-0">
             <img
               src={stickerSrc}
               alt=""
               className={`w-48 h-48 sm:w-56 sm:h-56 object-contain select-none transition-all duration-500 ease-out ${
                 isHovered
                   ? 'grayscale-0 opacity-75 scale-105'
                   : 'grayscale opacity-30 scale-95'
               }`}
             />
           </div>

           {/* Card Background - transparent / frosted glass so mobile background sticker shines through */}
           <div className={`absolute inset-0 bg-[var(--panel-bg)]/60 lg:bg-[var(--panel-bg)]/80 backdrop-blur-md border ${
             isHovered ? 'border-[var(--accent-blue)]' : 'border-[var(--border-color)]'
           } transition-colors duration-500 rounded-lg z-10`}></div>

           {/* Corner accents */}
           <div className={`absolute top-0 left-0 w-8 h-8 border-t-[2px] border-l-[2px] ${
             isHovered ? 'border-[var(--accent-blue)]' : 'border-transparent'
           } transition-all duration-500 rounded-tl-lg z-20`}></div>
           <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-[2px] border-r-[2px] ${
             isHovered ? 'border-[var(--accent-blue)]' : 'border-transparent'
           } transition-all duration-500 rounded-br-lg z-20`}></div>

           <div className={`relative z-20 flex flex-col gap-2 items-start`}>
             {/* Background Number */}
             <div className="absolute -top-6 -right-2 text-7xl lg:text-8xl font-bold font-sans pointer-events-none transition-colors duration-500 select-none">
               <span className={`transition-colors duration-500 ${
                 isHovered ? 'text-[var(--accent-blue)] opacity-20' : 'text-[var(--border-color)] opacity-40'
               }`}>
                 0{index + 1}
               </span>
             </div>

             {/* Date / Time */}
             <h3 className="text-[var(--text-primary)] font-bold font-mono text-xl lg:text-2xl tracking-wide uppercase mt-2 relative z-10">
               {item.time}
             </h3>

             {/* Divider */}
             <div className={`h-[2px] bg-[var(--accent-blue)] my-2 transition-all duration-700 ease-out ${
               isHovered ? 'w-full' : 'w-0'
             } relative z-10`}></div>

             {/* Title */}
             <h4 className={`text-lg font-semibold transition-colors duration-500 relative z-10 ${
               isHovered ? 'text-[var(--text-primary)]' : 'text-[var(--muted-foreground)]'
             }`}>
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
