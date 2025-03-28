const ComponentTwo = ({
  label,
  moreElement,
}: {
  label?: string;
  moreElement?: string;
}) => {
  return (
    <section className="alert alert-success">
      <h4>
        Hello{' '}
        <span aria-label="emoji" role="img">
          🤗
        </span>
        i'm a remote element and HAPPY to be here
      </h4>
      <p>
        I'm using <b>React</b> and <b>Rspack</b> Bundler
      </p>
      <p>Following properties was set inside the host</p>
      Label: {label ?? ''}
    </section>
  );
};

export default ComponentTwo;
