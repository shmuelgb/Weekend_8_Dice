import React from "react";
import "./Dice.css";

export default function Dice(props) {
  const dices = {
    1: "./images/dice-1.png",
    2: "./images/dice-2.png",
    3: "./images/dice-3.png",
    4: "./images/dice-4.png",
    5: "./images/dice-5.png",
    6: "./images/dice-6.png",
  };
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
