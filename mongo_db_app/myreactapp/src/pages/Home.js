import Main from "../components/Main";
import DbDataGetAll from "../components/DbDataGetAll";
import DbDataPost from "../components/DbDataPost";
import DbDataGetOneParam from "../components/DbDataGetOneParam";
import DbDataGetOnePath from "../components/DbDataGetOnePath";
import DbDataGetOneBodyParams from "../components/DbDataGetOneBodyParams";
import DbDataUpdateFull from "../components/DbDataUpdateFull";
import DbDataUpdatePartial from "../components/DbDataUpdatePartial";
import DbDataDelete from "../components/DbDataDelete";

function Home() {
  return (
    <>
      <DbDataGetAll />
      <DbDataPost />
      <DbDataGetOneParam />
      <DbDataGetOnePath />
      <DbDataGetOneBodyParams />
      <DbDataUpdateFull />
      <DbDataUpdatePartial />
      <DbDataDelete />
      {/* <Main /> */}
    </>
  );
}
export default Home;
