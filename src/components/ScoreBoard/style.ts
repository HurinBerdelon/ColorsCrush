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
        background: linear-gradient(to top right, var(--gray-200), var(--blue-100));
        border-radius: 0.5rem;

        display: flex;
        flex-direction: column;
        align-items: center;    
        justify-content: space-evenly;

        color: var(--gray-900);
        
        .scoreBox {
            background: var(--black);
            border: 1rem solid var(--gray-500);
            height: 50%;
            width: 4rem;
            border-radius: 1rem 1rem 0.5rem 0.5rem ;
            display: flex;
            align-items: flex-end;
            justify-content: center;
        
            .scoreBar {
                background: linear-gradient(to top, var(--blue-green), var(--green-200));
                height: ${props => props.percent}%;
                width: 2rem;
            }        
        }

        h3 {
            font-size: 2rem;
        }
    
}

    
`