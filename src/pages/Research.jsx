import ResearchAreas from '../components/research/ResearchAreas';
import Publications from '../components/research/Publications';
import Projects from '../components/research/Projects';

export default function Research() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Research</h1>
      <ResearchAreas />
      <Publications />
      <Projects />
    </div>
  );
}
