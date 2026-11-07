import { FiCheck } from 'react-icons/fi';
import { roomie } from '../../data/profile';

function Featured() {
  return (
    <section className="section" id="work">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">Featured work</p>
          <h2>{roomie.name}</h2>
          <p className="section-head__lead">{roomie.tagline}</p>
        </header>

        <div className="case reveal">
          <div>
            <h3>The problem</h3>
            <p>{roomie.problem}</p>
            <ul className="tags" aria-label="Technologies">
              {roomie.stack.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>What&apos;s in the system</h3>
            <ul className="checks">
              {roomie.built.map((item) => (
                <li key={item}>
                  <FiCheck aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal">
          <h3 className="sub-head">How a search runs</h3>
          <ol className="pipeline">
            {roomie.pipeline.map((step, index) => (
              <li key={step.label}>
                <span className="pipeline__n">{String(index + 1).padStart(2, '0')}</span>
                <strong>{step.label}</strong>
                <span>{step.detail}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal">
          <h3 className="sub-head">Pilot results</h3>
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
      </div>
    </section>
  );
}

export default Featured;
