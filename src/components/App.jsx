import React, { useState } from "react";
import ToDoItems from "./ToDoItems";

function App() {
  const [inputText, setinputText] = useState("");
  const [item, setitems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setinputText(newValue);
  }

  function handleClick() {
    setitems((prevItems) => {
      return (
        [...prevItems, inputText]
      );
    })
    setinputText(" ");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((toDoItems)=>{
            return (
              <ToDoItems text={toDoItems} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
