import { Container } from './styles';
import React from 'react'

export function BoxFinance({ title, icon, value, isHightlight }) {
    return (
        <Container className={isHightlight ? "highlight-box-finance" : ""}>
            <div>
                <p>{title}</p>
                <img src={icon} alt="icon box finance" />
            </div>

            <h1>
                {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(value)}
            </h1>
        </Container>
    );
}