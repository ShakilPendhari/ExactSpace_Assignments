import React from 'react'
import style from "./Card.module.css"

const Skeleton = () => {
  return (
    <div className={style.cardWrapper}>
        <div className={style.card}>
        <div className={style.img}></div>
        <div className={style.head}></div>
        <div className={style.thumsUp}></div>
    </div>
    </div>
  )
}

export default Skeleton