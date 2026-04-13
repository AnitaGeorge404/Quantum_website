import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import Card from "../components/ui/Card";

export default function Collaborations() {
  return (
    <>
      <PageHero
        title="Collaborations"
        description="QuDAIS engages with academic, industry, and funding partners to accelerate impactful quantum technology development."
        accent="Partnership Ecosystem"
        ctaText="Contact QuDAIS"
        ctaTo="/join"
      />

      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <Card className="p-12 text-center bg-gradient-to-br from-sky-50/80 via-white to-pink-50/70 border border-sky-100/80">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Coming Soon</h2>
            <p className="text-lg text-slate-600">
              Our collaborations and partnerships page is being updated with verified information about our academic, industry, and funding partnerships. We'll be sharing details about active collaborations soon.
            </p>
            <p className="mt-6 text-slate-600">
              For inquiries about partnerships and collaborations, please <a href="/join" className="text-sky-700 hover:text-sky-900 underline font-medium">contact us</a>.
            </p>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}