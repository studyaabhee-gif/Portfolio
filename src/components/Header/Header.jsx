import { useEffect, useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

const NAV = [
  { href: '#work', label: 'Work' },
  { href: '#research', label: 'Research' },
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
  { href: '#about', label: 'About' },
];

function currentTheme() {
  const set = document.documentElement.dataset.theme;
  if (set) return set;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function Header() {
  const [theme, setTheme] = useState(currentTheme);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* the choice just won't persist */
    }
  };

  return (
    <header className="site-header">
      <div className="container site-header__row">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          abheejan<span>.go</span>
        </a>

        <nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Main">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="site-nav__cta" href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
