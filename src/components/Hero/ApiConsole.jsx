import { useState } from 'react';
import { endpoints } from '../../data/profile';

const TOKEN = /("(?:[^"\\]|\\.)*")(\s*:)?|\b(true|false|null)\b|(-?\d+(?:\.\d+)?)/g;

// Colours JSON text by wrapping keys, strings and numbers in spans.
function highlight(json) {
  const parts = [];
  let last = 0;
  for (const match of json.matchAll(TOKEN)) {
    if (match.index > last) parts.push(json.slice(last, match.index));
    if (match[2]) {
      parts.push(
        <span className="tok-key" key={match.index}>
          {match[1]}
        </span>,
        match[2],
      );
    } else {
      parts.push(
        <span className={match[1] ? 'tok-str' : 'tok-num'} key={match.index}>
          {match[0]}
        </span>,
      );
    }
    last = match.index + match[0].length;
  }
  parts.push(json.slice(last));
  return parts;
}

function ApiConsole() {
  const [active, setActive] = useState(0);
  const endpoint = endpoints[active];

  return (
    <div className="console">
      <div className="console__bar">
        <span className="console__method">GET</span>
        <span className="console__path">{endpoint.path}</span>
        <span className="console__status">200 OK</span>
      </div>
      <div className="console__routes" role="group" aria-label="Choose an endpoint">
        {endpoints.map((item, index) => (
          <button
            key={item.path}
            type="button"
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          >
            {item.path.replace('/v1/', '/')}
          </button>
        ))}
      </div>
      <pre className="console__body" tabIndex="0" aria-live="polite" key={endpoint.path}>
        <code>{highlight(JSON.stringify(endpoint.body, null, 2))}</code>
      </pre>
      <p className="console__note">Demo console: click a route. Responses are generated from this page.</p>
    </div>
  );
}

export default ApiConsole;
