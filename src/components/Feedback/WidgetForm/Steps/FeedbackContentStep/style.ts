import styled from "styled-components";

export const Header = styled.header`
    .backButton {
        position: absolute;
        top: 1.25rem;
        left: 1.25rem;
        
        color: ${props => props.theme.colors.mainText};

        &:hover {
            color: ${props => props.theme.colors.gray};
        }

        .arrowLeft {
            width: 1rem;
            height: 1rem;
        }
    }

    span {
        font-size: 1.25rem;
        line-height: 1.5rem;

        margin-right: 1rem;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        img {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`

export const Form = styled.form`
    margin: 1rem 0;
    width: 100%;

    textarea {
        min-width: 304px;
        width: 100%;

        min-height: 112px;

        font-size: 0.875rem;

        color: ${props => props.theme.colors.mainText};
        border: 1px solid ${props => props.theme.colors.boxColorOne};
        border-radius: 0.25rem;
        background: transparent;

        &:focus {
            border: ${props => props.theme.colors.secondaryText};
            outline: none;
            overflow: auto;
        }


        &::placeholder {
            color: ${props => props.theme.colors.gray};
        }
    }

    footer {
        display: flex;
        gap: 0.5rem;
        margin-top: 0.5rem;

        .sendButton {
            padding: 0.5rem;
            background: ${props => props.theme.colors.secondaryText};

            color: ${props => props.theme.colors.white};
            border-radius: 0.25rem;
            border: transparent;
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;

            font-size: 0.875rem;

            transition-property: background-color, border-color, color, fill, stroke;

            &:hover {
                filter: brightness(1.2);
            }

            &:focus {
                outline: none;
            }

            &:disabled {
                opacity: 0.5;
                cursor: default;

                &:hover {
                    filter: brightness(1);
                }
            }
        }
    }
`