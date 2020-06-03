import React, { useState } from "react";

//A hook is just a function

const useCurrency = () => {
  const [state, setState] = useState("");

  const Select = () => (
    <>
      <label>Currency</label>
      <select>
        <option value="MXN">Mexican Peso</option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </>
  );

  return [state, Select, setState];
};

export default useCurrency;
