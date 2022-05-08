import styled from 'styled-components';

export const InfoSection = styled.div`
    color: #fff;
    background-color: ${({lightBg}) => lightBg ? '#f9f9f9' : '#010606'};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    height: 860px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Row = styled.div`
    display: flex;
    flex-direction: ${({imgStart}) => imgStart ? 'row-reverse' : 'row'};
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
   
    @media screen and (max-width: 425px){
        flex-direction: ${({imgStart}) => imgStart ? 'column-reverse' : 'column'};
    }
`
export const Col1 = styled.div`
    margin-bottom: 15px;
    flex-basis: 50%;
`
export const TextWrapper = styled.div`
    padding-top: 0;
`

export const Col2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    flex-basis: 50%;
`

export const Lead = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => lightText ? '#f7f8fa' : '#010606'};

    @media screen and (max-width: 425) {
        font-size: 32px;
    }
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    color: ${({darkText}) => darkText ? '#010606' : '#fff' };
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    
`