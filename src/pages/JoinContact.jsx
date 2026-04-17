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

      <SectionWrapper id="opportunities" className="pt-12 pb-4">
        <SectionHeader
          eyebrow="CURRENT OPPORTUNITIES"
          title="Current opportunities"
          description="QuDAIS invites applications for its Summer Internship Programme."
        />
        <div className="max-w-3xl mx-auto mt-10">
          <Card className="bg-white rounded-[1.5rem] p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-sky-100">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Summer Internship 2026</h3>
            <div className="space-y-4 text-slate-700">
              <div>
                <p className="font-bold text-[#0c2340]">Duration:</p>
                <p>8 to 12 weeks</p>
              </div>
              <div>
                <p className="font-bold text-[#0c2340]">Offline Component:</p>
                <p>2 weeks at IIIT Kottayam</p>
              </div>
              <div>
                <p className="font-bold text-[#0c2340]">Benefits:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>E-certificate</li>
                  <li>Patent & Publication opportunities</li>
                  <li>Extension up to 6 months (with mentor approval)</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-[#0c2340]">Eligibility:</p>
                <p>B.Tech / B.E / M.Tech / M.E / MCA / MSc / BS-MS</p>
              </div>
              <div>
                <p className="font-bold text-[#0c2340]">Deadline:</p>
                <p>25 April 2026</p>
              </div>
              <div>
                <p className="font-bold text-[#0c2340]">Start Date:</p>
                <p>01 May 2026</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-sky-100">
              <Button to="/internship" variant="secondary" className="px-6 py-2 border border-sky-200 text-sky-700 hover:bg-sky-50 rounded-full">Learn More</Button>
            </div>
          </Card>
        </div>
      </SectionWrapper>

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
