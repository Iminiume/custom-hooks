import React from "react";
import "./style.css";
function Button({ onClick, children, disabled, type, ...rest }) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className="styledButton"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
