import { useState } from "react";
import ToDoList from "./ToDoList";


function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
