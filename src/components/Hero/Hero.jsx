import { FiArrowRight, FiFileText } from 'react-icons/fi';
import { paper, profile } from '../../data/profile';

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
              See RoomieKTM <FiArrowRight aria-hidden="true" />
            </a>
            <a className="btn" href={paper.url} target="_blank" rel="noreferrer">
              <FiFileText aria-hidden="true" /> Read the paper
            </a>
          </div>
        </div>

        <figure className="arch" aria-label="RoomieKTM architecture: a Flutter app calls a Go API, which uses MongoDB, Firebase and an NLP service">
          <figcaption className="arch__caption">RoomieKTM, simplified</figcaption>
          <div className="arch__node">
            <strong>Flutter app</strong>
            <span>Dart, Riverpod, Dio</span>
          </div>
          <div className="arch__link">
            <i aria-hidden="true" />
            <span>HTTP/JSON + Firebase ID token</span>
          </div>
          <div className="arch__node arch__node--core">
            <strong>Go API</strong>
            <span>chi, search, moderation</span>
          </div>
          <div className="arch__fan" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="arch__row">
            <div className="arch__node arch__node--db">
              <strong>MongoDB</strong>
              <span>primary store</span>
            </div>
            <div className="arch__node">
              <strong>Firebase</strong>
              <span>auth, push</span>
            </div>
            <div className="arch__node">
              <strong>NLP</strong>
              <span>FastAPI</span>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
