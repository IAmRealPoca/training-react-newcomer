import React, {useState} from 'react'

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const [editInput, setEditInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random() * 10,
      todo: todo
    }

    setList([...list, newTodo])

    setInput("");
  }

  const changeTodo = (id, todo) => {
    const newList = list.map(e => {
      if (e.id === id) {
        return {...e, todo: todo};
      }
      return e;
    });

    setList(newList);
  }

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key = {todo.id}>
            <input type="text" defaultValue={todo.todo} onChange={(e) => setEditInput(e.target.value)}/>
            <button onClick={() => changeTodo(todo.id, editInput)}>Change</button>
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App