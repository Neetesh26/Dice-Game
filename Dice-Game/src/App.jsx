import { useState } from "react";
import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";

function App() {
  const[Isselected ,setIsselected] = useState(false)

  const Toggle = () =>{
    setIsselected((prev) => !prev)
  }
  return ( 
    <>
    {Isselected ? <GamePlay /> :<StartGame Toggle={Toggle}/>}
      
      
      
    </>
   );
}

export default App;