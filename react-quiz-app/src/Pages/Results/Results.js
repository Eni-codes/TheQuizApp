import React from 'react';
import Scoreboard from "./Pages/Quiz/Scoreboard"
import { Component } from "react";
class  Results extends Components {
  render (){
    return <div>
      Game Over !!
      <Scoreboard
      points={p.points}
      lives={p.lives}
      skips={p.skipsLeft}
      streak={p.streak}
  />
      />
        </div>
}
}
export default Results