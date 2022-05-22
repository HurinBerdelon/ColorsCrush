import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --black: #000000;

        --golden: #d4af37;
        --silver: #bec2cb;
        --bronze: #CD7F32;

        --gray-50: #FAFAFA;
        --gray-100: #F8F8F8;
        --gray-150: #E8E8E8;
        --gray-200: #C0C4C4;
        --gray-500: #AAAAAA;
        --gray-900: #232320;

        --blue-100: #BCE6E6;

        --blue-green: #02DCBD;

        --green-100: #AEFFD8;
        --green-200: #8AFFC1;
        --green-300: #8FDC97;
        --green-400: #15D011;

        --pink-400: #AC8887;
        --red-400: #9F4A54;

        --purple-500: #8257E5;
        --purple-400: #996DFF;

        /* Color for light theme pieces 
            #86E3AE;
            #86ACCF;
            #AC8CCF;
            #FA9BB8;
            #F0A166;
            #F5CB80;
        */

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
        background: none;
        border: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.6);

        position: fixed;
        top:0;
        bottom:0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 400px;

        background: var(--gray-50);
        padding: 2rem;
        position: relative;
        border-radius: 0.5rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: 0.2s;

        &:hover {
            filter: brightness(0.8);
            cursor: pointer;
        }
    }
`

export const GameBodyContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.colors.background};
`