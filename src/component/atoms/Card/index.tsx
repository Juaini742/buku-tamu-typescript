function Card(props) {
  const {className, children} = props;
  const cardStyle = "px-2 py-5 rounded-xl bg-white shadow-lg";
  return <div className={`${cardStyle} ${className}`}>{children}</div>;
}

export default Card;
