const ComponentTwo = ({ label }: { label?: string }) => {
  return (
    <section>
      <p>I'm a Remote demo and was built inside component two of remote-1 project</p>
      <p>
        im using React and Rspack
        {label ?? ''}
      </p>
    </section>
  );
};

export default ComponentTwo;
