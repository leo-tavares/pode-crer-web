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
import { useHistory, NavLink } from "react-router-dom";
import Logged from "../logged";
import { useAuth } from "../../hooks/auth";

const Navbar = ({ toggle, searchDream }) => {
  const history = useHistory();
  const navigateTo = (path) => () => {
    history.push(path);
  };

  const { user } = useAuth();
  console.log(user);
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
            <NavLinks onClick={navigateTo("/dreamsearch")}>Sonhos</NavLinks>
          </NavItem>
          <NavItem>
            <SearchBar />
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/createDream">Criar sonho</NavBtnLink>
        </NavBtn>
        {user && <Logged />}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
