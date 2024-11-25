
import './StartGame.css'

function StartGame({Toggle}) {
    return ( 
        <div className="main">
            <div className="img-section">
                <img src="/public/images/dices.png" alt="" />
            </div>
            <div className="Title-sec">
                <h1>dice game</h1>
                <button onClick={Toggle}>play now</button>
                
            </div>
        </div>
     );
}

export default StartGame;