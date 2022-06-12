import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }
    @media screen and (max-width: 425px) {
        height: 1300px;
    }
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 5rem;

    @media screen and (max-width: 425px) {
        font-size: 2rem;
    }
`
export const ServicesCards = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 1rem;
    padding: 0 1.25rem;

    
    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 1.25rem;
    }
`
export const ServicesCard = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.625rem;
    max-height: 340px;
    padding: 1.875rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.02);
        cursor: pointer;
    }
`
export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 0.625rem;
`
export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 0.625rem;
`
export const ServicesP = styled.p`
 font-size: 1rem;
 text-align: center;
`