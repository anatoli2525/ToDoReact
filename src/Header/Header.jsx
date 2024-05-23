import { useState } from "react";
const Header = ({ text, handleOnSearch }) => {
  const [search, setSearch] = useState('')

  const handleOnChange = (e) => {
    setSearch(e.target.value)
    handleOnSearch(e.target.value)
  }

  return (
    <div className="header">
      <h1>{text}</h1>
      <input
        type="text"
        placeholder="Filter todos"
        className="add-todo-input search-input"
        value={search}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Header;









