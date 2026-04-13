import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import Card from "../components/ui/Card";

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="A visual archive of institute events, research activity, workshops, and collaborative initiatives."
        accent="Institute Highlights"
        ctaText="Contact Us"
        ctaTo="/join"
      />

      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <Card className="p-12 text-center bg-gradient-to-br from-sky-50/80 via-white to-pink-50/70 border border-sky-100/80">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Coming Soon</h2>
            <p className="text-lg text-slate-600">
              Our gallery section is being curated with authentic photos and events from QuDAIS Lab. We'll be updating this space with real institute highlights and activities soon.
            </p>
            <p className="mt-6 text-slate-600">
              In the meantime, you can explore our <a href="/people" className="text-sky-700 hover:text-sky-900 underline font-medium">faculty and research team</a>.
            </p>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}
