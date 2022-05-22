import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: calc(100vh - 1.6rem);
    background: ${props => props.theme.colors.background};
    overflow: hidden;

    color: ${props => props.theme.colors.mainText};

    h1 {
        margin-bottom: 2rem;
        font-size: 4rem;
        /* letter-spacing: 0.25rem; */

        span {
            font-family: 'Smooch', cursive;
            font-size: 2rem;
            padding-left: 1rem;
            color: ${props => props.theme.colors.secondaryText};
        }
    }

    input {
        height: 2rem;
        font-size: 1.125rem;
        margin-bottom: 2rem;
    }

    h3 {
        margin-bottom: 1rem;
    }

    .listOfGames {
        display: flex;
        flex-direction: column;
        a {
            font-size: 1.25rem;
            color: ${props => props.theme.colors.secondaryText};

            &:hover {
                filter: brightness(0.8);
            }
        }
    }
`