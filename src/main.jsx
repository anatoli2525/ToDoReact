import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";

import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";

const App = () => {
  const headerText = 'To Do'
  const [todoItems, setToDoItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const handleDelete = (id) => {
    const updatedItems = todoItems.filter((todo) => todo.id !== id);
    setToDoItems(updatedItems);
    setFilteredItems(updatedItems); 
  };

 
  const handleEdit = (id, newItem) => {
    const updatedItems = todoItems.map((todo) =>
      todo.id === id ? { ...todo, item: newItem } : todo
    );
    setToDoItems(updatedItems);
    setFilteredItems(updatedItems);
  };

  const handleOnSearch = (searchText) => {
    const results = todoItems.filter(item => item.item.toLowerCase().includes(searchText));
    setFilteredItems(results);
  };

  const handleAddTask = (text) => {
    const newTask = {
      item: text,
      id: todoItems.length ? todoItems[todoItems.length - 1].id + 1 : 1
    };
    const updatedItems = [...todoItems, newTask];
    setToDoItems(updatedItems);
    setFilteredItems(updatedItems); 
  };

  return (
    <div className="app">
      <Header text={headerText} handleOnSearch={handleOnSearch} />
      <TodoList todoItems={filteredItems} handleDelete={handleDelete} handleEdit={handleEdit} />
      <AddTodo handleAddTask={handleAddTask} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);