import styled from "styled-components";

export const Container = styled.div`
    width: 1.5rem;
    height: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
}

    .loading-icon {
        height: 1rem;
        animation: spin 1s linear infinite;
    }
`