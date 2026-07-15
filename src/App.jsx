import Hero from './components/Hero';
import Layout from './components/Layout';
import './App.css';
import {
  BadgeCheck,
  CalendarClock,
  Clock3,
  CreditCard,
  Eye,
  Glasses,
  HeartPulse,
  Mail,
  MapPin,
  MessageSquareQuote,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from 'lucide-react';

const services = [
  {
    title: 'Comprehensive Eye Exams',
    description:
      'Thorough vision and eye health assessments using modern diagnostic tools for early detection and confident care.',
    icon: Stethoscope,
  },
  {
    title: 'Prescription Glasses & Frames',
    description:
      'Personalized frame styling and lens recommendations to suit your lifestyle, work needs, and budget.',
    icon: Glasses,
  },
  {
    title: 'Contact Lens Fittings',
    description:
      'Comfort-focused fittings, guidance, and aftercare for first-time and experienced contact lens wearers.',
    icon: Eye,
  },
  {
    title: 'Pediatric Eye Care',
    description:
      'Gentle and attentive eye tests for children to support learning, confidence, and healthy development.',
    icon: HeartPulse,
  },
  {
    title: 'Digital Eye Strain Support',
    description:
      'Tailored advice and corrective solutions for screen fatigue, headaches, dry eyes, and focus discomfort.',
    icon: Sparkles,
  },
  {
    title: 'Diabetic & Preventative Screening',
    description:
      'Routine monitoring and referral support to protect long-term eye health and preserve clear vision.',
    icon: ShieldCheck,
  },
];

const highlights = [
  'Experienced local optometry team with patient-first care.',
  'Transparent pricing and practical recommendations.',
  'Convenient central location and flexible bookings.',
  'Trusted by families, working professionals, and seniors.',
];

const testimonials = [
  {
    name: 'Ayanda M.',
    quote:
      'The staff made me feel comfortable from the moment I arrived. My exam was thorough, and I understood every step.',
  },
  {
    name: 'Lerato P.',
    quote:
      'I brought both my kids for check-ups and the team was so patient. Excellent service and a welcoming atmosphere.',
  },
  {
    name: 'Michael R.',
    quote:
      'Best optometrist experience I have had. Friendly guidance, quick turnaround, and my new lenses are perfect.',
  },
];

const faqs = [
  {
    question: 'How often should I have an eye test?',
    answer:
      'For most adults, every 1 to 2 years is recommended. If you have existing eye conditions or diabetes, more frequent checks may be advised.',
  },
  {
    question: 'Do I need an appointment?',
    answer:
      'Appointments are recommended so we can give you dedicated time. Same-week slots are often available.',
  },
  {
    question: 'Do you help with choosing frames and lenses?',
    answer:
      'Yes. We guide you through frame styles and lens options based on your prescription, routine, and budget.',
  },
  {
    question: 'Do you accept medical aid?',
    answer:
      'We support major medical aids. Contact us before your visit and we can help confirm your specific plan benefits.',
  },
];

function App() {
  return (
    <Layout>
      <Hero />

      <section id="services" aria-labelledby="services-heading" className="space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Our Services</p>
          <h2 id="services-heading" className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Complete Eye Care Under One Roof
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Everything your family needs for healthy, clear vision, delivered with
            warmth and professional attention.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg">
                <Icon className="h-8 w-8 text-emerald-600" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="about" className="grid gap-8 rounded-3xl bg-white p-6 ring-1 ring-slate-200 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
        <article>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">About Our Practice</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">A Local Team Focused on Long-Term Eye Health</h2>
          <p className="mt-4 text-slate-600">
            At Benoni Optometrist, we believe quality eye care should feel clear,
            personal, and reassuring. We take time to understand your visual needs
            and explain your options in plain language.
          </p>

          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <aside className="rounded-2xl bg-gradient-to-br from-brand-sky to-brand-mint p-6 ring-1 ring-emerald-100">
          <h3 className="text-xl font-semibold text-slate-900">Why Patients Choose Us</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white/85 p-4">
              <Users className="h-6 w-6 text-blue-700" aria-hidden="true" />
              <p className="mt-2 text-sm font-medium text-slate-800">Family-centered care</p>
            </div>
            <div className="rounded-xl bg-white/85 p-4">
              <CalendarClock className="h-6 w-6 text-blue-700" aria-hidden="true" />
              <p className="mt-2 text-sm font-medium text-slate-800">Easy appointment scheduling</p>
            </div>
            <div className="rounded-xl bg-white/85 p-4">
              <ShieldCheck className="h-6 w-6 text-blue-700" aria-hidden="true" />
              <p className="mt-2 text-sm font-medium text-slate-800">Reliable clinical standards</p>
            </div>
            <div className="rounded-xl bg-white/85 p-4">
              <CreditCard className="h-6 w-6 text-blue-700" aria-hidden="true" />
              <p className="mt-2 text-sm font-medium text-slate-800">Transparent pricing</p>
            </div>
          </div>
        </aside>
      </section>

      <section aria-labelledby="testimonials-heading" className="space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Patient Feedback</p>
          <h2 id="testimonials-heading" className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <MessageSquareQuote className="h-7 w-7 text-emerald-600" aria-hidden="true" />
              <blockquote className="mt-4 text-sm leading-6 text-slate-700">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-900">{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-heading" className="space-y-6 rounded-3xl bg-white p-6 ring-1 ring-slate-200 sm:p-10">
        <div className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Frequently Asked Questions</p>
          <h2 id="faq-heading" className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Helpful Information Before Your Visit
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-xl border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="grid gap-6 rounded-3xl bg-gradient-to-r from-blue-700 to-emerald-600 p-7 text-white sm:p-10 lg:grid-cols-[1.05fr_0.95fr]">
        <article>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Contact & Booking</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Ready to Book Your Eye Exam?</h2>
          <p className="mt-4 max-w-xl text-blue-50">
            Call, email, or visit us to schedule your appointment. We are here to help
            you and your family maintain healthy vision all year round.
          </p>

          <a
            href="tel:+27111234567"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-blue-700 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call (011) 123 4567
          </a>
        </article>

        <aside className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
          <h3 className="text-xl font-semibold">Visit Us</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-100" aria-hidden="true" />
              <span>12 Tom Jones Street, Benoni, 1500</span>
            </li>
            <li className="flex gap-3">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-100" aria-hidden="true" />
              <span>Mon - Fri: 08:00 - 17:00 | Sat: 08:00 - 13:00</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-emerald-100" aria-hidden="true" />
              <a href="mailto:hello@benonioptometrist.co.za" className="underline-offset-2 hover:underline">
                hello@benonioptometrist.co.za
              </a>
            </li>
          </ul>
        </aside>
      </section>
    </Layout>
  );
}

export default App;
