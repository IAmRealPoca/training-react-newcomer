import React, { useState } from "react";
import "./App.css";
import { Button, TextField } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';

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

      <TextField value={newItem}
        id="outlined-basic"
        label="Title"
        variant="outlined"
        size="small"
        onChange={(e) => setNewItem(e.target.value)}
      />
      
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<AddIcon />}
        disableElevation onClick={() => addItem()}>
        Add
      </Button>

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