function Hed1(props) {
  const {className, children, variant} = props;

  let hedStyle = "";
  switch (variant) {
    case "title":
      hedStyle += "text-[17px] font-bold";
      break;
    case "title-bold":
      hedStyle += "text-3xl font-bold";
      break;
    case "title-primary":
      hedStyle += "text-xl text-primary font-bold";
      break;
    case "title-card":
      hedStyle += "text-lg text-primary font-semibold";
      break;
    default:
      hedStyle += "";
      break;
  }
  return <h1 className={`${hedStyle} ${className}`}>{children}</h1>;
}

export default Hed1;
