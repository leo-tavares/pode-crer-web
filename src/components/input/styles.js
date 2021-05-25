import styled, { css } from "styled-components";
import { COLORS } from "../../styles/COLORS";
import Tooltip from "../Tooltip";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #232129;

  border-radius: 8px;
  width: 100%;
  padding: 16px;

  & + & {
    margin-top: 8px;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${COLORS.ERROR_DEFAULT};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    outline: 0;
  }
`;

export const ErrorTooltip = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: ${COLORS.ERROR_DEFAULT};
    color: #fff;

    &::before {
      border-color: ${COLORS.ERROR_DEFAULT} transparent;
    }
  }
`;
