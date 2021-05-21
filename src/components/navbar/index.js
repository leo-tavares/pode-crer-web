import React from "react";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./style";
import { useHistory } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const history = useHistory();
  const navigateTo = (path) => () => {
    history.push(path);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">podecrer</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks onClick={navigateTo("/login")}>Entrar</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks onClick={navigateTo("/sign_up")}>Cadastrar</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="dreams">Sonhos</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/dream">Criar sonho</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
