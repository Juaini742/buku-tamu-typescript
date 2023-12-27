function Input(props) {
  const {type, name, id, className, placeholder} = props;
  const inputStyle = "border-2 w-full inline-block mt-2";

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`${inputStyle} ${className}`}
    />
  );
}

export default Input;
