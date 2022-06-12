import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';


export const Header = styled.header`
    background: ${({ scrollNav }) => scrollNav ? '#000' : 'transparent'};
    margin-top: -5rem;
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: all 0.3s ease-in-out;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.25rem;
`

export const Logo = styled(LinkR)`
    color: #fff;
    cursor: pointer;
    font-size: 1.5rem;
    align-items: center;
    display: flex;
    margin-left: 1.5rem;
    font-weight: bold;
    text-decoration: none;
`

export const MenuBtn = styled.div`
    display: none;
    cursor: pointer;
    font-size: 1.8rem;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
    }
`

export const NavUl = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    align-items: center;
    gap: 1rem;
    text-align: center;


    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavLink = styled(LinkS)`
    color: #fff;
    text-decoration: none;
    padding: 1rem;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
        border-radius: 1.25rem;
    }
`

export const SignIn = styled(LinkR)`
    border-radius: 3.125rem;
    background: #01bf71;
    padding: 0.625rem 1.375rem;
    font-size: 1rem;
    color: #010606;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #fff;
        color: #010606;
    }
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`