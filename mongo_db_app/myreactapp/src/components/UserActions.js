import Button from "@mui/material/Button";

function UserActions(props) {
  //logic helper for button
  function toggle(color) {
    const green = "rgb(183, 28, 200)";
    const pink = "rgb(9, 146, 146";
    const blue = "rgb(9, 0, 146";
    return color === blue ? pink : color === pink ? green : blue;
  }

  const handleOnClick = () => {
    props.setColor(toggle(props.color));
    props.setCounter(props.counter + 1);
  };

  return (
    <div className="text-center">
      <Button color="secondary" variant="contained" onClick={handleOnClick}>
        Change Color
      </Button>
    </div>
  );
}
export default UserActions;
