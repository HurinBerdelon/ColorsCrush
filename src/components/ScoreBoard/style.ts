import styled from "styled-components";

interface ContainerProps {
    percent: number
}

export const Container = styled.div<ContainerProps>`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .scores {

        height: 600px;
        width: 80%;
        background: linear-gradient(
            to top left,
            ${props => props.theme.colors.boxColorTwo},
            ${props => props.theme.colors.boxColorOne}
            );
        border-radius: 0.5rem;

        display: flex;
        flex-direction: column;
        align-items: center;    
        justify-content: space-evenly;

        color: ${props => props.theme.colors.mainText};
        
        .scoreBox {
            background: ${props => props.theme.colors.black};
            border: 1rem solid ${props => props.theme.colors.gray};
            height: 50%;
            width: 4rem;
            border-radius: 1rem 1rem 0.5rem 0.5rem ;
            display: flex;
            align-items: flex-end;
            justify-content: center;
        
            .scoreBar {
                background: linear-gradient(
                    to top, 
                    ${props => props.theme.colors.scoreBarOne}, 
                    ${props => props.theme.colors.scoreBarTwo}
                    );
                height: ${props => props.percent}%;
                width: 2rem;
            }        
        }

        h3 {
            font-size: 2rem;
        }
    
}

    
`