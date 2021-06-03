import React from 'react'
import {Header} from '../../Header';
import {Carousel} from '../../Carousel';
import {
    GlobalStyle
} from '../../../styles/constants.js';


export default function MainPage() {
    return (

        <>
            <GlobalStyle/>
            <Header/>
            <Carousel/>

        </>

    );
}