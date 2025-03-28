const ComponentTwo = ({ label }: { label?: string }) => {
  return (
    <section className="alert alert success">
      <p>I'm a Remote demo and was built inside component two of remote-1 project</p>
      <p>
        im using React and Rspack Bundler
        {label ?? ''}
      </p>
    </section>
  );
};

export default ComponentTwo;
