import styled from "styled-components";

export const Container = styled.div`
    .face {
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${props => props.theme.colors.mainText};
        background: ${props => props.theme.colors.gray};

        font-size: 3.5rem;
        
        border-radius: 0.5rem;
        box-shadow: 5px 5px 5px 0.5px ${props => props.theme.colors.gray};
            
        p {
            font-size: 1.5rem;
            font-weight: 400;
        }
    }

    .interact:hover {
        &:hover {
            cursor: pointer;
            filter: brightness(1.1);
        }
    }

    @media (max-width: 720px) {
        .face {
            width: 75px;
            height: 75px;
            font-size: 2.2rem;
        }
    }

    @media (max-width: 360px) {
        .face {
            width: 50px;
            height: 50px;
            font-size: 1.8rem;
        }
    }

    .front {
        background-color: ${props => props.theme.colors.secondaryText};
    }   
`