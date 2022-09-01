import "./App.css";
import { useState } from "react";
function App() {
  const [newTaskName, setNewtaskName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("tasks", newTaskName);
    setNewtaskName;
  };
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={newTaskName}
          placeholder='Enter a new task'
          onChange={(e) => setNewtaskName(e.target.value)}
        />
        <button onClick={() => alert(newTaskName)}>Save task</button>
      </form>
    </div>
  );
}

export default App;
