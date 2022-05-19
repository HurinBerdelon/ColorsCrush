import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --black: #000000;

        --gray-50: #FAFAFA;
        --gray-200: #C0C4C4;
        --gray-500: #AAAAAA;
        --gray-900: #232320;

        --blue-100: #BCE6E6;

        --blue-green: #02DCBD;

        --green-200: #15D011;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
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
        max-width: 320px;

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

export const BodyContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: var(--gray-50);
`