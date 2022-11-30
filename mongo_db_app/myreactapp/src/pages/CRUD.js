import DbDataGetAll from "../components/database/DbDataGetAll";
import DbDataPost from "../components/database/DbDataPost";
import DbDataGetOneParam from "../components/database/DbDataGetOneParam";
import DbDataGetOnePath from "../components/database/DbDataGetOnePath";
import DbDataGetOneBodyParams from "../components/database/DbDataGetOneBodyParams";
import DbDataUpdateFull from "../components/database/DbDataUpdateFull";
import DbDataUpdatePartial from "../components/database/DbDataUpdatePartial";
import DbDataDelete from "../components/database/DbDataDelete";

function CRUD() {
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
    </>
  );
}
export default CRUD;
