import { education, profile } from '../../data/profile';

function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <img
          className="about__photo reveal"
          src="/img/portrait.jpg"
          alt="Abheejan standing in front of a snow-capped Himalayan peak"
          width="900"
          height="1200"
          loading="lazy"
        />
        <div className="reveal">
          <p className="eyebrow">About</p>
          <h2>Backend first, always shipping to a real client.</h2>
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <h3 className="sub-head">Education</h3>
          <ol className="timeline">
            {education.map((item) => (
              <li key={item.title}>
                <span>{item.period}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.place}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default About;
