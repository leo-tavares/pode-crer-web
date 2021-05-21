import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './style'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/signin' onClick={toggle}>
                        Sign In
                    </SidebarLink>
                    <SidebarLink to='getstarted' onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                    <SidebarLink to='dreams' onClick={toggle}>
                        Sonhos
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>
                        Depoimentos
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/dream'>
                        Criar sonho
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
