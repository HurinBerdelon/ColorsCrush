import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    button {
        background: var(--blue-100);
        width: 80%;
        height: 50%;
        
        border-radius: 0.5rem;
        border: 1px solid var(--blue-100);

        font-family: 'Smooch', cursive;
        font-size: 1.825rem;
        letter-spacing: 0.2rem;
        color: var(--gray-900);

        cursor: pointer;
        
        &:hover {
            filter: brightness(0.9);
        }


    }

`