import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-height: 400px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    text-align: justify;

    ul {
        list-style: none;
        overflow-y: auto;
        
        padding-right: 0.825rem;

        li {
            display: flex;
            gap: 0.5rem;
        }
    }

    color: ${props => props.theme.colors.mainText};
    background: ${props => props.theme.colors.boxColorOne};
    padding: 2rem;
    border-radius: 0.5rem;

    h2 {
        margin-bottom: 1rem;
    }
`