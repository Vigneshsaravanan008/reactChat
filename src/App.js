import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <section className="d-flex flex-column justify-content-center p-lg-3 align-items-center home_section" id="home_section">
        <h1 className="developer_name pb-2 fs-65 text-center">
          Vignesh Saravanan
        </h1>
      </sction>
      <section>
      <h1>Helloworld</h1>
    </section>
    <section className="skill_section mt-4 py-5" id="skills">
        <Skills />
      </section>

      <section id="timeline_section mt-4 py-4">
        <Timeline />
      </section>

      <section className="contact_section mt-4 py-5" id="contact">
        <ContactUs />
      </section>
    </div>
  );
}

export default App;
