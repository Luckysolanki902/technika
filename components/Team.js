import React from "react";
import style from "./compstyles/team.module.css";
import Text from "./Text";
import TeamCardsEffect from "./TeamCardsEffect";

const Team = () => {
  return (
    <div className={style.main}>
      <div className={style.top}>team</div>
      {<Text prop={"Web-d"} />}
      <div className={style.caraCont}>{<TeamCardsEffect />}</div>
      {<Text prop={"Design"} />}
      <div className={style.caraCont}>{<TeamCardsEffect />}</div>
    </div>
  );
};

export default Team;