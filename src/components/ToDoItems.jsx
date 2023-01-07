import React, { useState } from "react";

function ToDoItems(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick(){
     setIsDone((prevItem) => {
       return !prevItem;
     })
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none"}}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItems;
