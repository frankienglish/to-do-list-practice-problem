import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  // whatever the state is, when clicked set it to the opposite
  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  // keep the conditional inside of the style for handling these
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
      ;
    </div>
  );
}

export default ToDoItem;
