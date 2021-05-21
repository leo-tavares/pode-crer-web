import React from 'react'
import { FaBars } from 'react-icons/fa'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './style'

const Navbar = ( { toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    podecrer
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                <NavItem>
                        <NavLinks to='/signin'>
                            Sign In
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='getstarted'>
                            Sign Up
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='dreams'>
                            Sonhos
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/dream'>
                        Criar sonho
                    </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
