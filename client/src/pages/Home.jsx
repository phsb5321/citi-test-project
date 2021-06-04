import React from 'react'
import { Header } from '../components/Header';
import { Carousel } from '../components/Carousel';
import { GlobalStyle } from "../styles/global"

export function Home() {
    return (

        <>
            <GlobalStyle />
            <Header />
            <Carousel />

        </>

    );
}