import React from "react";

const Select = ({ value, data }) => {
  return (
    <select value={value} className="input">
      <option value="">Please select:</option>
      {data.map((item, key) => (
        <option key={key} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
