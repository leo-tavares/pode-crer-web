import { shade } from "polished";
import styled from "styled-components";
import { COLORS } from "../../styles/COLORS";

export const Container = styled.button`
  height: 56px;
  border-radius: 8px;
  padding: 0 16px;
  margin-top: 16px;

  background-color: #01bf71;
  width: 100%;

  &:hover {
    background: ${shade(0.4, `${COLORS.BTN_PRIMARY}`)};
  }
`;
