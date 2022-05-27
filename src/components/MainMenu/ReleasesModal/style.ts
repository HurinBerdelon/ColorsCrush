import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-height: 400px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    text-align: justify;

    ul {
        list-style: none;
        overflow-y: auto;


        li {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }

    color: ${props => props.theme.colors.mainText};

    h2 {
        margin-bottom: 1rem;
    }
`