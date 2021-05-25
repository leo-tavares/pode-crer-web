import styled from "styled-components";
import { NavLink } from 'react-router-dom'
import { shade } from "polished";
import { COLORS } from "../../styles/COLORS";

export const ImgLeft = styled.img``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    margin-bottom: 24px;
  }
  //icones
  svg {
      margin-right: 16px;
    }
`;

export const SignUpLink = styled(NavLink)`
  margin-top: 8px;
`
export const ForgotPasswordLink = styled(NavLink)`
  display: inline-block;
  width: 100%;
  text-align: right;

  margin: 8px 0;

  &::first-letter{
    text-transform: uppercase;
  }

  text-decoration: none;
  color: ${shade(0.4, COLORS.BTN_PRIMARY)};
`
