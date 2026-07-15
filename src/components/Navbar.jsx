const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className="navbar" role="banner">
      <nav className="navbar__inner" aria-label="Primary navigation">
        <a href="#" className="navbar__logo" aria-label="Go to homepage">
          Benoni Optometrist
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
