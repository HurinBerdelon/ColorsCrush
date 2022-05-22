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
            height: 70px;
            width: 70px;
            cursor: pointer;
            border-radius: 50%;
        }
    }
`