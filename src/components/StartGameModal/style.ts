import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    button {
        background: ${props => props.theme.colors.boxColorOne};
        width: 80%;
        height: 50%;
        
        border-radius: 0.5rem;
        border: none;

        font-family: 'Smooch', cursive;
        font-size: 1.825rem;
        letter-spacing: 0.2rem;
        color: ${props => props.theme.colors.mainText};

        cursor: pointer;
        
        &:hover {
            filter: brightness(0.9);
        }


    }

`