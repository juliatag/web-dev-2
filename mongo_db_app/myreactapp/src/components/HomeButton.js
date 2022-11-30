import { useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import Button from "@mui/material/Button";

function HomeButton() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    try {
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button color="secondary" variant="contained" className="mx-2" onClick={handleSubmit}>
      Main App
    </Button>
  );
}
export default HomeButton;

//
// import {ThemeContext } from "App";
// const [ isBasic  , setIsBasic ] = useContext (isBasic,setIsBasic );

// <Button className={isBasic ? "list of Bootstrap classes for basic styling" : "list of Bootstrap classes for themed styling"} >Button</Button>

// function ThemeButton() {
//   return (
//     <Button
//     lassName={isBasic ? "list of Bootstrap classes for Basic button" : "list of Bootstrap classes for Fancy Button"}
//      onClick={isBasic ? alert("Basic Theme") : alert("Fancy Theme")}>
//       Main App
//     </Button>
//   );
// }
// export default ThemeButton;
