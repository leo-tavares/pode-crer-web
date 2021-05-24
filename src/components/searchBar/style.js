import styled from "styled-components";
import { Form } from "@unform/web";
import Input from "../input/index";

export const InputForm = styled(Form)`
  margin-top: 1.25rem;
  display: flex;
`;
export const InputField = styled(Input)`
  width: 8rem;
`;
export const SearchBtn = styled.button`
  width: 50px;
  height: 50px;
  border: 2px solid;
  border-radius: 0 10px 10px 0;
  border-left: 0;
  margin-left: -6px;
  background:#01bf71;
`;
