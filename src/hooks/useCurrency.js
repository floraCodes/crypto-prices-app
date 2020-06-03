import React, { useState } from "react";

//A hook is just a function

const useCurrency = (label, initialState, options) => {
  const [state, setState] = useState(initialState);

  const Select = () => (
    <>
      <label>{label}</label>
      <select>
        <option value="">-Select-</option>
        {options.map((option) => {
          return (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          );
        })}
      </select>
    </>
  );

  return [state, Select, setState];
};

export default useCurrency;
