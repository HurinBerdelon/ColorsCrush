import styled from "styled-components";

export const Container = styled.button`

    display: none;

    @media (max-width: 720px) {
        display: flex;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        
        background: ${props => props.theme.colors.secondaryText};
        color: ${props => props.theme.colors.white};
    }
`