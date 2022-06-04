import styled from "styled-components";

export const Container = styled.div`

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .submitForm {
            margin-top: 1rem;
            background: ${props => props.theme.colors.secondaryText};
            color: ${props => props.theme.colors.white};
            width: 10rem;
            font-size: 1.25rem;
            border-radius: 0.25rem;

            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                filter: brightness(1.2);
            }
        }
    }
    
    input {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.mainText};
        border: 1px solid ${props => props.theme.colors.mainText};
        border-radius: 0.25rem;
        height: 2rem;
        padding: 0.25rem 0.5rem;
    }

    .errorMessage {

        border: 1px solid ${props => props.theme.colors.secondaryText};

        &::placeholder{
            color: ${props => props.theme.colors.secondaryText}
        }
    }
`