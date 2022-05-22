import styled from "styled-components";

export const BackgroundButton = styled.button`
    padding: 0.25rem;
    width: 2.5rem;
    height: 2.5rem;

    border-radius: 0.25rem;
    border: transparent;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    color: ${props => props.theme.colors.white};

    transition-property: background-color, border-color, color, fill, stroke;

    &:hover{
        filter: brightness(1.2)
    }
`

export const Button = styled.button`
    padding: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    background: ${props => props.theme.colors.secondaryText};

    border-radius: 0.25rem;
    border: transparent;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    color:  ${props => props.theme.colors.white};

    transition-property: background-color, border-color, color, fill, stroke;

    .camera {
        width: 1.5rem;
        height: 1.5rem;
        color:  ${props => props.theme.colors.white};
    }

    &:hover{
        filter: brightness(1.2);
    }

    &:focus {
        outline: none;
    }
`

