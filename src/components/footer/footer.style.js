import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const FooterSection = styled.footer`
    background-color: #101522;
`
export const FooterContainer = styled.div`
    padding: 3rem 1.5rem;
    display: flex;
    justify-content: center;
    gap: 8rem;
    max-width: 1200px;
    margin: 0 auto;

    @media screen and (max-width: 425px) {
        align-items: flex-start;
        gap: 5rem;
    }
`
export const FooterCol = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 8rem;

    @media screen and (max-width: 425px) {
        flex-direction: column;
        align-items: center;
        gap: 5rem;
    }
`
export const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #fff;
`
export const FooterLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    margin-bottom: 0.5rem;
    font-size: 0.938rem;
    transition: all 0.3s ease;

    &:hover {
        color: #01bf71;
    }
`
export const FooterLinkTitle = styled.h1`
    font-size: 0.875rem;
    margin-bottom: 0.938rem;
`
export const Social = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 2.5rem 1.875rem;
`
export const SocialContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 425px){
        flex-direction: column;
        gap: 2rem;
    }
`
export const SocialLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
`
export const Copyrights = styled.div`
    color: #fff;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`
export const Icon = styled.a`
    color: #fff;
    font-size: 1.5rem;
`