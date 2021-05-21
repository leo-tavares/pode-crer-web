import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../styles/COLORS";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  h1 {
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 8px;
  }
`;

export const Link = styled(NavLink)`
  margin-left: 2px;
  text-decoration: none;
  font-weight: bold;
  color: ${shade(0.4, COLORS.BTN_PRIMARY)};
`;

export const NavigatoToHome = styled(NavLink)`
  margin-top: 8px;
  text-decoration: none;
  color: black;

  &:hover {
    color: ${shade(0.4, COLORS.BTN_PRIMARY)};
  }
`;
