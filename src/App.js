import './App.css';
import React from 'react';

function App() {
  const [currentDay, setCurrentDay] = React.useState(0);
  const [isDaytime, setIsDaytime] = React.useState(false);
  const dayOrNightString = isDaytime ? "Day" : "Night"
  const dayOrNightOppositeString = isDaytime ? "Night" : "Day"

  const restartGame = () => {
    setCurrentDay(0);
    setIsDaytime(false);
  }

  const transitionDay = () => {
    if (!isDaytime) {
      setCurrentDay(currentDay + 1);
    }
    setIsDaytime(!isDaytime)
  }

  return (
    <div className="App">
      <h3>Welcome</h3>
      <button onClick={restartGame}>{"Restart Game"}</button>

      <button onClick={transitionDay}>{"Move To " + dayOrNightOppositeString}</button>

      <label>{"It is " + dayOrNightString + "time of day #" + currentDay}</label>
      

    </div>
  );
}

export default App;
