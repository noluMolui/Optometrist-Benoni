function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-emerald-100 bg-white/80">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Benoni Optometrist</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Professional, friendly eye care for children, adults, and seniors in
            Benoni and surrounding communities.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a href="#services" className="transition hover:text-blue-700">Services</a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-blue-700">About Us</a>
            </li>
            <li>
              <a href="#faq" className="transition hover:text-blue-700">FAQ</a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-blue-700">Book Appointment</a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Shop+3C,+Opp.+Caltex+Garage,+Voortrekker+St,+Benoni"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-blue-700"
              >
                Shop 3C, Opp. Caltex Garage, Voortrekker St, Benoni
              </a>
            </li>
            <li>
              <a href="tel:+27111234567" className="transition hover:text-blue-700">(011) 123 4567</a>
            </li>
            <li>
              <a href="mailto:hello@benonioptometrist.co.za" className="transition hover:text-blue-700">
                hello@benonioptometrist.co.za
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div className="border-t border-emerald-100 px-4 py-4 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        © {year} Benoni Optometrist. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
