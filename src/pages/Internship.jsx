import { AnimatePresence } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import Card from "../components/ui/Card";

const internshipDetails = {
  title: "Summer Internship 2026",
  duration: "8 to 12 weeks",
  offlineComponent: "2 weeks at IIIT Kottayam",
  eligibility: "B.Tech / B.E / M.Tech / M.E / MCA / MSc / BS-MS",
  applicationDeadline: "25 April 2026",
  internshipStartDate: "01 May 2026",
  benefits: [
    "E-certificate",
    "Patent & Publication opportunities",
    "Opportunity to extend research (with mentor approval) up to 6 months"
  ],
  links: {
    apply: "https://qudais.iiitkottayam.ac.in",
    payment: "https://onlinesbi.sbi.bank.in/sbicollect/",
    registration: "https://forms.gle/mDuyToam7PYmBMii9",
    consentForm: "/Internship_Consent_form.pdf",
    bonafideFormat: "/Bonafide_Certificate_Format.docx",
  },
};

const thrustAreas = [
  "Quantum Computing",
  "Mathematics for Quantum Computing",
  "Quantum AI",
  "Quantum Machine Learning",
  "Quantum PDE",
  "Quantum Financial Systems",
  "Edge-ready Quantum AI for smart medical devices",
  "Hybrid deep learning with quantum layers",
  "Hybrid quantum learning for edge intelligence systems",
  "Quantum feature spaces for complex spatio-temporal data",
  "Quantum Agentic AI",
  "Quantum Transformers",
  "Quantum NLP",
  "Gen AI enable Quantum Learning",
  "Edge Computing",
  "Distributed Computing",
  "Cloud Computing",
  "Containers",
  "DevOps",
  "Quantum Cryptography",
  "Post Quantum Cryptography",
  "Computer Vision",
  "Time series forecasting",
  "Quantum photonic sensors for biological applications",
  "Environmental monitoring and materials characterization",
  "Quantum Spectrometer for light measurement",
  "Quantum light spectroscopy",
  "Graph Neural Networks",
  "Graph Foundational Models",
  "Deep Learning",
  "Fuzzy Rule-Based Systems",
  "Fuzzy Multi-Criteria Decision Making",
  "Type-2 Fuzzy Systems",
  "Fuzzy Uncertainty Modeling",
  "Fuzzy Risk Assessment Models",
];

const ExternalLinkIcon = () => (
  <svg className="w-3.5 h-3.5 ml-1.5 inline mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default function Internship() {
  return (
    <AnimatePresence>
      <div className="bg-[#f4f7f9] min-h-screen pb-20">
        <PageHero
          title="Internship"
          description="QuDAIS Lab welcomes motivated students for intensive research training in quantum technology and interdisciplinary applications."
          accent="Call for Applications"
          ctaText="Apply Now"
          ctaTo="#how-to-apply"
        />

        <SectionWrapper className="pt-12">
          <div className="mb-10 text-center max-w-4xl mx-auto">
            <h4 className="text-[11px] font-bold tracking-[0.18em] text-pink-500 uppercase mb-3">
              Summer Internship 2026
            </h4>
            <h2 className="text-3xl md:text-5xl font-serif text-[#0c2340] font-bold mb-5 leading-tight">
              Quantum Technology Developments Research Program
            </h2>
            <p className="text-[#3b82f6] text-lg md:text-xl">
              Focused research training combining foundational knowledge with hands-on contributions to cutting-edge quantum computing and AI systems projects.
            </p>
          </div>

          <Card className="p-8 md:p-12 mb-20 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-none rounded-[1.5rem]">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
              
              {/* Left Column: Details */}
              <div>
                <h3 className="text-2xl font-bold text-[#0c2340] font-serif mb-8">Program Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1">Duration</h4>
                    <p className="text-slate-800 font-medium">{internshipDetails.duration}</p>
                    <p className="text-slate-500 text-sm">{internshipDetails.offlineComponent}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1">Eligibility</h4>
                    <p className="text-slate-800 font-medium">{internshipDetails.eligibility}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1">Application Deadline</h4>
                    <p className="text-slate-800 font-medium">{internshipDetails.applicationDeadline}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1">Internship Start Date</h4>
                    <p className="text-slate-800 font-medium">{internshipDetails.internshipStartDate}</p>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-[#0c2340] font-serif mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {internshipDetails.benefits.map((benefit, index) => (
                        <li key={index} className="flex gap-2 items-start text-slate-700">
                          <span className="text-slate-400 mt-1">�</span>
                          <span className="text-sm md:text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-[#0c2340] font-serif mb-3">Important Links</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-slate-600 text-sm mb-1">Apply:</p>
                        <a href={internshipDetails.links.apply} className="text-[#3b82f6] hover:text-blue-800 hover:underline">
                          {internshipDetails.links.apply}
                        </a>
                      </div>
                      <div>
                        <p className="text-slate-600 text-sm mb-1">Payment:</p>
                        <a href={internshipDetails.links.payment} className="text-[#3b82f6] hover:text-blue-800 hover:underline break-all">
                          {internshipDetails.links.payment}
                        </a>
                      </div>
                      <div>
                        <p className="text-slate-600 text-sm mb-1">Registration:</p>
                        <a href={internshipDetails.links.registration} className="text-[#3b82f6] hover:text-blue-800 hover:underline break-all">
                          {internshipDetails.links.registration}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Thrust Areas */}
              <div>
                <h3 className="text-xl font-bold text-[#0c2340] font-serif mb-6">Research Thrust Areas</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {thrustAreas.map((area, index) => (
                    <span 
                      key={index} 
                      className="inline-block px-4 py-2 bg-white text-[#475569] text-[13px] rounded-full border border-sky-100 shadow-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

        {/* How to Apply Section */}
        <div id="how-to-apply" className="max-w-4xl mx-auto scroll-mt-24 mb-20 p-6 md:p-10">
          <h2 className="text-3xl font-bold text-[#0c2340] font-serif mb-2">How to Apply</h2>
          <p className="text-slate-500 mb-10 text-sm border-b border-slate-200 pb-4">
            Steps to take the Internship @ QuDAIS Lab, IIIT Kottayam
          </p>
            
            <div className="space-y-0">
              
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-start justify-between py-6 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition duration-150 rounded-lg md:px-4 -mx-4 md:mx-0">
                <div className="flex items-start gap-4 px-4 md:px-0">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#1d4ed8] text-white font-bold flex items-center justify-center rounded-sm">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0c2340] mb-1.5">Get Consent from a Mentor</h4>
                    <p className="text-[#475569] text-sm md:text-base max-w-2xl leading-relaxed">
                      Select a mentor from Faculties @ QuDAIS Research Lab based on your Domain of Interest and contact them through e-mail (with CV and other accomplishments).
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition duration-150 rounded-lg md:px-4 -mx-4 md:mx-0 gap-4">
                <div className="flex items-start md:items-center gap-4 px-4 md:px-0">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#1d4ed8] text-white font-bold flex items-center justify-center rounded-sm">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0c2340] mb-1.5">Download Consent Form</h4>
                    <p className="text-[#475569] text-sm md:text-base max-w-2xl leading-relaxed">
                      Get consent (e-signed copy) from the mentor in the prescribed format.
                    </p>
                  </div>
                </div>
                <div className="ml-16 md:ml-0 md:flex-shrink-0">
                  <a href={internshipDetails.links.consentForm} download className="inline-flex items-center px-4 py-2.5 bg-[#1d4ed8] text-white text-[13px] font-bold rounded shadow-sm hover:bg-[#1e40af] transition-colors">
                    Consent Form <ExternalLinkIcon />
                  </a>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition duration-150 rounded-lg md:px-4 -mx-4 md:mx-0 gap-4">
                <div className="flex items-start gap-4 px-4 md:px-0">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#1d4ed8] text-white font-bold flex items-center justify-center rounded-sm mt-0.5">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0c2340] mb-1.5">Internship Fee Payment</h4>
                    <div className="text-[#475569] text-[15px] max-w-2xl leading-relaxed space-y-1">
                      <p>Pay the fee through SBI Collect:</p>
                      <p>Go to SBI Collect</p>
                      <p>Select Type of Institution: Educational Institutes</p>
                      <p>Institution name: IIIT Kottayam (type first four letters in the search box)</p>
                      <p>Payment Category: QuDAIS Research Lab</p>
                      <p>Note down the transaction number (DU Number) and save the receipt as a PDF.</p>
                    </div>
                  </div>
                </div>
                <div className="ml-16 md:ml-0 md:flex-shrink-0 md:self-center">
                  <a href={internshipDetails.links.payment} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2.5 bg-[#1d4ed8] text-white text-[13px] font-bold rounded shadow-sm hover:bg-[#1e40af] transition-colors">
                    SBI Collect <ExternalLinkIcon />
                  </a>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition duration-150 rounded-lg md:px-4 -mx-4 md:mx-0 gap-4">
                <div className="flex items-start md:items-center gap-4 px-4 md:px-0">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#1d4ed8] text-white font-bold flex items-center justify-center rounded-sm">4</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0c2340] mb-1.5">Bonafide Certificate</h4>
                    <p className="text-[#475569] text-[15px] max-w-2xl leading-relaxed">
                      Get Bonafide Certificate from the Institute where you are undergoing the current course, in the prescribed format.
                    </p>
                  </div>
                </div>
                <div className="ml-16 md:ml-0 md:flex-shrink-0">
                  <a href={internshipDetails.links.bonafideFormat} download className="inline-flex items-center px-4 py-2.5 bg-[#1d4ed8] text-white text-[13px] font-bold rounded shadow-sm hover:bg-[#1e40af] transition-colors">
                    Bonafide Format <ExternalLinkIcon />
                  </a>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-6 pb-2 hover:bg-slate-50/50 transition duration-150 rounded-lg md:px-4 -mx-4 md:mx-0 gap-4">
                <div className="flex items-start gap-4 px-4 md:px-0 w-full mb-3">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#1d4ed8] text-white font-bold flex items-center justify-center rounded-sm mt-0.5">5</div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-[#0c2340] mb-1.5">Register Online</h4>
                    <p className="text-[#475569] text-[15px] mt-1 mb-5 leading-relaxed max-w-2xl">
                      Visit the Registration Page, enter the details asked on the form, upload all necessary documents, and click Final Submit. You will get a confirmation cum acknowledgement email from the QuDAIS Lab within the next 2 working days.
                    </p>
                  </div>
                </div>
                <div className="ml-16 md:ml-0 md:flex-shrink-0 md:self-start md:mt-2">
                  <a href={internshipDetails.links.registration} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2.5 bg-[#1d4ed8] text-white text-[13px] font-bold rounded shadow-sm hover:bg-[#1e40af] transition-colors">
                    Register Now <ExternalLinkIcon />
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="max-w-4xl mx-auto rounded-[1rem] overflow-hidden shadow-sm border border-slate-200 bg-white mt-12 mb-10">
            <div className="px-6 py-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#0c2340] font-serif">
                Summer Internship 2026 Poster
              </h2>
              <a
                href={internshipDetails.links.registration}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-[#3b82f6] hover:text-blue-800 flex items-center"
              >
                Click Here To Register <span className="ml-1 mb-0.5 text-lg leading-none">&rarr;</span>
              </a>
            </div>
            <div className="bg-white flex justify-center pb-0 border-t border-slate-100">
              <img
                src="/brand/poster.jpeg"
                alt="QuDAIS Summer Internship 2026 Poster"
                className="w-full object-contain"
                onError={(e) => {
                  e.target.src = "/brand/poster.jpg";
                }}
              />
            </div>
          </div>
        </SectionWrapper>
      </div>
    </AnimatePresence>
  );
}
