
import "./Card.css";

function Card({currentnumber,roll ,reset,RuleHandler}) {

  

  return (
    <div className="main-section">
      <div className="img-sec" onClick={roll}>
        <img src={`/public/images/dice/dice_${currentnumber}.png`} alt="" />
      </div>
      <h2>click on dice to roll</h2>
      <button onClick={reset}>Reset Score</button>
      <button onClick={RuleHandler}>Show Rule</button>
    </div>
  );
}

export default Card;
