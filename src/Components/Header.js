import React from "react";
import './header.css'
const Header = () => {
  return (
    <div className="header">
      <span className="title">Word Hunt</span>
      <div className="inputs">
<TextField id="standard-basic" label="Standard" />
      </div>
    </div>
  );
};

export default Header;
