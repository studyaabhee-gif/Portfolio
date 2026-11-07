import { stack } from '../../data/profile';
import { coreTech } from '../../data/tech';
import ApiConsole from './ApiConsole';

function Skills() {
  return (
    <section className="section section--sky" id="stack">
      <div className="container">
        <header className="section-head reveal">
          <p className="pill">Stack</p>
          <h2>What I work with</h2>
          <p className="section-head__lead">Go on the server, MongoDB for data, Dart and Flutter on the client.</p>
        </header>

        <div className="stack-grid">
          <div>
            <ul className="tiles reveal">
              {coreTech.map((item, index) => (
                <li style={{ '--c': item.color, '--d': `${index * 50}ms` }} key={item.name}>
                  <item.Icon aria-hidden="true" />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
            <div className="stack reveal">
              {stack.map((row) => (
                <div className="stack__row" key={row.group}>
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
          <div className="reveal">
            <ApiConsole />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
