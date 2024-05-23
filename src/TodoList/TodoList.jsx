import TodoListItem from "./TodoListItem";

const TodoList = ({ todoItems, handleDelete, handleEdit }) => {
  const jsxArray = todoItems.map((obj) => (
    <TodoListItem
      item={obj.item}
      id={obj.id}
      key={obj.id}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  ));

  return <ul>{jsxArray}</ul>;
};

export default TodoList;
