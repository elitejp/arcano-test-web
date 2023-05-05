import React, { useState } from "react";
import { SearchStyledContainer } from "./style";
import { IProps } from "./types";

const SearchButton: React.FC<IProps> = ({ searchFunction }: IProps) => {
  const [value, setValue] = useState("1");

  return (
    <SearchStyledContainer>
      <h2>User ID</h2>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        onClick={() => {
          searchFunction(value);
        }}
      >
        Buscar
      </button>
    </SearchStyledContainer>
  );
};

export default SearchButton;
