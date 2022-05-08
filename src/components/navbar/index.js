import React, { useState, useEffect } from "react";
import { FaBars} from 'react-icons/fa'
import { Header, HeaderContainer, Logo, MenuBtn, NavUl, NavLink, SignIn } from "./navbar.style";
import { animateScroll as scroll } from "react-scroll/modules";

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNavBg = () => {
        if(window.scrollY >= 70){
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    const scrollHome = () => {
        scroll.scrollToTop()
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg)
    }, [])

    return (  
        <Header scrollNav={scrollNav}>
            <HeaderContainer>
                <Logo to='/' onClick={scrollHome}>
                    dolla
                </Logo>
                <MenuBtn onClick={ toggle }>
                    <FaBars />
                </MenuBtn>
                <NavUl>
                    <NavLink to='about' smooth={true} spy={true} duration={500} exact='true' offset={-80}>About</NavLink>
                    <NavLink to='discover' smooth={true} spy={true} duration={500} exact='true' offset={-80}>Discover</NavLink>
                    <NavLink to='services' smooth={true} spy={true} duration={500} exact='true' offset={-80}>Services</NavLink>
                    <NavLink to='signup' smooth={true} spy={true} duration={500} exact='true' offset={-80}>Sign Up</NavLink>
                </NavUl>
                <SignIn to='/signin'>Sign In</SignIn>
            </HeaderContainer>
        </Header>
    );
}
 
export default Navbar;