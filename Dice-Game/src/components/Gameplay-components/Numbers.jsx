import { useState } from "react";
import "./Numbers.css";

function Numbers({ seterror, error, selectednum, setselectednum }) {
  const arr = [1, 2, 3, 4, 5, 6];
  // console.log(selectednum);
  const errorhandler = (val) => {
    setselectednum(val);
    seterror("");
  };

  return (
    <div className="main-box">
      <p id="err">{error}</p>
      {arr.map((val, idx) => (
        <div
          style={{
            background: val == selectednum ? "black" : "",
            color: val == selectednum ? "white" : "",
          }}
          onClick={() => errorhandler(val)}
          className="box-count"
          key={idx}
        >
          {val}
        </div>
      ))}
      <p>select number</p>
    </div>
  );
}

export default Numbers;
