import { useState } from "react";
import Card from "./Gameplay-components/Card";
import Numbers from "./Gameplay-components/Numbers";
import TotalScore from "./Gameplay-components/TotalScore";
import "./GamePlay.css";
import Showrules from "./Gameplay-components/Showrules";

function GamePlay() {
  const [Score, setscore] = useState(0);
  const [selectednum, setselectednum] = useState();

  const [currentnumber, setcurrentnumber] = useState(1);

  const [error, seterror] = useState("");
  const [rules, setrules] = useState(false);
  const RuleHandler  =() =>{
    setrules((prev) => !prev)
  }


  const randomgen = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roll = () => {
    if (!selectednum) {
      seterror("you have not selected any number");
      return;
    }

    const randomNumber = randomgen(1, 7);
    setcurrentnumber((prev) => randomNumber);
    //  console.log(randomNumber);

    if (selectednum == randomNumber) {
      setscore((prev) => prev + randomNumber);
    } else {
      setscore((prev) => prev - 2);
    }
    setselectednum("");
  };

  const reset = () => {
    setscore(0);
  };
  return (
    <div className="container">
      <div className="header">
        <TotalScore Score={Score} />
        <Numbers
          seterror={seterror}
          error={error}
          selectednum={selectednum}
          setselectednum={setselectednum}
        />
      </div>
      <Card currentnumber={currentnumber} roll={roll} reset={reset} RuleHandler={RuleHandler} />
      {rules ? <Showrules /> :''}
    </div>
  );
}

export default GamePlay;
