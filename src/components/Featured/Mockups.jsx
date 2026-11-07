import { FiCheckCircle, FiDroplet, FiMapPin, FiSearch, FiShield, FiSun, FiZap } from 'react-icons/fi';

const LISTINGS = [
  { title: 'Sunny room', tags: [FiSun, FiDroplet], trust: 94, tint: 'sky' },
  { title: 'Studio flat', tags: [FiZap, FiDroplet], trust: 88, tint: 'peach' },
  { title: 'Shared room', tags: [FiSun, FiZap], trust: 81, tint: 'lilac' },
];

export function PhoneMock() {
  return (
    <figure className="mock-phone" aria-label="Illustration of a room search app showing listings with trust scores">
      <div className="phone">
        <div className="phone__notch" />
        <div className="phone__search">
          <FiSearch aria-hidden="true" />
          <span className="typing">Sunny room with water backup</span>
        </div>
        {LISTINGS.map((listing, index) => (
          <div className="listing" style={{ '--i': index }} key={listing.title}>
            <div className={`listing__img listing__img--${listing.tint}`} />
            <div className="listing__body">
              <strong>{listing.title}</strong>
              <span>
                <FiMapPin aria-hidden="true" /> Kathmandu
              </span>
              <div className="listing__tags">
                {listing.tags.map((Tag, tagIndex) => (
                  <Tag aria-hidden="true" key={tagIndex} />
                ))}
              </div>
            </div>
            <span className="listing__trust">{listing.trust}</span>
          </div>
        ))}
      </div>
      <span className="mock-badge mock-badge--trust">
        <FiShield aria-hidden="true" /> Trust score
      </span>
      <span className="mock-badge mock-badge--kyc">
        <FiCheckCircle aria-hidden="true" /> KYC verified
      </span>
      <figcaption>Illustration</figcaption>
    </figure>
  );
}

const COLUMNS = [
  { title: 'To do', cards: ['w80', 'w60'] },
  { title: 'In progress', cards: ['w70'] },
  { title: 'Done', cards: ['w60', 'w80'] },
];

export function BoardMock() {
  return (
    <figure className="mock-board" aria-label="Illustration of a task board with a card moving between columns">
      <div className="board">
        <div className="board__bar">
          <i />
          <i />
          <i />
          <span>Workspace</span>
        </div>
        <div className="board__cols">
          {COLUMNS.map((column) => (
            <div className="board__col" key={column.title}>
              <p>{column.title}</p>
              {column.cards.map((width, index) => (
                <div className="board__card" key={`${column.title}-${index}`}>
                  <b className={width} />
                  <b className="w40" />
                </div>
              ))}
            </div>
          ))}
          <div className="board__card board__card--moving">
            <b className="w80" />
            <b className="w40" />
          </div>
        </div>
      </div>
      <span className="mock-badge mock-badge--chat">Realtime chat</span>
      <figcaption>Illustration</figcaption>
    </figure>
  );
}
