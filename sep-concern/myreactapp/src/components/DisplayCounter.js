function DisplayCounter(props) {
  return (
    <p className="text-center bold">
      Title Color changed <span className="count">{props.counter}</span> times
    </p>
  );
}

export default DisplayCounter;
