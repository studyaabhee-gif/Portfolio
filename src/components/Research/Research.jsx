import { useState } from 'react';
import { FiCheck, FiCopy, FiExternalLink } from 'react-icons/fi';
import { paper, profile } from '../../data/profile';

function Research() {
  const [copied, setCopied] = useState(false);

  const copyCitation = async () => {
    try {
      await navigator.clipboard.writeText(paper.citation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="section section--alt" id="research">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">Research</p>
          <h2>Published work</h2>
        </header>

        <article className="paper reveal">
          <p className="paper__meta">
            {paper.date} <span aria-hidden="true">/</span> {paper.volume}
          </p>
          <h3>{paper.title}</h3>
          <p className="paper__authors">
            {paper.authors.map((author, index) => (
              <span key={author}>
                {author === profile.name ? <strong>{author}</strong> : author}
                {index < paper.authors.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
          <p className="paper__venue">
            {paper.venue}. {paper.publisher}.
          </p>
          <p>{paper.summary}</p>
          <div className="btn-row">
            <a className="btn btn--primary" href={paper.url} target="_blank" rel="noreferrer">
              <FiExternalLink aria-hidden="true" /> DOI: {paper.doi}
            </a>
            <button type="button" className="btn" onClick={copyCitation}>
              {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
              <span aria-live="polite">{copied ? 'Citation copied' : 'Copy citation'}</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Research;
