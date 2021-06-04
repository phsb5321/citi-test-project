import React from 'react'
import { Container } from './styles';


export function BoxFinance({ title, icon, value, isHightlight }) {
    return (
        <Container className={isHightlight ? "highlight-box-finance" : ""}>
            <div>
                <p>{title}</p>
                <img src={icon} alt="icon box finance" />
            </div>

            <h1>{`R$ ${value},00`}</h1>
        </Container>
    );
}