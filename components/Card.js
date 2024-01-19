import React from "react";
import style from "./compstyles/card.module.css";
import Image from "next/image";

const Card = ({ name, position, updatedImageUrl, number }) => {
console.log(position)
  return (
    <div className={style.pro}>
      <div className={style.in}>  
        <div className={style.proin}>
          <Image
            src={`/local_images/imagestsc/${updatedImageUrl}`}
            height={500}
            width={500}
            alt={'member'}
            className={style.proimg}
          />
          <div className={style.imgOver}></div>
        </div>
        <div className={style.protxt}>{name}</div>
        <div className={style.protxt}>{position}</div>
      </div>
    </div>
  );
};

export default Card;