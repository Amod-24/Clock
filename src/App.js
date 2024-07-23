import { useState } from "react";
import "./App.css";
import AnalogClock from "./AnalogClock/Analog";
import DigitalClock from "./DigitalClock/Digital";
function App() {
  const [hours,setHours] = useState(new Date().getHours());
  const [minutes,setMinutes] = useState(new Date().getMinutes());
  const [seconds,setSeconds] = useState(new Date().getSeconds());
  const [clockStyle, setClockStyle] = useState("analog");
  setInterval(()=>{
    setHours(new Date().getHours());
    setMinutes(new Date().getMinutes());
    setSeconds(new Date().getSeconds());
  },1000)
  return (
    <div className="App">
      <nav className="clockOptions">
        <div className="analogButton" onClick={()=>{setClockStyle("analog")}}
        style={{
          borderBottom:clockStyle==="analog" ? "3vh solid black" : "none",
          color:clockStyle === "analog" ? "orange" : "white"
        }}
        >Analog Clock</div>
        <div className="digitalButton" onClick={()=>{setClockStyle("digital")}}
        style={{
          borderBottom:clockStyle==="digital" ? "3vh solid black" : "none",
          color:clockStyle === "digital" ? "orange" : "white"
        }}
        >Digital Clock</div>
      </nav>
      <div className="clocks">
        {clockStyle === "analog" && <AnalogClock hours={hours%12} minutes={minutes} seconds={seconds}/>}
        {clockStyle === "digital" && <DigitalClock hours={hours%12} minutes={minutes} seconds={seconds}/>}

      </div>
    </div>
  );
}

export default App;
