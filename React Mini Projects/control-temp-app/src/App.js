import React,{useState} from 'react';

function App() {
  const [temp,setTemp] = useState(0);
  const handleIncre = () => {
    setTemp(temp + 1);
  }
  const handleDecre = () =>{
    setTemp(temp - 1);
  }
  return (
    <>
      <div className="container">
        <div className="card p-2 bg-light" style={{ width: '11rem' }}>
          <h1 className={`card text-light ${temp > 0 ? 'bg-danger' : 'bg-info'}`} style={{ height: '150px', width: '150px', border: "2px solid black" }}>
            {temp} °C
            </h1>
          <div className="d-flex">
            <button className="btn btn-dark btn-lg m-2" onClick={handleDecre}>-</button>
            <button className="btn btn-dark btn-lg m-2" onClick={handleIncre}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
