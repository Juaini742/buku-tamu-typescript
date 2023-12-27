function Container(props) {
  const {className, children} = props;

  const containerStyle = "container";

  return (
    <section className={`${containerStyle} ${className}`}>{children}</section>
  );
}

export default Container;
