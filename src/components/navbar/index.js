import React, { useState } from "react";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import  SearchBar  from "../searchBar/index";

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
          <NavItem>
            <SearchBar />
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
