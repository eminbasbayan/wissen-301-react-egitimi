function Button(props) {
  return <button className={`btn btn-${props.type}`}>{props.children}</button>;
}

export default Button;
