import AboutSection from '../components/home/AboutSection';
import NewsSection from '../components/home/NewsSection';
import HighlightsSection from '../components/home/HighlightsSection';

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Home</h1>
      <AboutSection />
      <NewsSection />
      <HighlightsSection />
    </div>
  );
}
