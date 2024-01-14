import React from 'react'
import Card from "@/components/EventCard";
import style from './compstyles/events.module.css'

const Events = () => {
  return (
    <div className={style.parentCard}>
      <p className={style.heading}>Events</p>
      <div className={style.wrapper}>
        <Card text={"Robotics"} prize={"2000"} />
        <Card text={"Squid Game"} prize={"2000"} />
        <Card text={"Treasure Hunt"} prize={"2000"} />
        <Card text={"Example"} prize={"2000"} />
        <Card text={"Example"} prize={"2000"} />
        <Card text={"Example"} prize={"2000"} />
      </div>
    </div>
  )
}

export default Events