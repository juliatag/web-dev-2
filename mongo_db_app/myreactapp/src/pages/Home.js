import Main from "../components/Main";
import DbDataGetAll from "../components/database/DbDataGetAll";
import DbDataPost from "../components/database/DbDataPost";
import DbDataGetOneParam from "../components/database/DbDataGetOneParam";
import DbDataGetOnePath from "../components/database/DbDataGetOnePath";
import DbDataGetOneBodyParams from "../components/database/DbDataGetOneBodyParams";
import DbDataUpdateFull from "../components/database/DbDataUpdateFull";
import DbDataUpdatePartial from "../components/database/DbDataUpdatePartial";
import DbDataDelete from "../components/database/DbDataDelete";
import Register from "../components/Register";
import LoginForm from "../components/forms/LoginForm";
import Login from "../components/Login";

function Home() {
  return (
    <>
      <Main />
    </>
  );
}
export default Home;
