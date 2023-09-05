import React, { useState } from "react";
import style from "./Card.module.css";

const Card = ({ data,index }) => {
  const [likes, setLikes] = useState(0);

  return (
    <div className={style.cardWrapper} id={index===0?"topElement":""}>
      <div className={style.card}>
        <img className={style.img} src={data.download_url} alt={data.author} />
        <div className={style.head}>{data.author}</div>
      </div>
      <div className={style.thumsUpDiv}>
          <div className={style.count}>
            <p style={{ flex: 1 }}>{likes}</p>
          </div>
          <div className={style.thumbsupWrap}>
            <i
              onClick={() => setLikes(likes + 1)}
              className={`fa-solid fa-thumbs-up ${style.thumbsup}`}
            ></i>
          </div>
        </div>
    </div>
  );
};

export default Card;
