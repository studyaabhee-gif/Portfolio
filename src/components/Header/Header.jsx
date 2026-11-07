import { useEffect, useRef, useState } from 'react';
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { profile } from '../../data/profile';

const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

function currentTheme() {
  const set = document.documentElement.dataset.theme;
  if (set) return set;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function Header() {
  const [theme, setTheme] = useState(currentTheme);
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState('');
  const progress = useRef(null);

  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Highlight the nav link for whichever section crosses the middle of the screen.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ['top', ...NAV.map((item) => item.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) {
        progress.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
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
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={section === item.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="btn btn--small" href={profile.cv} download>
            <FiDownload aria-hidden="true" /> CV
          </a>
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
      <div className="scroll-progress" ref={progress} aria-hidden="true" />
    </header>
  );
}

export default Header;
