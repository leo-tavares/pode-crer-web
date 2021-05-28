import React from "react";
import { FaBars } from "react-icons/fa";
import SearchBar from "../searchBar/index";

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
import Logged from "../logged";
import { useAuth } from "../../hooks/auth";

const Navbar = ({ toggle }) => {
  const history = useHistory();
  const navigateTo = (path) => () => {
    history.push(path);
  };

  const { user } = useAuth();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">podecrer</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {!user ? (
            <NavItem>
              <NavLinks onClick={navigateTo("/login")}>Entrar</NavLinks>
            </NavItem>
          ) : null}
          {!user && (
            <NavItem>
              <NavLinks onClick={navigateTo("/signUp")}>Cadastrar</NavLinks>
            </NavItem>
          )}
          <NavItem>
            <NavLinks to="dreams">Sonhos</NavLinks>
          </NavItem>
          <NavItem>
            <SearchBar />
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/createDream">Criar sonho</NavBtnLink>
        </NavBtn>
        <Logged />
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
