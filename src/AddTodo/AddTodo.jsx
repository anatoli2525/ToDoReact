import { useState } from "react";

const AddTodo = ({handleAddTask}) => {
  const [todoText, setToDoText] = useState('') 

  const handleOnChange = (e) => {
    setToDoText(e.target.value)
  }

  const handleButtonClicked = () => {
    if(todoText) {
      handleAddTask(todoText)
      setToDoText('')
    }
  }

  return (
    <div className="add-todo-form">
      <input 
      type="text" 
      placeholder="Add Todo" 
      className="add-todo-input" 
      value={todoText}
      onChange={handleOnChange}
      />
      <button className="item-button edit-button" onClick={handleButtonClicked}>Add Task</button>
    </div>
  );
};

export default AddTodo;
