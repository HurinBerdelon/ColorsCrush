import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: calc(100vh - 1.6rem);
    background: var(--gray-50);
    overflow: hidden;

    color: var(--gray-900);

    h1 {
        font-family: 'Smooch', cursive;
        margin-bottom: 2rem;
        font-size: 4rem;
        letter-spacing: 0.25rem;
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
            color: #f00;

            &:hover {
                color: var(--gray-500);
            }
        }
    }
`