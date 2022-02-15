import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"

import useFlip from "./hooks/useFlip";


function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, handleChange] = useFlip()
  
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={()=>handleChange()}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
