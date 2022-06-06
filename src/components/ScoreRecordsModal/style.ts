import styled from "styled-components";

export const Container = styled.div`
    width: 400%;
    position: relative;

    div {
        display: flex;
    }

    .react-modal-close-score {
        position: absolute;
        left: 24.2rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: 0.2s;

        &:hover {
            filter: brightness(0.8);
            cursor: pointer;
        }
    }
`