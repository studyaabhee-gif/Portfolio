import { useEffect, useState } from 'react';
import { FiArrowRight, FiCheck, FiGithub } from 'react-icons/fi';
import { revah, roomie } from '../../data/profile';
import Arch from './Arch';
import CountUp from './CountUp';
import { BoardMock, PhoneMock } from './Mockups';

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
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);
  const steps = roomie.pipeline;

  // Walk through the steps on its own until the visitor picks one.
  useEffect(() => {
    if (touched || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = setInterval(() => setActive((value) => (value + 1) % steps.length), 3200);
    return () => clearInterval(timer);
  }, [touched, steps.length]);

  return (
    <div className="pipeline-wrap reveal">
      <h4 className="sub-head">How a search runs</h4>
      <div className="pipeline-box">
        <div className="pipeline__track" aria-hidden="true">
          <i style={{ width: `${(active / (steps.length - 1)) * 100}%` }} />
        </div>
        <ol className="pipeline">
          {steps.map((step, index) => (
            <li key={step.label}>
              <button
                type="button"
                aria-pressed={index === active}
                className={index <= active ? 'is-done' : undefined}
                onClick={() => {
                  setTouched(true);
                  setActive(index);
                }}
              >
                <span className="pipeline__n">{index + 1}</span>
                <strong>{step.label}</strong>
                <span className="pipeline__detail">{step.detail}</span>
              </button>
            </li>
          ))}
        </ol>
        <p className="pipeline__explain" aria-live={touched ? 'polite' : 'off'} key={active}>
          {steps[active].explain}
        </p>
      </div>
    </div>
  );
}

function Featured() {
  return (
    <section className="section" id="work">
      <div className="container">
        <header className="section-head reveal">
          <p className="pill">Featured work</p>
          <h2>Systems I&apos;ve built</h2>
        </header>

        <article className="study study--sky reveal">
          <div className="study__grid">
            <div>
              <h3 className="study__title">{roomie.name}</h3>
              <p className="study__lead">{roomie.tagline}</p>
              <p className="study__text">{roomie.problem}</p>
              <Tags items={roomie.stack} />
              <p className="study__links">
                <a className="btn btn--primary" href={roomie.code} target="_blank" rel="noreferrer">
                  <FiGithub aria-hidden="true" /> Source code
                </a>
                <a className="btn" href="#research">
                  Read the research <FiArrowRight aria-hidden="true" />
                </a>
              </p>
            </div>
            <PhoneMock />
          </div>
        </article>

        <div className="study__detail">
          <div className="reveal">
            <h4 className="sub-head">What&apos;s in the system</h4>
            <Checks items={roomie.built} />
          </div>
          <div className="reveal">
            <Arch arch={roomie.arch} />
          </div>
        </div>

        <Pipeline />

        <div className="reveal">
          <h4 className="sub-head">Pilot results</h4>
          <dl className="stats">
            {roomie.results.map((result, index) => (
              <div className={`stat stat--${index}`} key={result.value}>
                <dt>{result.label}</dt>
                <dd>
                  <CountUp value={result.value} />
                </dd>
              </div>
            ))}
          </dl>
          <p className="note">{roomie.caveat}</p>
        </div>

        <article className="study study--peach study--next reveal">
          <div className="study__grid study__grid--flip">
            <BoardMock />
            <div>
              <h3 className="study__title">{revah.name}</h3>
              <p className="study__lead">{revah.tagline}</p>
              <Tags items={revah.stack} />
            </div>
          </div>
        </article>

        <div className="study__detail">
          <div className="reveal">
            <h4 className="sub-head">What&apos;s in the system</h4>
            <Checks items={revah.built} />
          </div>
          <div className="reveal">
            <Arch arch={revah.arch} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
