import React, { useState } from "react";
import "./Game.css";

export default function Game() {
  const [Curr, setCurr] = useState([]);
  const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const board = [];
  var flag = true;
  for (let i = verticalAxis.length - 1; i >= 0; i--) {
    flag = !flag;
    for (let j = 0; j < horizontalAxis.length; j++) {
      flag = !flag;
      board.push(
        <span
          className={flag ? "board-cell white-cell" : "board-cell black-cell"}
          onClick={() => {
            setCurr(`${horizontalAxis[j]}${verticalAxis[i]}`);
          }}
        >
          {horizontalAxis[j]} {verticalAxis[i]}
        </span>
      );
    }
  }

  return (
    <div>
      <div className="chess-board">{board}</div>
      <div className="current-cell">
        <h1>Square Clicked: {Curr}</h1>
      </div>
    </div>
  );
}
