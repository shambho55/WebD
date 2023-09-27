import React,{useState} from "react";
import Slide from "./components/Slide";

function App() {
  const [sl,setsl] = useState(0);

  const handleInput = (e) => {
    setsl(e.target.value);
  }

  let bgColor;
  let textColor;

  if(sl < 25){
    bgColor = "purple";
    textColor = "lightgray"
  }
  if(sl > 25 && sl <= 50){
    bgColor = "darkgreen";
    textColor = "darkyellow"
  }
  if(sl > 50 && sl <= 75){
    bgColor = "aqua"
  }
  if(sl > 75 && sl <= 100) {
    bgColor = "brown";
    textColor = "lightpink"
  }
  return (
    <div className="container">
      <h1>Slide App</h1>
      <Slide sl = {sl} handleInput = {handleInput} bgColor={bgColor} textColor={textColor}/>
    </div>
  );
}

export default App;
