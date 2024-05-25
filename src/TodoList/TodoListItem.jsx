
import { useState } from 'react';

const TodoListItem = ({ id, item, handleDelete, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewText] = useState(item);

  const handleSave = () => {
    handleEdit(id, newItem);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span className="item-text">{item}</span>
      )}

      <span className="item-buttons">
        {isEditing ? (
          <button className="item-button edit-button" onClick={handleSave}>Save</button>
        ) : (
          <button className="item-button edit-button" onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button className="item-button" onClick={() => handleDelete(id)}>Delete</button>
      </span>
    </li>
  );
};

export default TodoListItem;
