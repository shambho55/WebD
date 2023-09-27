function App() {
  const handleClickButton = (e) =>{
      const getbg = document.querySelector("body");
      getbg.style.background = getRandomBg();
      e.target.style.background = getRandomBg();
  }

  function getRandomBg(){
    let hex = "0123456789ABCDEF";
    let num = '#';
    for(let i = 0;i < 6;i++){
      num += hex[Math.floor(Math.random()*16)];
    }
    return num;

  }

  return (
    <>
    <div className = "container">
        <h1>Random Background Color Changer</h1>
        <button className="btn" onClick={handleClickButton}>Change Bg Color</button>

    </div>
    </>
  );
}

export default App;
