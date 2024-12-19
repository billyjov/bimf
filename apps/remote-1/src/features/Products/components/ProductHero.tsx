const ProductHero = ({ label }: { label?: string }) => {
  return (
    <section>
      <p>I'm a Remote demo</p>
      <p>
        im using React and Rspack
        {label ?? ''}
      </p>
    </section>
  );
};

export default ProductHero;
