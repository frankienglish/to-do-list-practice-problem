import React from "react";

function ToDoItem(props) {
  // make sure to call onChecked like that so that it doesnt execute on render
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>;
    </div>
  );
}

export default ToDoItem;
