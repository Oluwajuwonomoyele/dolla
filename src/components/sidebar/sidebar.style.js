import styled from 'styled-components';
import { FaTimes} from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';


export const SidebarContainer = styled.aside`
    position: fixed;
    top: ${({ isOpen}) => ( isOpen ? '0%' : "-100%")};
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
    background-color: #0d0d0d;
    align-items: center;
    transition: all 0.3s ease-out;
    opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0%') };

`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarNav = styled.div`
    color: #fff;
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    justify-items: center;
    align-items: center;


    @media screen and (max-width: 425px) {
        grid-template-rows: repeat(6, 60px);   
    }

`
export const SidebarLink = styled(LinkS)`
    text-decoration: none;
    list-style: none;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    color: #fff;

    &:hover {
        color:  #01bf71;
    }
`

export const SignIn = styled(LinkR)`
    border-radius: 3.125rem;
    background-color: #01bf71;
    padding: 1rem 4rem;
    color: #010606;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        background-color: #fff;
        color: #010606;
    }
` 