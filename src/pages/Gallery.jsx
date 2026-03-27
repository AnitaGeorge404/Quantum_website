import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import GalleryCard from "../components/ui/GalleryCard";
import Button from "../components/ui/Button";

const galleryItems = [
  {
    title: "Quantum Workshop Series",
    subtitle: "Hands-on sessions on algorithms, systems, and reproducibility.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Lab Research Activity",
    subtitle: "Cross-functional teams working across theory and hardware tracks.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Industry-Academia Symposium",
    subtitle: "Collaborative dialogue with technology and policy stakeholders.",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Graduate Research Showcase",
    subtitle: "Student-led presentations of emerging quantum research themes.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Visiting Scholars Program",
    subtitle: "International research exchange and seminar participation.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Annual Quantum Colloquium",
    subtitle: "Institute-wide event featuring keynote researchers and panels.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="A visual archive of institute events, research activity, workshops, and collaborative initiatives."
        accent="Institute Highlights"
      />

      <SectionWrapper>
        <SectionHeader
          eyebrow="Lab Events"
          title="Research activities and workshops"
          description="Moments from seminars, technical sessions, demonstrations, and institute programs."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <GalleryCard key={item.title} title={item.title} subtitle={item.subtitle} image={item.image} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <div className="glass-surface rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Participate in upcoming institute events</h2>
          <p className="mt-4 text-lg text-slate-600">Join technical workshops, symposia, and annual research showcases.</p>
          <div className="mt-8">
            <Button to="/join" variant="secondary">Contact Event Team</Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
