import { useState } from 'react';
import { FiAward, FiCheck, FiCopy, FiExternalLink } from 'react-icons/fi';
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
    <section className="section section--tint" id="research">
      <div className="container research">
        <div className="sheet reveal" aria-hidden="true">
          <div className="sheet__back" />
          <div className="sheet__page">
            <p>ICICSET · Vol. 3</p>
            <strong>{paper.title}</strong>
            <em>{paper.authors[0]} et al.</em>
            <b className="w100" />
            <b className="w90" />
            <b className="w100" />
            <b className="w70" />
            <div className="sheet__chart">
              <i style={{ height: '48%' }} />
              <i style={{ height: '62%' }} />
              <i style={{ height: '58%' }} />
              <i style={{ height: '86%' }} />
            </div>
            <b className="w100" />
            <b className="w60" />
          </div>
          <span className="sheet__seal">
            <FiAward /> Published
          </span>
        </div>

        <div className="reveal">
          <p className="pill">Research</p>
          <h2>Published work</h2>
          <p className="paper__meta">
            {paper.date} <span aria-hidden="true">·</span> {paper.volume}
          </p>
          <h3 className="paper__title">{paper.title}</h3>
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
              <FiExternalLink aria-hidden="true" /> Read the paper
            </a>
            <button type="button" className="btn" onClick={copyCitation}>
              {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
              <span aria-live="polite">{copied ? 'Citation copied' : 'Copy citation'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;
