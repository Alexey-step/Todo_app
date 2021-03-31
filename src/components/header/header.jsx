import React from "react";

import "./header.css"

const Header = ({onButtonClick}) => {

  return (
    <div className="header">
      <button
        className="header__button"
        type="button"
        onClick={() => onButtonClick(true)}
      >
        Add New Task
      </button>
    </div>
  )
}

export default Header;
