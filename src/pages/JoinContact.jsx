import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function JoinContact() {
  return (
    <div className="bg-[#f4f7f9] min-h-screen pb-20">
      <PageHero
        title="Join Us"
        description="Register to join QuDAIS Lab and contribute to cutting-edge research in quantum technology and AI systems."
        accent="Student Registration"
        ctaText="Register Now"
        ctaTo="#registration"
      />


      <SectionWrapper id="registration" className="pt-12">
        <SectionHeader
          eyebrow="Register Now"
          title="Student Registration Form"
          description="Fill out the form below to register your interest in joining QuDAIS Lab."
        />

        <div className="max-w-3xl mx-auto mt-10">
          <form className="bg-white rounded-[1.5rem] p-8 md:p-12 space-y-6 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-sky-100">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-bold text-[#0c2340]">Full Name</label>
              <input 
                id="name" 
                name="name"
                type="text" 
                required
                className="w-full rounded-xl border border-sky-200 bg-slate-50 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white transition-colors" 
                placeholder="Enter your full name" 
              />
            </div>
            
            <div>
              <label htmlFor="rollNumber" className="mb-2 block text-sm font-bold text-[#0c2340]">Roll Number</label>
              <input 
                id="rollNumber" 
                name="rollNumber"
                type="text" 
                required
                className="w-full rounded-xl border border-sky-200 bg-slate-50 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white transition-colors" 
                placeholder="Enter your roll number" 
              />
            </div>

            <div>
              <label htmlFor="branch" className="mb-2 block text-sm font-bold text-[#0c2340]">Branch</label>
              <input 
                id="branch" 
                name="branch"
                type="text" 
                required
                className="w-full rounded-xl border border-sky-200 bg-slate-50 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white transition-colors" 
                placeholder="e.g. Computer Science" 
              />
            </div>
            
            <div>
              <label htmlFor="reason" className="mb-2 block text-sm font-bold text-[#0c2340]">Why do you want to join?</label>
              <textarea 
                id="reason" 
                name="reason"
                rows="5" 
                required
                className="w-full rounded-xl border border-sky-200 bg-slate-50 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white transition-colors" 
                placeholder="Tell us about your interests, skills, and why you want to be part of QuDAIS Lab..." 
              />
            </div>
            
            <div className="pt-4 flex justify-end">
              <Button type="submit" variant="primary">Submit Registration</Button>
            </div>
          </form>
        </div>
      </SectionWrapper>
    </div>
  );
}
