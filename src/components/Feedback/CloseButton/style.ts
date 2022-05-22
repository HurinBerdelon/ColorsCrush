import styled from "styled-components";

export const Container = styled.div`
    .closeButton {
        position: absolute;
        top: 1.25rem;
        right: 1.25rem;
        color: ${props => props.theme.colors.mainText};
        background: none;

        &:hover{
            color: ${props => props.theme.colors.gray};
        }

        .icon {
            width: 1rem;
            height: 1rem;
        }

    }
`