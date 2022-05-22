import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    width: 304px;
    color: ${props => props.theme.colors.mainText};


    span {
        font-size: 1.25rem;

        margin-top: .5rem;
    }

    button {
        padding: 0.5rem 1.5rem;
        margin-top: 1.5rem;
        
        border: transparent;
        border-radius: 0.5rem;
        font-size: .875rem;
        line-height: 1.5rem;
        
        transition-property: background-color, border-color, color, fill, stroke;

        color: ${props => props.theme.colors.white};
        background: ${props => props.theme.colors.secondaryText};

        resize: none;

        &:hover{
            filter: brightness(1.2);
        }

        &:focus {
            outline: none;
        }

    }
`