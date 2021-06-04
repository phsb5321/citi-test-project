import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--TOP-BACKGROUND);
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 4rem 1rem 10rem;
    margin: 0 auto;
    max-width: 1120px;

    a {
        padding: 2rem 3rem;
        line-height: 1.0rem;

        border: 0;
        border-radius: 0.5rem;

        cursor: pointer;
        outline: 0;

        font-style: normal;
        font-weight: 600;
        font-size: 1.6rem;
        color: var(--MAIN-SHAPE);
        text-decoration: none;

        background: var(--BUTTON-COLOR) ;
    }

`