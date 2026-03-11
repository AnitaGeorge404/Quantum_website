import HeroSection from "../components/home/HeroSection";
import LabOverview from "../components/home/LabOverview";
import ResearchHighlights from "../components/home/ResearchHighlights";
import LatestNews from "../components/home/LatestNews";
import ResearcherSpotlight from "../components/home/ResearcherSpotlight";
import FacilitiesPreview from "../components/home/FacilitiesPreview";
import CollaborationsPreview from "../components/home/CollaborationsPreview";
import JoinLab from "../components/home/JoinLab";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LabOverview />
      <ResearchHighlights />
      <LatestNews />
      <ResearcherSpotlight />
      <FacilitiesPreview />
      <CollaborationsPreview />
      <JoinLab />
      <CTASection />
    </>
  );
}
