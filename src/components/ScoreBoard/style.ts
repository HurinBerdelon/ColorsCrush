import styled from "styled-components";

interface ContainerProps {
    percent: number
    barColorBegin: string
    barColorEnd: string
}

export const Container = styled.div<ContainerProps>`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.5rem;


    @media (max-width: 720px) {
        width: 100%;
        height: 20%;
        padding: 0 0.5rem;
        padding-bottom: 2rem;
    }

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
            background: linear-gradient(
                        to top, 
                        ${props => props.barColorBegin}, 
                        ${props => props.barColorEnd}
                        );
            border: 1rem solid ${props => props.theme.colors.gray};
            height: 50%;
            width: 4rem;
            border-radius: 1rem 1rem 0.5rem 0.5rem ;
            display: flex;
            align-items: flex-start;
            justify-content: center;
        
            .scoreBar {
                background: ${props => props.theme.colors.black};
                height: ${props => (100 - props.percent)}%;
                width: 2rem;
            }        
        }

        h3 {
            font-size: 2rem;
        }

        @media (max-width: 720px) {
            width: 100%;
            height: 100%;
            justify-content: center;
            background: none;

            .scoreBox {
                height: 3rem;
                width: 80%;
                border: 0.75rem solid ${props => props.theme.colors.gray};
                border-radius: 0.5rem 0.5rem 0.5rem 0.5rem ;
                display: flex;
                align-items: center;
                justify-content: flex-end;

                background: linear-gradient(
                        to right, 
                        ${props => props.barColorBegin}, 
                        ${props => props.barColorEnd}
                        );
            
                .scoreBar {
                    background: ${props => props.theme.colors.black};
                    width: ${props => (100 - props.percent)}%;
                    height: 1.5rem;
                }        
            }

            h3 {
                font-size: 2rem;
            }
        }
    
    }       
`