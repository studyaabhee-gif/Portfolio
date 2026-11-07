import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../../data/profile';

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">More projects</p>
          <h2>Other things I&apos;ve built</h2>
        </header>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project reveal" key={project.title}>
              {project.image ? (
                <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
              ) : (
                <div className="project__code" aria-hidden="true">
                  <code>go run .</code>
                  <code>flutter build web</code>
                </div>
              )}
              <div className="project__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tags" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project__links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <FiExternalLink aria-hidden="true" /> Live demo
                    </a>
                  )}
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noreferrer">
                      <FiGithub aria-hidden="true" /> Source code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
