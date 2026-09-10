import React from 'react';

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
      <div className="relative overflow-hidden bg-[var(--panel-bg)]/80 border border-[var(--border-color)] rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm backdrop-blur-md">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[var(--text-primary)]">Event Organizers</h2>
          
          {/* QuDAIS Lab Logo Card */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-[420px] bg-[var(--background)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative w-full max-w-[320px]">
                <img 
                  src="/qiskit-photos/qudais_logo.jpeg" 
                  alt="QuDAIS Lab Logo" 
                  className="w-full h-auto object-contain rounded-xl drop-shadow-sm bg-white p-2"
                />
              </div>
            </div>
          </div>

          {/* Student Organizers Section */}
          <div className="border-t border-[var(--border-color)]/60 pt-12 mt-4">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">Student Organizers</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {studentGalleryItems.map((item, idx) => (
                <div key={idx} className="flex flex-col bg-[var(--background)] border border-[var(--border-color)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.text} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-4 w-full text-center border-t border-[var(--border-color)]">
                    <span className="font-semibold text-[var(--text-primary)] text-sm">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
