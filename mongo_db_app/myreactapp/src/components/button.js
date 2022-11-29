function Button({ title, event }) {
  return (
    <button className="btn" onClick={event}>
      {title}
    </button>
  );
}
export default Button;
