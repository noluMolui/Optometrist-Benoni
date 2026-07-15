import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      <section aria-labelledby="welcome-heading" className="content-section">
        <h1 id="welcome-heading">Trusted Eye Care in Benoni</h1>
        <p>
          Welcome to Benoni Optometrist. We provide comprehensive eye exams,
          contact lens fittings, and personalized vision care for the whole family.
        </p>
      </section>

      <section id="services" aria-labelledby="services-heading" className="content-section">
        <h2 id="services-heading">Our Services</h2>
        <p>
          Routine eye tests, children&apos;s eye care, contact lens consultations, and
          support for common visual concerns.
        </p>
      </section>
    </Layout>
  );
}

export default App;
