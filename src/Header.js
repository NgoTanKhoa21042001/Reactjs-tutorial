import React from "react";

const Header = () => {
  const handleChangeName = () => {
    const names = ["Khoa", "Hà", "Nguyên"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <div>
      <h1> Heelo: {handleChangeName()}</h1>
    </div>
  );
};

export default Header;
