import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

        .face {
            width: 150px;
            height: 150px;
            display: flex;
            justify-content: center;
            align-items: center;

            color: var(--gray-900);
            font-family: 'Smooch', cursive;
            font-size: 6rem;
            padding: .5rem 2rem 0 0;

            border-radius: 0.5rem;
            box-shadow: 5px 5px 5px 0.5px #000;
            
            p {
                font-size: 1.5rem;
                font-weight: 400;
            }
        }

        .front {
            background-color: var(--blue-100);
        }   

        .back {
            img {
                object-fit: contain;
                
            }
        }


`