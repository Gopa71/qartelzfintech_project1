// NumberInput.js
import React from 'react';

function NumberInput({ value, onChange }) {
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    onChange(newValue);
  };

  return (
    <input
      type="number"
      className="border rounded-md px-3 py-2"
      value={value}
      onChange={handleChange}
    />
  );
}

export default NumberInput;
