import { FiDownload } from 'react-icons/fi';
import { education, profile } from '../../data/profile';

function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about__media reveal">
          <div className="about__shape" aria-hidden="true" />
          <img
            src="/img/about.jpg"
            alt="Abheejan in a grey blazer, leaning on a red car"
            width="840"
            height="937"
            loading="lazy"
          />
        </div>
        <div className="reveal">
          <p className="pill">About</p>
          <h2>Backend first, always shipping to a real client.</h2>
          {profile.about.map((paragraph) => (
            <p className="about__text" key={paragraph}>
              {paragraph}
            </p>
          ))}

          <h3 className="sub-head">Education</h3>
          <ol className="timeline">
            {education.map((item) => (
              <li key={item.title}>
                <span>{item.period}</span>
                <strong>{item.title}</strong>
                <p>{item.place}</p>
              </li>
            ))}
          </ol>
          <div className="btn-row">
            <a className="btn" href={profile.cv} download>
              <FiDownload aria-hidden="true" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
