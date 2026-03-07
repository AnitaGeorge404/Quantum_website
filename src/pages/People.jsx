import FacultySection from '../components/people/FacultySection';
import StudentsSection from '../components/people/StudentsSection';
import AlumniSection from '../components/people/AlumniSection';

export default function People() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">People</h1>
      <FacultySection />
      <StudentsSection />
      <AlumniSection />
    </div>
  );
}
