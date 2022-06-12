import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 3.125rem;
    background: ${({primary}) => primary ? '#01bf71' : '#010606'};
    padding: ${({big}) => big ? '0.875rem 3rem' : '0.75rem 1.875rem'};
    color: ${({dark}) => dark ? '#010606' : '#fff' };
    font-size: ${({fontBig}) => fontBig ? '1.25rem' : '1rem'};
    outline: none;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    font-weight: 600;

    &:hover {
        background: ${({primary}) => primary ? '#fff' : '#01bf71'};
    }
`