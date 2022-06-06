import styled from "styled-components";

export const Container = styled.div`

    width: 304px;

    header {
        font-size: 1.2rem;
        line-height: 1.5rem;
        text-align: center;
    }

    div {
        display: flex;
        gap: 0.5rem;

        width: 100%;
        margin-bottom: 1rem;

        .selectButton {
            background: ${props => props.theme.colors.boxColorTwo};
            color: ${props => props.theme.colors.mainText};
            border-radius: 0.5rem;
            padding: 1.25rem 0;
            width: 2rem;

            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem ;
            border: 2px solid transparent;
            outline: none;
        
            &:hover {
                border: 2px solid ${props => props.theme.colors.secondaryText};
                outline: none;
            }

            &:focus {
                border: 2px solid  ${props => props.theme.colors.secondaryText};
                outline: none;
            }
        }
    }
`