function Label(props) {
  const {htmlFor, className, children} = props;

  const labelStyle = "text-xl font-semibold my-2 block";

  return (
    <label htmlFor={htmlFor} className={`${labelStyle} ${className}`}>
      {children}
    </label>
  );
}

export default Label;
