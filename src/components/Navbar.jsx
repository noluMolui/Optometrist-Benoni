const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100/80 bg-white/85 backdrop-blur" role="banner">
      <nav
        className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#home" className="text-lg font-semibold tracking-tight text-slate-900" aria-label="Go to homepage">
          Benoni Optometrist
        </a>

        <ul className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition hover:text-blue-700">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
        >
          Book Now
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
