import styled from 'styled-components';
export const Container = styled.table`

        width:auto;
        margin: auto;
        border-spacing:0 0.5rem;

        th{
            color: var(--TEXT-COLOR);
            font-weight: 400;
            padding: 1rem 10vw 1rem 1vw;
            text-align:left;
            line-height:1.5rem;

            &::last-child{
                padding: 1rem 1rem 1rem 1vw;
            }
        }

        td{
            padding: 1rem 10vw 1rem 1vw;
            border:0;
            color:var(--TEXT-COLOR);
            border-radius:0.25rem;
            background-color: var(--MAIN-SHAPE);

            &.deposit{
                color:var(--IN-COLOR);
            }

            &.withdraw{
                color:var(--OUT-COLOR);
            }
        }

        td:first-of-type{
            color:var(--TITLE-COLOR);
        }
        
`