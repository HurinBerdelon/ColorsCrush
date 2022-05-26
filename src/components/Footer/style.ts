import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 1.6rem;
    
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;

    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.mainText};

    @media (max-width: 720px) {
        height: 4.8rem;
        flex-direction: column-reverse;
        padding: 0 .5rem;

        p {
            text-align: center;
        }
    }

    .releasesButton {
        color: ${props => props.theme.colors.mainText};
        margin-left: 2rem;

        &:hover {
            color: ${props => props.theme.colors.gray};
        }
    }

    div {
        display: flex;
        align-items: center;
        gap: 1rem;

        ul {
            display: flex;
            gap: 0.5rem;
            list-style: none;
            align-items: flex-end;
        }
    }
`