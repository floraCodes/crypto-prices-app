import React, { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const SelectElem = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.1rem;
`;

const useCrypto = (label, initialState, options) => {
  const [state, setState] = useState(initialState);

  const SelectCrypto = () => (
    <>
      <Label>{label}</Label>
      <SelectElem onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">-Select-</option>
        {/* {options.map((option) => {
          return (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          );
        })} */}
      </SelectElem>
    </>
  );

  return [state, SelectCrypto, setState];
};

export default useCrypto;
