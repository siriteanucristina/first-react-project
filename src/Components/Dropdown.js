import React from "react";
import "../Style/dropdown.css";

const Dropdown = ({ showDropdown, setShowDropdown, items }) => {
  return (
    <div class="dropdown-wrapper">
      <button onClick={setShowDropdown} className="trigger-button">
        Items
      </button>
      <ul className={showDropdown ? "active" : ""}>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
