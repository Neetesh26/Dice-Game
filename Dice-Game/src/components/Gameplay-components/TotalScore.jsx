import './Totalscore.css'

function TotalScore({Score}) {
    return ( 
        <div className="box">
           <h1>{Score}</h1>
           <h2>total Score</h2>
        </div>
     );
}

export default TotalScore;