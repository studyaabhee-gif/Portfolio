function Arch({ arch }) {
  const summary = `${arch.client.name} calls ${arch.core.name}, which uses ${arch.services
    .map((service) => service.name)
    .join(', ')}`;

  return (
    <figure className="arch" aria-label={summary}>
      <figcaption className="arch__caption">{arch.caption}</figcaption>
      <div className="arch__node">
        <strong>{arch.client.name}</strong>
        <span>{arch.client.detail}</span>
      </div>
      <div className="arch__link">
        <i aria-hidden="true" />
        <span>{arch.link}</span>
      </div>
      <div className="arch__node arch__node--core">
        <strong>{arch.core.name}</strong>
        <span>{arch.core.detail}</span>
      </div>
      <div className="arch__fan" aria-hidden="true">
        {arch.services.map((service) => (
          <i key={service.name} />
        ))}
      </div>
      <div className="arch__row">
        {arch.services.map((service) => (
          <div className={`arch__node${service.primary ? ' arch__node--db' : ''}`} key={service.name}>
            <strong>{service.name}</strong>
            <span>{service.detail}</span>
          </div>
        ))}
      </div>
    </figure>
  );
}

export default Arch;
