import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        background: linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.6)), linear-gradient(180deg, rgba(0,0,0,0.2), transparent);
        z-index: 2;
    }
`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;
    background: #232a34;
`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    margin: 0 auto;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 425px) {
        margin-top: -100px;
    }
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px ;
    }
    @media screen and (max-width: 425px) {
        font-size: 32px ;
    }
`
export const HeroP = styled.p`
    margin-top: 1.5rem;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    max-width: 600px;
    margin-bottom: 2.5rem;
    
    @media screen and (max-width: 768px) {
        font-size: 1.375rem;
    }
    @media screen and (max-width: 425px) {
        font-size: 1.125rem;
    }
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 0.5rem;
    font-size: 1.25rem;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 0.8rem;
    font-size: 1.25rem;
`
