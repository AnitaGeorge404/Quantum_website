import React from 'react';

const studentOrganizers = [
  { name: 'Thomas Bustamante', role: 'Lead Organiser' },
  { name: 'Jigyasa Sharma', role: 'Co-Organiser' },
  { name: 'Tingyao Wang', role: 'Co-Organiser' },
  { name: 'Afia Fahmida Rahman', role: 'Co-Organiser' },
  { name: 'Chandhru Karthick', role: 'Co-Organiser' },
  { name: 'Shaifali Choudhary', role: 'Content writer' },
];

export default function Organizers() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="relative overflow-hidden bg-[var(--panel-bg)]/80 border border-[var(--border-color)] rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm backdrop-blur-md">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[var(--text-primary)]">Event Organizers</h2>

          {/* QuDAIS Lab Logo Card */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-[420px] bg-[var(--background)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:border-[var(--text-primary)]/30 transition-all duration-300 ease-out hover:-translate-y-1">
              <div className="relative w-full max-w-[320px]">
                <img
                  src="/photos/qudais_logo.jpeg"
                  alt="QuDAIS Lab Logo"
                  className="w-full h-auto object-contain rounded-xl drop-shadow-sm bg-white p-2"
                />
              </div>
            </div>
          </div>

          {/* Student Organizers Section -> Updated UI */}
          <div className="border-t border-[var(--border-color)]/60 mt-4">
            <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-[120px] pb-12 text-[var(--text-primary)]">
              <h2 className="text-3xl sm:text-5xl font-medium">Student Organizers</h2>
              <p className="max-w-lg text-center text-[var(--muted-foreground)] mb-6">
                A passionate team of digital experts dedicated to your brands success.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                {studentOrganizers.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex max-sm:flex-col items-center gap-4 p-4 rounded-xl border border-[var(--border-color)] bg-[var(--background)] shadow-sm hover:shadow-lg hover:shadow-black/10 hover:-translate-y-1 hover:border-[var(--text-primary)]/25 transition-all duration-300 ease-out cursor-default"
                  >
                    <svg
                      className="w-[60px] h-[60px] flex-shrink-0 text-[var(--muted-foreground)] group-hover:text-[var(--text-primary)] group-hover:scale-110 transition-all duration-300 ease-out"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label={item.name}
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                    <div className="flex flex-col max-sm:items-center">
                      <h3 className="font-semibold text-[var(--text-primary)] relative w-fit">
                        {item.name}
                        <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[var(--text-primary)] group-hover:w-full transition-all duration-300 ease-out rounded-full" />
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)] group-hover:text-[var(--text-primary)]/70 transition-colors duration-300">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
