function DisplayMessage(props) {
  return (
    <div className="text-center">
      <h1 className="text-center" style={{ color: props.color }}>
        Julieta's React App
      </h1>
      <p> localStorage and session, components, routes, pages, outlet</p>
    </div>
  );
}
export default DisplayMessage;
