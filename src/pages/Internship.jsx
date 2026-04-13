import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import PosterPopup from "../components/ui/PosterPopup";

const internshipDetails = {
  title: "Summer Internship 2026",
  duration: "8 to 12 weeks",
  offlineComponent: "2 weeks at IIIT Kottayam",
  benefits: [
    "E-certificate",
    "Patent & Publication opportunities",
    "Opportunity to extend research (with mentor approval) up to 6 months",
  ],
  eligibility: "B.Tech / B.E / M.Tech / M.E / MCA / MSc / BS-MS",
  applicationDeadline: "25 April 2026",
  internshipStartDate: "01 May 2026",
  links: {
    apply: "https://qudais.iiitkottayam.ac.in",
    payment: "https://onlinesbi.sbi.bank.in/sbicollect/",
    registration: "https://forms.gle/B1RaONAlXWpDgG9S8",
    moreInfo: "https://qudais.iiitkottayam.ac.in",
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

const facultyMentors = [
  "Dr. Rubell Marion Lincy G",
  "Dr. Asha Sebastian",
  "Dr. Panchami V",
  "Dr. Della Thomas",
  "Dr. Christina Terese Joseph",
  "Dr. Suriyapriya K",
  "Dr. John Paul Martin",
  "Dr. Riyasudheen T K",
  "Dr. Binu M",
  "Dr. A V Prajeesh",
  "Dr. Mirothali Chand C",
  "Dr. Santhos Kumar A.",
  "Dr. Balasubramanian P",
  "Dr. R. Tharaniya Sairaj",
  "Dr. Selvi C",
];

export default function Internship() {
  return (
    <AnimatePresence>
      <>
      <PageHero
        title="Internship"
        description="QuDAIS Lab welcomes motivated students for intensive research training in quantum technology and interdisciplinary applications."
        accent="Call for Applications"
        ctaText="Apply Now"
        ctaTo="/join"
      />

      <SectionWrapper>
        <SectionHeader
          eyebrow="Summer Internship 2026"
          title="Quantum Technology Developments Research Program"
          description="Focused research training combining foundational knowledge with hands-on contributions to cutting-edge quantum computing and AI systems projects."
        />

        <Card className="p-8 lg:p-10 border border-sky-100/80 bg-gradient-to-br from-sky-50/80 via-white to-pink-50/70">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column: Program Details */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Program Details</h3>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase">Duration</p>
                  <p className="text-gray-900 font-medium">{internshipDetails.duration}</p>
                  <p className="text-sm text-gray-600">{internshipDetails.offlineComponent}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase">Eligibility</p>
                  <p className="text-gray-900 font-medium">{internshipDetails.eligibility}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase">Application Deadline</p>
                  <p className="text-gray-900 font-medium">{internshipDetails.applicationDeadline}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase">Internship Start Date</p>
                  <p className="text-gray-900 font-medium">{internshipDetails.internshipStartDate}</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-slate-900 mb-4">Benefits</h4>
              <ul className="list-disc pl-5 space-y-2 mb-8 text-gray-700">
                {internshipDetails.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-slate-900 mb-4">Important Links</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600 font-medium">Apply:</p>
                  <a
                    href={internshipDetails.links.apply}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-700 hover:text-sky-900 break-all underline decoration-sky-300"
                  >
                    {internshipDetails.links.apply}
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Payment:</p>
                  <a
                    href={internshipDetails.links.payment}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-700 hover:text-sky-900 break-all underline decoration-sky-300"
                  >
                    {internshipDetails.links.payment}
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Registration:</p>
                  <a
                    href={internshipDetails.links.registration}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-700 hover:text-sky-900 break-all underline decoration-sky-300"
                  >
                    {internshipDetails.links.registration}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Thrust Areas & Faculty */}
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Research Thrust Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {thrustAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-sky-200 bg-white/70 px-3 py-1.5 text-xs sm:text-sm text-slate-700 hover:bg-sky-50 transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Faculty Mentors</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {facultyMentors.map((mentor) => (
                    <div
                      key={mentor}
                      className="rounded-lg border border-sky-100 bg-white/70 px-3 py-2 text-sm text-slate-700"
                    >
                      {mentor}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-sky-100 text-center">
            <p className="text-slate-700 font-medium">
              More information:{" "}
              <a
                href={internshipDetails.links.moreInfo}
                target="_blank"
                rel="noreferrer"
                className="text-sky-700 hover:text-sky-900 underline decoration-sky-300"
              >
                {internshipDetails.links.moreInfo}
              </a>
            </p>
          </div>
        </Card>
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <div className="glass-surface rounded-3xl p-10 text-center md:p-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Take Action
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Apply for Summer Internship 2026
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Join QuDAIS Lab for intensive research training in quantum computing, AI, FinTech, communication, and sensing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/join">Contact or Apply</Button>
            <Button to="/people" variant="secondary">
              Meet Faculty
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <PosterPopup />
      </>
    </AnimatePresence>
  );
}
