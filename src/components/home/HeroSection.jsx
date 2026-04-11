import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[95vh] flex flex-col justify-center bg-[#f8fbff]">
      {/* Absolute clean geometric elements for modern aesthetic */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-3xl max-h-[800px] bg-gradient-to-br from-primary-100 to-transparent rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-3xl max-h-[800px] bg-gradient-to-tr from-secondary-50 to-transparent rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pb-28 z-10 w-full flex-grow flex flex-col justify-center text-center items-center">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center">
          
          <div className="fade-up mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary-100 shadow-sm text-xs font-semibold tracking-widest text-slate-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-400"></span>
              IIIT Kottayam
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold text-primary-900 leading-[1.05] tracking-tight mb-8 fade-up" style={{animationDelay: "0.1s"}}>
            QuDAIS <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-primary-900 to-primary-700 bg-clip-text text-transparent">Research Lab</span>
              {/* Subtle pink swoosh underline */}
              <svg className="absolute -bottom-4 left-0 w-full h-4 text-secondary-200" viewBox="0 0 500 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0 10C150 -2 350 -2 500 10" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl font-normal fade-up" style={{animationDelay: "0.2s"}}>
            Quantum Technology Developments in Artificial Intelligence Systems for interdisciplinary innovation in AI, FinTech, communication, and sensing.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4 fade-up" style={{animationDelay: "0.3s"}}>
            <Button
              to="/research"
              variant="primary"
            >
              Explore Research
            </Button>
            <Button
              to="/join"
              variant="secondary"
            >
              Join the Lab
            </Button>
          </div>
        </div>
      </div>

      {/* Modern minimal stats */}
      <div className="relative mt-8 max-w-5xl mx-auto px-6 z-10 fade-up" style={{animationDelay: "0.4s"}}>
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.03)] rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-100/50">
          {[
            { value: "15", label: "Faculty Members" },
            { value: "4", label: "Core Domains" },
            { value: "20+", label: "Focus Areas" },
            { value: "Ongoing", label: "Workshops" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group pl-8 first:pl-0 border-transparent">
              <div className="text-4xl font-extrabold text-primary-900 mb-1 group-hover:text-secondary-500 transition-colors">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
