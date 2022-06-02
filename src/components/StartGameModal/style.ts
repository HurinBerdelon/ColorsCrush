import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2rem;
    background: ${props => props.theme.colors.boxColorOne};
    border-radius: 0.5rem;
    
    .playButton {
        width: 75%;
        height: 50%;
        text-align: center;

        button {
            background: ${props => props.theme.colors.gray};
            padding: 0 1rem;
            
            border-radius: 0.5rem;
            border: none;
            
            font-family: 'Poppins', sans-serif;
            font-size: 1.825rem;
            letter-spacing: 0.2rem;
            color: ${props => props.theme.colors.mainText};
            
            cursor: pointer;
            
            &:hover {
                filter: brightness(0.9);
            }
        }

    }

    .howToPlayButton {
        margin-top: 1rem;
        color: ${props => props.theme.colors.mainText};

        &:hover {
            filter: brightness(0.8)
        }
    }

`