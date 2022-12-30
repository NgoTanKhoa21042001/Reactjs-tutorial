import React from "react";
import "./App.css";
const Header = () => {
  const handleChangeName = () => {
    const names = ["Khoa", "Hà", "Nguyên"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <header>
      <h1>Groceries List</h1>
    </header>
  );
};

export default Header;
