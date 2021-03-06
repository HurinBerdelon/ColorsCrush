import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: justify;

    color: ${props => props.theme.colors.mainText};
    background: ${props => props.theme.colors.boxColorOne};
    padding: 2rem;
    border-radius: 0.5rem;
    
    h2 {
        margin-bottom: 1rem;
    }
`