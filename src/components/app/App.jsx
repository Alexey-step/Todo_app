import React, {useState} from "react";
import Header from "../header/header";
import TodoForm from "../todo-form/todo-form";

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Header onButtonClick={setIsOpen} />
      {
        isOpen && <TodoForm onButtonClick={setIsOpen}/>
      }
    </div>
  );
}

export default App;
