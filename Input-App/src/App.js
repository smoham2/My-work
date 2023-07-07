import "./App.css"; // check out css
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputVal);
    setInputVal("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello! Welcome, {name}!</h1>
        <form>
          <input
            type="text"
            value={inputVal}
            placeholder="Enter your name here!"
            onChange={(e) => setInputVal(e.currentTarget.value)}
          />
          
          <button type="SUBMIT" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
