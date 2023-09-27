import React,{useState,useEffect} from "react";
import { CiSearch } from "react-icons/ci";
function App() {
  const [uiprops,setuiprops] = useState({
    bg:"rebeccapurple",
    shadow:"",
    transitions : "all 0.3s ease",
    opacity:0,
    borderBottomColor: "#fff",
    showSearchIcon: true,
  })

  useEffect(()=>{
    body.background = uiprops.bg;
    body.boxShadow = uiprops.shadow;
    body.transitions = uiprops.transitions;
  },[uiprops.shadow]);

  const showIcon = () => {
    setuiprops({
      opacity:1,
      showSearchIcon:false,
    });
  };

  const handleSearchFocus = () => {
    setuiprops({
      borderBottomColor:"darkgreen",
      shadow : "inset 0 -60vh 200px rgba(0,0,0,0.8)",
    });
  };

  const body = document.body.style;

  const handleBlur = (e) =>{
    setuiprops({
      shadow:"none",
      opacity:0,
      borderBottomColor:"#fff",
      showSearchIcon:true,
    })
  };

  let inputStyles = {
    margin: "10vh 25vw",
    width: "25vh",
    height: "30px",
    padding: "1rem",
    border: "none",
    outline: "none",
    background: "transparent",
    borderBottom : `1px solid ${uiprops.borderBottomColor}`,
    fontSize : "1.3rem",
    color: "#eee",
    boxShadow: "0px 55px 60px -15px rgba(0,0,0,0.7)",
    opacity: `${uiprops.opacity}`,
    transitions: "all 0.3s ease" 
  };
  
  let iconsStyle = {
    color : `#fff`,
    fontSize: 50,
    cursor: "pointer",
    position : "absolute",
    top: 20,
    right : 20,
  };

  return (
    <div className="container" style = {{height:"100vh"}}>
      <input type="text" placeholder="search" style={inputStyles} onFocus={handleSearchFocus} onBlur={handleBlur}/>
      {uiprops.showSearchIcon ? (
      <CiSearch style={iconsStyle} onClick={showIcon}/>
      ) : null}
    </div>
  );
}

export default App;
