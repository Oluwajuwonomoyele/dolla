import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarNav, SidebarMenu, SidebarLink, SignIn } from "./sidebar.style";

const Sidebar = ({ isOpen, toggle}) => {
    return ( 
        <SidebarContainer isOpen={ isOpen } onClick={ toggle }> 
            <Icon onClick={ toggle }>
                <CloseIcon />
            </Icon>
            <SidebarNav>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={ toggle }>
                        About
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={ toggle }>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services' onClick={ toggle }>
                        Services
                    </SidebarLink>
                    <SidebarLink to='signup' onClick={ toggle }>
                        Sign Up
                    </SidebarLink>    
                </SidebarMenu>

                <SignIn to='/signin'>Sign In</SignIn>
            </SidebarNav>
        </SidebarContainer>
     );
}
 
export default Sidebar;