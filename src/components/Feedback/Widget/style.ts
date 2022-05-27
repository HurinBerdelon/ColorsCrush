import styled from "styled-components";

export const Container = styled.div`
    .popover {
        position: absolute;
        bottom: 1.5rem;
        right: 1.5rem;
        
        display: flex;
        flex-direction: column;
        align-items: end;
    }

    .button {
        background: ${props => props.theme.colors.secondaryText};
        border-radius: 2rem;
        padding: 0 0.75rem;
        height: 3rem;
        color: ${props => props.theme.colors.white};

        display: flex;
        align-items: center;

        .icon {
            width: 1.5rem;
            height: 1.5rem;
        }

        .span {
        max-width: 0;
        overflow: hidden;

            span {
                padding-left: 0.5rem;
            }
        }
    }

    .group:hover {

        .span {
            transition-property: all;
            transition-timing-function: linear;
            transition-duration: 0.5s;
            max-width: 20rem;
        }        
    }
    
`