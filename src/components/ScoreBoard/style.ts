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

        .interactionButtons {
            width: 90%;
            display: flex;
            justify-content: space-evenly;

            button {
                background: ${props => props.theme.colors.secondaryText};
                color: ${props => props.theme.colors.white};
                width: 42%;

                display: flex;
                justify-content: center;
                align-items: center;
                
                padding: 0.25rem 0.5rem;
                border-radius: 0.25rem;

                &:hover {
                    filter: brightness(1.2)
                }

                &:disabled{
                    pointer-events: none;
                }
            }
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

        @media (max-width: 420px) {
            margin-top: 2.75rem;

            .scoreBox {
                height: 2.5rem;
                width: 80%;
                border: 0.75rem solid ${props => props.theme.colors.gray};
                border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
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
                    height: 1.2rem;
                }        
            }

            h2 {
                font-size: 1.4rem;
            }

            h3 {
                font-size: 1.4rem;
            }

            .interactionButtons {
            width: 80%;

            button {
                background: ${props => props.theme.colors.secondaryText};
                color: ${props => props.theme.colors.white};
                width: 40%;

                display: flex;
                justify-content: center;
                
                padding: 0.25rem 0.25rem;
                border-radius: 0.25rem;

                &:hover {
                    filter: brightness(1.2)
                }

                &:disabled{
                    pointer-events: none;
                }
            }
        }
        }
    
    }       
`