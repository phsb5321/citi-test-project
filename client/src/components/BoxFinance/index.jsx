import { Container } from './styles';
import React from 'react'

export function BoxFinance({ title, icon, value, isHightlight }) {
    const hightlightColor = (value > 0) ? "gree" : "red";

    return (
        <Container className={isHightlight ? `highlight ${hightlightColor}` : ""}>
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