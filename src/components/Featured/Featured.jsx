import { useState } from 'react';
import { FiCheck, FiGithub } from 'react-icons/fi';
import { revah, roomie } from '../../data/profile';
import Arch from './Arch';

function Checks({ items }) {
  return (
    <ul className="checks">
      {items.map((item) => (
        <li key={item}>
          <FiCheck aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Tags({ items }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

function Pipeline() {
  const [active, setActive] = useState(1);

  return (
    <div className="reveal">
      <h4 className="sub-head">How a search runs: select a step</h4>
      <ol className="pipeline">
        {roomie.pipeline.map((step, index) => (
          <li key={step.label}>
            <button type="button" aria-pressed={index === active} onClick={() => setActive(index)}>
              <span className="pipeline__n">{String(index + 1).padStart(2, '0')}</span>
              <strong>{step.label}</strong>
              <span>{step.detail}</span>
            </button>
          </li>
        ))}
      </ol>
      <p className="pipeline__explain" aria-live="polite">
        {roomie.pipeline[active].explain}
      </p>
    </div>
  );
}

function Featured() {
  return (
    <section className="section" id="work">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">Featured work</p>
          <h2>Systems I&apos;ve built</h2>
        </header>

        <article className="study">
          <div className="study__grid reveal">
            <div>
              <h3 className="study__title">{roomie.name}</h3>
              <p className="study__lead">{roomie.tagline}</p>
              <p className="study__text">{roomie.problem}</p>
              <Tags items={roomie.stack} />
              <p className="study__links">
                <a href={roomie.code} target="_blank" rel="noreferrer">
                  <FiGithub aria-hidden="true" /> Source code
                </a>
                <a href="#research">Read the research</a>
              </p>
            </div>
            <Arch arch={roomie.arch} />
          </div>

          <div className="reveal">
            <h4 className="sub-head">What&apos;s in the system</h4>
            <Checks items={roomie.built} />
          </div>

          <Pipeline />

          <div className="reveal">
            <h4 className="sub-head">Pilot results</h4>
            <dl className="stats">
              {roomie.results.map((result) => (
                <div key={result.value}>
                  <dt>{result.label}</dt>
                  <dd>{result.value}</dd>
                </div>
              ))}
            </dl>
            <p className="note">{roomie.caveat}</p>
          </div>
        </article>

        <article className="study study--next">
          <div className="study__grid reveal">
            <div>
              <h3 className="study__title">{revah.name}</h3>
              <p className="study__lead">{revah.tagline}</p>
              <Tags items={revah.stack} />
              <h4 className="sub-head">What&apos;s in the system</h4>
              <Checks items={revah.built} />
            </div>
            <Arch arch={revah.arch} />
          </div>
        </article>
      </div>
    </section>
  );
}

export default Featured;
