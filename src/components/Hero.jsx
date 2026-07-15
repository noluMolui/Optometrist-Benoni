function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-mint via-white to-brand-sky px-6 py-20 shadow-hero sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-brand-green/10 blur-2xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-brand-blue/10 blur-2xl" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <p className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-700 ring-1 ring-emerald-200">
          Caring Local Eye Clinic in Benoni
        </p>

        <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
          Clear, Comfortable Vision with a Team That Knows You by Name
        </h1>

        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-slate-700 sm:text-xl">
          Friendly, professional eye care for your whole family. From routine eye
          exams to personalized lens guidance, we are here to keep your vision
          healthy and your visits stress-free.
        </p>

        <button
          type="button"
          className="rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-md shadow-blue-900/20 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
        >
          Book an Appointment
        </button>
      </div>
    </section>
  );
}

export default Hero;
