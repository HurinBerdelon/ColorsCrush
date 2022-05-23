import styled from "styled-components";

export const Container = styled.button`
    position: absolute;
    top: 0.5rem;
    left: 1rem;

    font-size: 1.5rem;
    color: ${props => props.theme.colors.mainText};
    
    &:hover {
        color: ${props => props.theme.colors.gray};
    }
`