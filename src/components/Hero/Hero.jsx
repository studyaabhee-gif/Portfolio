import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { profile } from '../../data/profile';
import ApiConsole from './ApiConsole';

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div>
          <p className="eyebrow">
            {profile.name} <span aria-hidden="true">/</span> {profile.role}
          </p>
          <h1>{profile.headline}</h1>
          <p className="hero__intro">{profile.intro}</p>
          <div className="btn-row">
            <a className="btn btn--primary" href="#work">
              See my work <FiArrowRight aria-hidden="true" />
            </a>
            <a className="btn" href={profile.cv} download>
              <FiDownload aria-hidden="true" /> Download CV
            </a>
          </div>
        </div>

        <ApiConsole />
      </div>
    </section>
  );
}

export default Hero;
