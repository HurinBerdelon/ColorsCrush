import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.mainText};

    .content {
        height: 600px;
        width: 90%;
        background: linear-gradient(
            to top right,
            ${props => props.theme.colors.boxColorOne},
            ${props => props.theme.colors.boxColorTwo}
            );
        border-radius: 0.5rem;

        display: flex;
        justify-content: center;
        align-items: center;

        .table {
            /* background: var(--white); */
            width: 90%;
            max-width: 100%;
            padding: 1rem;

            display: flex;
            flex-direction: column;
            justify-content: center;

            .title, .row {
                display: grid;
                grid-template-columns: 1.25fr 4fr 2fr;
                gap: 1rem;
            }

            .title {
                padding-bottom: 1rem;
                font-size: 1rem;
                font-weight: 700;
            }

            .place_1 {
                svg {
                    color: var(--golden);
                    
                }
            }

            .place_2 {
                svg {
                    color: var(--silver);
                }
            }

            .place_3 {  
                svg {
                    color: var(--bronze);
                }
            }

            .row {
                padding-top: 0.25rem;
                align-items: flex-end;
                border-bottom: dashed 1px ${props => props.theme.colors.mainText};

                .place {
                    font-weight: 700;
                    display: flex;
                    gap: 0.25rem;
                }

                .name {
                    text-transform: uppercase;
                    display: block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            .score {
                    font-weight: 700;
                    text-align: end;
                }

            .coloredRow {
                color: ${props => props.theme.colors.currentPlayer};
            }
        }
    }
`