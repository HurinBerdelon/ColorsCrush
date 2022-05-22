import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 1.6rem;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;

    color: ${props => props.theme.colors.mainText};

    .releasesButton {
        color: ${props => props.theme.colors.mainText};
        margin-left: 2rem;
        
        &:hover {
            color: ${props => props.theme.colors.gray};
        }
    }

    div {
        display: flex;
        gap: 1rem;

        ul {
            display: flex;
            gap: 0.5rem;
            list-style: none;
            align-items: flex-end;
        }
    }
`