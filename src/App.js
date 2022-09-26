import './App.css';
import React from 'react';

function App() {
  const [currentTimerValue, setCurrentTimerValue] = React.useState(60);
  const [discussionTimer, setDiscussiontimer] = React.useState();

  return (
    <div className="App">
      <h3>Welcome</h3>
      <button>Begin Timer</button>
      <label>{currentTimerValue}</label>
    </div>
  );
}

export default App;
