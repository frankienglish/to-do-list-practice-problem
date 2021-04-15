import React, { useState } from "react";
import ToDoItem from "./ToDoListItem";

function App() {
  // create a useState for the input and a method to update it
  const [inputText, setInputText] = useState("");
  // create a useState to handle updating the list every time you add an item
  const [items, setItems] = useState([]);

  // every time the text is changed update it on the input line
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  // when an item is added with the add button, return all the previous items with the new one added
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <ToDoItem text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
