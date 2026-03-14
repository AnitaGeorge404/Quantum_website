import Photo from "./Images/fakeImage.jpg";
import "./Gallery.css";

export default function EventsSection() {
  return (
    <div className="events-container">
      <h2 className="events-title">Events and Workshops</h2>

      {/* Event 1 */}
      <div className="section">
        <div className="text-container">
          <div className="section-heading">Quantum Computing Basics</div>
          <div className="section-content">
            This introductory workshop explored the fundamental ideas behind
            quantum computing and why it is considered the future of
            computational technology. Participants learned about qubits,
            superposition, and quantum gates through simple explanations and
            demonstrations. The session encouraged students to think about
            how emerging quantum technologies can impact real-world problems
            in science and engineering.
          </div>
        </div>

        <div className="image-container">
          <img src={Photo} alt="Event 1" />
        </div>
      </div>

      {/* Event 2 */}
      <div className="section reverse">
        <div className="text-container">
          <div className="section-heading">Quantum Algorithms Workshop</div>
          <div className="section-content">
            In this session, participants were introduced to some of the most
            famous quantum algorithms that demonstrate the power of quantum
            computation. Students explored how algorithms such as Grover’s
            search and Shor’s factoring work conceptually. Through interactive
            discussions, attendees gained insight into how quantum algorithms
            could dramatically outperform classical approaches.
          </div>
        </div>

        <div className="image-container">
          <img src={Photo} alt="Event 2" />
        </div>
      </div>

      {/* Event 3 */}
      <div className="section">
        <div className="text-container">
          <div className="section-heading">Hands-on Quantum Programming</div>
          <div className="section-content">
            This hands-on workshop allowed students to experiment with quantum
            programming frameworks and simulators. Participants learned how
            simple quantum circuits are constructed and executed using modern
            tools. The event focused on practical exploration, enabling
            students to visualize quantum operations and better understand
            theoretical concepts through experimentation.
          </div>
        </div>

        <div className="image-container">
          <img src={Photo} alt="Event 3" />
        </div>
      </div>

      {/* Event 4 */}
      <div className="section reverse">
        <div className="text-container">
          <div className="section-heading">Future of Quantum Technology</div>
          <div className="section-content">
            This talk explored the rapidly evolving landscape of quantum
            technologies and their potential impact on industries worldwide.
            Experts discussed current research trends, challenges in building
            scalable quantum systems, and possible future breakthroughs.
            Attendees left with a broader understanding of how quantum
            computing could reshape fields such as cryptography, chemistry,
            and artificial intelligence.
          </div>
        </div>

        <div className="image-container">
          <img src={Photo} alt="Event 4" />
        </div>
      </div>

    </div>
  );
}