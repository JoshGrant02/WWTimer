import './App.css';
import React from 'react';

function App() {
  const [currentDay, setCurrentDay] = React.useState(0);

  const addDay = () => {
    console.log("test");
    setCurrentDay(currentDay + 1);
  }

  return (
    <div className="App">
      <h3>Welcome</h3>
      <button onClick={addDay}>Add Day</button>
      <label>{currentDay}</label>
    </div>
  );
}

export default App;
