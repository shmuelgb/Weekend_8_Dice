import React from "react";
import "./Dice.css";

export default function Dice(props) {
  const createDice = () => {
    return (
      <div className="dice-container">
        <figure className={`dice-${props.dice[0]}`}></figure>
        <figure className={`dice-${props.dice[1]}`}></figure>
      </div>
    );
  };

  return <div>{createDice()}</div>;
}
