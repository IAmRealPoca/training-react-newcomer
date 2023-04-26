import React, { useCallback, useState } from "react";
import "./App.css";
import { Button, Container } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import MyTextField from "./Components/MyTextField";
import MyToDoItem from "./Components/MyToDoItem";
import useStore from "./zustand/store";

function App() {
  // Hook - `useState`

  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  }

  const handleEditValueChange = (e) => {
    setUpdatedText(e.target.value);
  }

  const handleOnClickEditModeButton = (id, value) => {
    setShowEdit(id);
    setUpdatedText(value);
  }

  const handleOnClickDeleteButton = (id) => {
    deleteItem(id);
  }

  const handleOnClickDetailsButton = () => {
    // do later
  }

  const handleOnClickEditButton = (id) => {
    editItem(id, updatedText);
  }

  function addItem() {
    if (!value) return;

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: value,
    };

    setItems((oldList) => [...oldList, item]);

    setValue("");
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


  const countStore = useStore(state => state.count);
  const increment = useStore(state => state.increment);
  const decrement = useStore(state => state.decrement);

  const [inputCount, setInputCount] = useState(1);
  const handleChangeCount = useCallback((e) => {
    setInputCount(parseInt(e.target.value));
  }, []);

  const handleIncreaseCount = () => {
    increment(inputCount);
  };

  const handleDecreaseCount = () => {
    decrement(inputCount);
  };

  return (
    <div className="app">

      <h1>Counter</h1>
      <p>Count: {countStore}</p>
      <input type="number" value={inputCount} onChange={handleChangeCount}></input>
      <button onClick={handleIncreaseCount}>Increase</button>
      <button onClick={handleDecreaseCount}>Increase</button>

      <br/>

      <h1>'- "Todo-list" project using React (use Javascript)</h1>

      {/* <TextField value={newItem}
        id="outlined-basic"
        label="Title"
        variant="outlined"
        size="small"
        onChange={(e) => setNewItem(e.target.value)}
      /> */}
      <MyTextField value={value} handleChange={handleValueChange} />

      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<AddIcon />}
        disableElevation onClick={() => addItem()}>
        Add
      </Button>
      <Container maxWidth="xs">
        <ul>
          {items.map((item) => {
            return (
              <MyToDoItem
                id={item.id}
                value={item.value}
                showEditMode={showEdit}
                handleOnClickEditModeButton={() => handleOnClickEditModeButton(item.id, item.value)}
                handleOnClickDeleteButton={() => handleOnClickDeleteButton(item.id)}
                handleOnClickDetailsButton={() => handleOnClickDetailsButton}
                updatedText={updatedText}
                handleEditValueChange={() => handleEditValueChange}
                handleOnClickEditButton={() => handleOnClickEditButton(item.id)}
              />
            );
          })}
        </ul>
      </Container>

    </div>
  );
}

export default App;