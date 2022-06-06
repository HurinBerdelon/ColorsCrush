import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    background: ${props => props.theme.colors.boxColorOne};
    padding: 2rem;
    border-radius: 0.5rem;

    h3 {
        color: ${props => props.theme.colors.mainText};
        text-align: center;
    }

    .buttons {
        display: flex;
        gap: 1rem;
        
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 200px;
            background: ${props => props.theme.colors.secondaryText};
            color: ${props => props.theme.colors.white};
            border-radius: 0.25rem;
            height: 2rem;

            &:hover {
                filter: brightness(1.1);
            }

            &:disabled {
                filter: brightness(1)
            }
        }
    }

    @media (max-width: 720px){
        .buttons {
            flex-direction: column;
            gap: 0.5rem;
        }
    }
`