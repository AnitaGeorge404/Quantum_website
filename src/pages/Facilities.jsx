import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import GalleryCard from "../components/ui/GalleryCard";
import Button from "../components/ui/Button";

const facilityCards = [
  {
    title: "Quantum Hardware Laboratory",
    subtitle:
      "Cryogenic and electronic control systems for superconducting qubit experiments.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab10380cb48?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Photonics and Optics Suite",
    subtitle:
      "Integrated setup for photonic quantum information processing and precision measurement.",
    image:
      "https://images.unsplash.com/photo-1582719478185-0c4f6dd2f3e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Simulation Infrastructure",
    subtitle:
      "Large-scale simulation resources for algorithm validation and circuit performance studies.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Computing Clusters",
    subtitle:
      "High-performance compute nodes supporting reproducible scientific workloads.",
    image:
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Facilities() {
  return (
    <>
      <PageHero
        title="Facilities"
        description="Our institute combines specialized laboratory environments and computational infrastructure to support world-class quantum research."
        accent="Institute Infrastructure"
      />

      <SectionWrapper>
        <SectionHeader
          eyebrow="Infrastructure"
          title="Built for high-quality experimental and computational science"
          description="From hardware characterization to algorithm simulation, our facilities support full-stack quantum research."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {facilityCards.map((item) => (
            <GalleryCard
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <div className="glass-surface rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Need access through collaboration?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            We support approved academic and industry collaborations through
            structured facility access programs.
          </p>
          <div className="mt-8">
            <Button to="/collaborations">Request Collaboration</Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
