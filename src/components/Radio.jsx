import React from "react";

const Radio = ({ value, checked, name, onChange }) => {
  return (
    <div>
      <input
        readOnly
        type="radio"
        name={value}
        id={value}
        value={value}
        checked={checked === value}
        onChange={onChange}
      />
      <label htmlFor="">{name}</label>
    </div>
  );
};

export default Radio;
