import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: calc(100vh - 1.6rem);
    background: ${props => props.theme.colors.background};

    color: ${props => props.theme.colors.mainText};

    h3 {
        display: flex;

        span {
            padding-left: 1rem;
            svg {
                font-size: 1.4rem;

                &:hover {
                    filter: brightness(0.7);
                    cursor: pointer;
                }
            }
        }
    }

    @media (max-width: 720px) {
        text-align: center;
        height: calc(100vh - 8.8rem);
    }

    h1 {
        margin-bottom: 2rem;
        font-size: 4rem;

        span {
            font-family: 'Smooch', cursive;
            font-size: 2rem;
            padding-left: 1rem;
            color: ${props => props.theme.colors.secondaryText};
        }
    }

    .themes {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
            gap: 1.9rem;
   
            .themeSelector {
                background: ${props => props.theme.colors.gray};
                color: ${props => props.theme.colors.white};            
                padding: 0 1rem;
                font-size: 1.25rem;
                border-radius: 0.25rem;

                &:hover {
                    filter: brightness(1.2);
                }

                &:disabled {
                    filter: brightness(1);
                    cursor: default;
                }
            }

            .active {
                background: ${props => props.theme.colors.secondaryText};
            }
        }

    .startGame {
        margin-top: 1rem;
        background: ${props => props.theme.colors.secondaryText};
        color: ${props => props.theme.colors.white};
        width: 10rem;
        height: 1.8125rem; // =29px

        font-size: 1.25rem;
        border-radius: 0.25rem;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            filter: brightness(1.2);
        }
    }
`