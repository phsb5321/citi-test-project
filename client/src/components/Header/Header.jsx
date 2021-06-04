import React from 'react'
import { Container, Content } from './Header.js';
import logo from '../../assets/logo.svg';
export default function Header() {
    return (
        <Container>
            <Content>

                <img src={logo} alt="logo"/>
                <a href = "http://0.0.0.0:3001/admin">
                    Nova Transação
                </a>
            </Content>
            
        </Container>
    );
}