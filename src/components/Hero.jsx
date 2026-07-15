function Hero() {
  return (
    <section id="home" className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-mint via-white to-brand-sky px-6 py-20 shadow-hero sm:px-10 lg:px-16">
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-brand-green/10 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-brand-blue/10 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6 text-center lg:text-left">
          <p className="inline-flex items-center rounded-full bg-white/85 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-700 ring-1 ring-emerald-200">
            Trusted Family Eye Care in Benoni
          </p>

          <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Helping You See Clearly, Comfortably, and Confidently
          </h1>

          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-slate-700 sm:text-xl lg:max-w-xl">
            We combine modern eye-care technology with a warm neighborhood approach.
            Whether you need a routine exam, glasses, or contact lens support, our
            team will guide you with care at every step.
          </p>

          <a
            href="#contact"
            className="inline-flex rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-md shadow-blue-900/20 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
          >
            Book an Appointment
          </a>

          <ul className="grid grid-cols-1 gap-3 pt-3 text-left text-sm text-slate-700 sm:grid-cols-3">
            <li className="rounded-xl bg-white/75 px-4 py-3 ring-1 ring-slate-200">Advanced digital eye exams</li>
            <li className="rounded-xl bg-white/75 px-4 py-3 ring-1 ring-slate-200">Friendly care for all ages</li>
            <li className="rounded-xl bg-white/75 px-4 py-3 ring-1 ring-slate-200">Flexible appointment times</li>
          </ul>
        </div>

        <aside className="rounded-3xl bg-white/90 p-6 text-left ring-1 ring-slate-200 backdrop-blur sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">Clinic Hours</h2>
          <dl className="mt-5 space-y-3 text-sm text-slate-700">
            <div className="flex items-center justify-between gap-4">
              <dt>Monday - Friday</dt>
              <dd className="font-medium text-slate-900">08:00 - 17:00</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt>Saturday</dt>
              <dd className="font-medium text-slate-900">08:00 - 13:00</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt>Sunday</dt>
              <dd className="font-medium text-slate-900">Closed</dd>
            </div>
          </dl>

          <p className="mt-6 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800 ring-1 ring-emerald-100">
            Same-week appointments are often available. Contact us to check the next
            opening.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
