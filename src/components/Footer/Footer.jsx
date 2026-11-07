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
    </footer>
  );
}

export default Footer;
