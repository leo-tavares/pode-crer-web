import { useState } from "react";
import { InputForm, InputField, SearchBtn } from "./style";
import { FaSearch } from "react-icons/fa";
export function SearchBar() {
  const [dataInput, setDataInput] = useState("");
  console.log(dataInput);

  return (
    <InputForm
      onSubmit={(data) => {
        console.log(data);
      }}
    >
      <InputField name={"search"} placeholder="Search" />
      <SearchBtn type="submit">
        <FaSearch />
      </SearchBtn>
    </InputForm>
  );
}

export default SearchBar;
