import {
    createGlobalStyle
} from 'styled-components' 


export const GlobalStyle = createGlobalStyle`
    :root {

        --TOP-BACKGROUND: #5429CC;
        --BUTTON-COLOR: #6933FF;
        --BACKGROUND: #F0F2F5;
        --TITLE-COLOR: #363F5F;
        --TEXT-COLOR: #969CB3;
        --MAIN-SHAPE: #FFFFFF;
        --OUT-COLOR: ##E62E4D;
        --IN-COLOR: #33CC95;   
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, body {
        height: 100vh;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    body {
        font-size: 1.6rem;
        background: var(--BACKGROUND);
    }

    body, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

`
