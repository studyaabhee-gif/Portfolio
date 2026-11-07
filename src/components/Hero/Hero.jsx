import { useEffect, useRef } from 'react';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { SiFlutter, SiGo, SiMongodb } from 'react-icons/si';
import { profile } from '../../data/profile';
import { tech } from '../../data/tech';
import Scene from './Scene';

const HIGHLIGHT = new Set(['Go', 'MongoDB', 'Flutter']);

function Hero() {
  const hero = useRef(null);

  // Feed scroll and pointer position to CSS so the mountain layers can drift at different speeds.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let frame = 0;
    let mx = 0;
    const paint = () => {
      frame = 0;
      const el = hero.current;
      if (!el) return;
      el.style.setProperty('--sy', String(Math.min(window.scrollY, 900)));
      el.style.setProperty('--mx', String(mx));
    };
    const queue = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onMove = (event) => {
      mx = event.clientX / window.innerWidth - 0.5;
      queue();
    };
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', queue);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <>
      <section className="hero" id="top" ref={hero}>
        <Scene />
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="pill hero__fade">
              {profile.role} <span aria-hidden="true">·</span> {profile.location}
            </p>
            <h1 aria-label={profile.headline}>
              {profile.headline.split(' ').map((word, index) => (
                <span
                  className={`word${HIGHLIGHT.has(word) ? ' word--hl' : ''}`}
                  style={{ '--i': index }}
                  aria-hidden="true"
                  key={word}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="hero__intro hero__fade">{profile.intro}</p>
            <div className="btn-row hero__fade">
              <a className="btn btn--primary" href="#work">
                See my work <FiArrowRight aria-hidden="true" />
              </a>
              <a className="btn" href={profile.cv} download>
                <FiDownload aria-hidden="true" /> Download CV
              </a>
            </div>
          </div>

          <div className="hero__photo">
            <div className="hero__ring" aria-hidden="true" />
            <img
              src="/img/hero.jpg"
              alt="Abheejan in front of a snow-capped Himalayan peak"
              width="840"
              height="1050"
              fetchPriority="high"
            />
            <span className="float-chip float-chip--a" aria-hidden="true">
              <SiGo style={{ color: '#00ADD8' }} /> Go
            </span>
            <span className="float-chip float-chip--b" aria-hidden="true">
              <SiFlutter style={{ color: '#02569B' }} /> Flutter
            </span>
            <span className="float-chip float-chip--c" aria-hidden="true">
              <SiMongodb style={{ color: '#47A248' }} /> MongoDB
            </span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...tech, ...tech].map((item, index) => (
            <span key={`${item.name}-${index}`}>
              <item.Icon style={{ color: item.color }} /> {item.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
