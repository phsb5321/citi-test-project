import styled from 'styled-components';

export const Container = styled.header`

    width: 38rem;
    height: 14rem;
    padding: 16px;

    border-radius: 5px;

    
    background: var(--MAIN-SHAPE);

    &.highlight{

        &.green{ background: var(--IN-COLOR); }
        &.red{ background: var(--OUT-COLOR) ;}

        div, h1 {
            color: var(--MAIN-SHAPE);
        }
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 8px;
    }

    h1 {
        margin-top: 8px;
        font-weight: normal;
        font-style: normal;
    }
`