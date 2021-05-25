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
  h1::first-letter{
    text-transform: uppercase;
  }
  //icones
  svg {
      margin-right: 16px;
    }
`;

export const SignInLink = styled(NavLink)`
  margin-top: 8px;
  text-decoration: none;
  color: ${shade(0.4,COLORS.BTN_PRIMARY)};

  strong {
  color: ${shade(0.5,COLORS.BTN_PRIMARY)};
    text-transform: uppercase;
  }
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
export const NavigatoToHome = styled(NavLink)`
  margin-top: 8px;
  text-decoration: none;
  color: black;

  font-size: small;

  &:hover {
    color: ${shade(0.4, COLORS.BTN_PRIMARY)};
  }
`;
