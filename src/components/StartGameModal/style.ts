import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    button {
        background: var(--gray-200);
        border: none;
        width: 50%;
        height: 50%;
        border-radius: 0.5rem;
        border: 1px solid var(--gray-500);
        font-size: 1.25rem;
        cursor: pointer;

        &:hover {
            filter: brightness(0.8);
        }


    }

`