import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.white};
    padding: 1rem;
    position: relative;
    border: 2px solid ${props => props.theme.colors.secondaryText};

    border-radius: 0.5rem;
    margin-bottom: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

    /* width: px; */

    @media (min-width: 720px) {
        width: auto;
    }
`