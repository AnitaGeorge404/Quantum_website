import { people } from "../data/peopleData.js";
import PersonCard from "../components/PersonCard";
import "../styles/People.css";

const SECTIONS = [
  { key: "head",      label: "Head of Department" },
  { key: "faculty",   label: "Faculty Members"    },
  { key: "phd",       label: "PhD Scholars"       },
  { key: "assistant", label: "Research Assistants"},
  { key: "student",   label: "Students"           },
];

export default function People() {
  return (
    <div className="container">
      <h1>Our People</h1>
      <p>
        Meet the researchers, scholars, and students driving quantum science
        at our lab.
      </p>

      {SECTIONS.map(({ key, label }) => {
        const members = people.filter((p) => p.category === key);
        if (members.length === 0) return null;

        return (
          <section key={key} className="section people-section">
            <h2>{label}</h2>
           <div className={`people-grid people-grid-${key}`}>
              {members.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
