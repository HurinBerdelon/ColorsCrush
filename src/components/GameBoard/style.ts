import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    .game {
        width: 600px;
        height: 600px;
        display: flex;
        gap: 1px;
        flex-wrap: wrap;
        padding: 16px;
        background: linear-gradient(
            to top,
            ${props => props.theme.colors.boxColorOne},
            ${props => props.theme.colors.boxColorTwo}
            );
        border-radius: 0.5rem;

        img {
            object-fit: contain;
            width: 70px;
            height: 70px;
            cursor: pointer;
            border-radius: 100%;
        }
    }

    @media (max-width: 720px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;

        .game {
            width: 100%;
            height: auto;
            display: flex;
            gap: 1px;
            flex-wrap: wrap;
            padding: 16px;
            background: linear-gradient(
                to top,
                ${props => props.theme.colors.boxColorOne},
                ${props => props.theme.colors.boxColorTwo}
                );
            border-radius: 0.5rem;

            img {
                object-fit: contain;
                width: calc((100% - 8px)/8);
                height: calc((100% - 8px)/8);
                cursor: pointer;
                border-radius: 100%;
            }
        }
    }

    @media (max-width: 420px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;

        .game {
            width: 100%;
            height: auto;
            display: flex;
            gap: 1px;
            flex-wrap: wrap;
            padding: 16px;
            background: linear-gradient(
                to top,
                ${props => props.theme.colors.boxColorOne},
                ${props => props.theme.colors.boxColorTwo}
                );
            border-radius: 0.5rem;

            img {
                object-fit: contain;
                width: calc((100% - 8px)/8);
                height: calc((100% - 8px)/8);
                cursor: pointer;
                border-radius: 100%;
            }
        }
    }
`