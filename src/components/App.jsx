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

  // filter through the list and render it as long as the id isnt the one we are deleting
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  // for keys use a package like uuid to generate keys, not the index
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
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
