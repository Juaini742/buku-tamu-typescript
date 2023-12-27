function Button(props) {
  const {variant, type, onClick, className, children} = props;
  let btnStye = "";
  switch (variant) {
    case "primary":
      btnStye += "btn-primary";
      break;
    case "outline":
      btnStye += "btn-outline-primary";
      break;
    case "warning":
      btnStye += "btn-warning";
      break;
    case "danger":
      btnStye += "btn-danger";
      break;
    default:
      btnStye += "";
      break;
  }
  return (
    <button type={type} onClick={onClick} className={`${btnStye} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
