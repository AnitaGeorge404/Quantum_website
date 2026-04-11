import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import GalleryCard from "../components/ui/GalleryCard";
import Button from "../components/ui/Button";

const galleryItems = [
  {
    title: "Quantum Workshop Series",
    subtitle: "Hands-on sessions on algorithms, systems, and reproducibility.",
    image: "/photos/asha.jpeg",
  },
  {
    title: "Lab Research Activity",
    subtitle: "Cross-functional teams working across theory and hardware tracks.",
    image: "/photos/Santhos.JPG",
  },
  {
    title: "Industry-Academia Symposium",
    subtitle: "Collaborative dialogue with technology and policy stakeholders.",
    image: "/photos/jp-photo%20-%20Dr.John%20Paul%20-IIITK.jpeg",
  },
  {
    title: "Graduate Research Showcase",
    subtitle: "Student-led presentations of emerging quantum research themes.",
    image: "/photos/Prajeesh%20-%20Bhadra%20A%20V.png",
  },
  {
    title: "Visiting Scholars Program",
    subtitle: "International research exchange and seminar participation.",
    image: "/photos/IITM%20-%20Mirothali%20Chand.jpeg",
  },
  {
    title: "Annual Quantum Colloquium",
    subtitle: "Institute-wide event featuring keynote researchers and panels.",
    image: "/photos/xtina-pic%20-%20Dr.%20Christina%20-IIITK.jpg",
  },
];

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="A visual archive of institute events, research activity, workshops, and collaborative initiatives."
        accent="Institute Highlights"
        ctaText="Join Upcoming Events"
        ctaTo="/join"
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
