import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import {useFlip} from './Hooks.js'
/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [flip, setFlip] = useFlip();
  return (
    <img
      src={flip ? front : back}
      alt="playing card"
      onClick={setFlip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
