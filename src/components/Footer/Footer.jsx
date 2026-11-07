import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { links, profile } from '../../data/profile';

const SOCIALS = [
  { href: links.github, label: 'GitHub', icon: <FiGithub aria-hidden="true" /> },
  { href: links.linkedin, label: 'LinkedIn', icon: <FiLinkedin aria-hidden="true" /> },
  { href: links.instagram, label: 'Instagram', icon: <FiInstagram aria-hidden="true" /> },
  { href: links.facebook, label: 'Facebook', icon: <FiFacebook aria-hidden="true" /> },
];

function Footer() {
  return (
    <footer className="site-footer">
      <svg className="site-footer__ridge" viewBox="0 0 1600 160" preserveAspectRatio="none" aria-hidden="true">
        <path
          fill="#dbe8f8"
          d="m0 120 150-60 110 40 170-80 120 70 150-90 130 80 170-50 140 70 190-60 270 70v50H0z"
        />
        <path fill="#c3d7f2" d="M0 150c200-50 420-20 640-40s420-30 960 10v40H0z" />
      </svg>
      <div className="site-footer__bar">
        <div className="container site-footer__row">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <ul>
            {SOCIALS.map(({ href, label, icon }) => (
              <li key={label}>
                <a className="icon-btn" href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
