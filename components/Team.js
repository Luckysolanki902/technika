import React, { useState, useEffect } from "react";
import style from "./compstyles/team.module.css";
import Text from "./Text";
import TeamCardsEffect from "./TeamCardsEffect";

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    // Fetch data from the get-team API
    const fetchData = async () => {
      try {
        const response = await fetch("/api/get-team");
        const data = await response.json();
        if (data.success) {
          setTeamData(data.TeamMembers);
        } else {
          console.error("Error fetching team data:", data.error);
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };
    fetchData();
    console.log(teamData);
  }, []);

  // Extract unique departments from teamData
  const uniqueDepartments = Array.from(new Set(teamData.map((member) => member.Department)));

  return (
    <div className={style.main}>
      <div className={style.top}>team</div>
      <div className={style.bottom}>
        {uniqueDepartments.map((department, index) => (
          <div className={style.bt} key={index}>
            <div>
              {<Text prop={department} />}
            </div>
            <div className={style.caraCont}>
              <TeamCardsEffect teamMembers={teamData.filter((member) => member.Department === department)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
