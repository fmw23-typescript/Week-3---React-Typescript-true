import "./App.css";

import { ChangeEvent, useState } from "react";

import { Button } from "./components";

function App() {
  const [clicked, setClicked] = useState<number>(0);
  const [todoText, setTodoText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  function handleClick() {
    const newTodos = [...todos, todoText];
    setTodos(newTodos);
    setTodoText("");
  }

  return (
    <main>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input
        type="text"
        value={todoText}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setTodoText(e.target.value);
        }}
      />
      <Button onClick={() => handleClick()}>Add Todo</Button>
    </main>
  );
}

export default App;
