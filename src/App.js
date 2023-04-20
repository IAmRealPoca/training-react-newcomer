import React, { useState } from "react";
import "./App.css";

function App() {
  // Hook - `useState`
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");

  function addItem() {
    if (!newItem) {
      alert("Press enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function editItem(id, newText) {

    const newList = items.map((e) => {
      if (e.id === id) {
        return { ...e, value: newText }
      }
      return e;
    })

    setItems(newList);
    setUpdatedText("");
    setShowEdit(-1);
  }

  return (
    <div className="app">
      <h1>'- "Todo-list" project using React (use Javascript)</h1>

      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button className="button" onClick={() => addItem()}>&#43;</button>

      <ul>
        {items.map((item) => {
          return (
            <div>
              <li key={item.id} >
                {item.value}

                <button className="button" onClick={() => {
                  setShowEdit(item.id);
                  setUpdatedText(item.value)
                }}>
                  📝
                </button>

                <button
                  className="button"
                  onClick={() => deleteItem(item.id)}
                >
                  ❌
                </button>

                <button className="button">
                🔍
                </button>
              </li>

              {showEdit === item.id ? (
                <div>
                  <input
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                  <button onClick={() => editItem(item.id, updatedText)}>
                  ✔️
                  </button>
                </div>
              ) : null}

              <hr></hr>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;