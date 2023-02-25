import React from "react";
import "./button.scss";

function Button({ label, variant, clickHandler }) {
  return (
    <button
      className={`button ${
        variant === "secondary" ? "button_secondary" : "button_primary"
      }`}
      onClick={clickHandler}
    >
      <p>{label?.toUpperCase()}</p>
    </button>
  );
}

export default Button;
