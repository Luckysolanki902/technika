import React from "react";
import style from "./compstyles/card.module.css";
import Image from "next/image";

const Card = ({ name }) => {
  return (
    <div className={style.pro}>
      <div className={style.in}>  
        <div className={style.proin}>
          {/* <Image
            src={"/images/img.jpg"}
            height={159.984}
            width={130.748}
            alt="profile"
            className={style.proimg}
          /> */}
          <div className={style.imgOver}></div>
        </div>
        <div className={style.protxt}>{name}</div>
      </div>
    </div>
  );
};

export default Card;