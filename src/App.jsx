import Hero from './components/Hero';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      <Hero />

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
