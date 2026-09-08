import React, { useState } from 'react';
import { team } from '../data/team';
import TiltedCard from './TiltedCard';
import FoldText from './FoldText';
import { Mail, Globe } from 'lucide-react';

export default function TeamGrid() {
  const [hoveredMember, setHoveredMember] = useState(0);

  return (
    <section id="team" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-[var(--text-primary)]">Meet the team</h2>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {team.map((member, idx) => (
          <div key={idx} className="w-full aspect-[4/5]">
            <TiltedCard 
              imageSrc={member.image} 
              altText={member.name}
              captionText={member.role}
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              scaleOnHover={1.15}
              rotateAmplitude={12}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-black/70 rounded-[15px] opacity-0 hover:opacity-100 transition-opacity duration-300 text-center">
                   <div className="mb-4 text-center">
                     <FoldText 
                       text={member.name} 
                       trigger="hover" 
                       color="white" 
                       fontSize={18} 
                       splitBy="word"
                       className="text-center font-bold"
                     />
                   </div>
                   
                   <div className="flex gap-4 items-center justify-center mt-2">
                     <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-[#5B45F2] transition-transform hover:scale-110" title="LinkedIn">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                     </a>
                     {member.email && (
                       <a href={member.email !== "#" ? `mailto:${member.email}` : "#"} className="text-white hover:text-[#5B45F2] transition-transform hover:scale-110" title="Email">
                         <Mail size={20} />
                       </a>
                     )}
                     {member.iiitkLink && (
                       <a href={member.iiitkLink} target="_blank" rel="noreferrer" className="text-white hover:text-[#5B45F2] transition-transform hover:scale-110" title="IIITK Profile">
                         <Globe size={20} />
                       </a>
                     )}
                   </div>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}
