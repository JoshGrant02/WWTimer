import './App.css';
import React from 'react';

function App() {
  const [currentDay, setCurrentDay] = React.useState(0);
  const [isDaytime, setIsDaytime] = React.useState(false);
  const [discussionTimer, setDiscussionTimer] = React.useState(60);


  const dayOrNightString = isDaytime ? "Day" : "Night"
  const dayOrNightOppositeString = isDaytime ? "Night" : "Day"

  const restartGame = () => {
    setCurrentDay(0);
    setIsDaytime(false);
  }

  const transitionDayNight = () => {
    if (isDaytime) {
      setDiscussionTimer(60);
    } else {
      setCurrentDay(currentDay + 1);
    }
    setIsDaytime(!isDaytime)
  }

  return (
    <div className="App">
      <h3>Welcome</h3>
      <div>
        <button onClick={restartGame}>{"Restart Game"}</button>
        <button onClick={transitionDayNight}>{"Move To " + dayOrNightOppositeString}</button>
        <label>{"It is " + dayOrNightString + "time of day #" + currentDay}</label>
      </div>
      {isDaytime &&
        <div>
          <button onClick={() => setDiscussionTimer(discussionTimer-1)}>{"Begin discussion timer"}</button>
          <label>{"There are " + discussionTimer + " seconds left"}</label>
        </div>
      }
    </div>
  );
}

export default App;
