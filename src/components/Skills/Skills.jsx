import { stack } from '../../data/profile';

function Skills() {
  return (
    <section className="section section--alt" id="stack">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">Stack</p>
          <h2>What I work with</h2>
          <p className="section-head__lead">Go on the server, MongoDB for data, Dart and Flutter on the client.</p>
        </header>

        <div className="stack reveal">
          {stack.map((row) => (
            <div className={`stack__row${row.primary ? ' stack__row--primary' : ''}`} key={row.group}>
              <h3>{row.group}</h3>
              <ul className="tags">
                {row.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
