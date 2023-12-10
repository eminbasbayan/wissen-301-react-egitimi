function Button({ text, type }) {
  return (
    <button
      className={`btn btn-${type}`}
    >
      {text}
    </button>
  );
}

export default Button;
