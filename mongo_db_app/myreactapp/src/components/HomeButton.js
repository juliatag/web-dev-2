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
