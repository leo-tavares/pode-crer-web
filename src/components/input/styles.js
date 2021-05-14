import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #232129;

  border-radius: 8px;
  width: 100%;
  padding: 16px;

  & + & {
    margin-top: 8px
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
  }
`;
