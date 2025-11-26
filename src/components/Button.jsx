const Button = (props) => {
  console.log('props', props)
  const buttonClasses =
    props.buttonType === "outline"
      ? "text-dark border border-dark bg-transparent px-5 py-3 fw-semibold fs-5"
      : "bg-dark text-white px-5 py-2 fw-semibold fs-5";
  return <button className={buttonClasses}>{props.title}</button>;
};

export default Button;
