import React from 'react'
import { useAuth } from '../../hooks/auth';
import Logged from '../logged';
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './style'

const Sidebar = ({ isOpen, toggle }) => {
    const { user } = useAuth();
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {!user &&
                    <SidebarLink to='/signin' onClick={toggle}>
                        Sign In
                    </SidebarLink>
                    }
                    {!user &&
                    <SidebarLink to='getstarted' onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                    }
                    <SidebarLink to='dreams' onClick={toggle}>
                        Sonhos
                    </SidebarLink>
                    <Logged />
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
