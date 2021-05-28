import { useCallback, useEffect, useRef, useState } from "react";
import { InputForm, InputField, SearchBtn } from "./style";
import { FaSearch } from "react-icons/fa";
import { useDream } from "../../hooks/dream";
import getValidationErros from "../../helper/getValidationErros";
import { useHistory } from "react-router";

export function SearchBar() {
  const formRef = useRef(null);
  const history = useHistory();
  const { searchSpecifcDreams } = useDream();
  const handleSubmit = useCallback(
    async ({ search }) => {
      history.push('/dreamSearch')
      try {
        if (!search || /^\s*$/.test(search)) {
          alert("O campo de busca não pode ser vazio ou em branco");
        }
        await searchSpecifcDreams(search);
      } catch (error) {
        const erros = getValidationErros(error);
        formRef.current?.search(erros);
      }
    },
    [history, searchSpecifcDreams]
  );
  return (
    <InputForm onSubmit={handleSubmit}>
      <InputField name={"search"} placeholder="Search" />
      <SearchBtn type="submit">
        <FaSearch />
      </SearchBtn>
    </InputForm>
  );
}

export default SearchBar;
