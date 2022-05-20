import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--gray-900);

    .content {
        height: 600px;
        width: 90%;
        background: linear-gradient(to top right, var(--gray-900), var(--green-200));
        border-radius: 0.5rem;

        display: flex;
        justify-content: center;
        align-items: center;

        .table {
            /* background: var(--white); */
            max-width: 100%;
            padding: 1rem;

            display: flex;
            flex-direction: column;
            justify-content: center;

            .title, .row {
                display: grid;
                grid-template-columns: 1.25fr repeat(3, 2fr);
                gap: 1rem;
            }

            .title {
                padding-bottom: 1rem;
                font-size: 1rem;
                font-weight: 700;
            }

            .place_1 {
                svg {
                    color: #d4af37;
                }
                /* background: #d4af37; */
            }

            .place_2 {
                /* background: #bec2cb; */
                svg {
                    color: #bec2cb;
                }
            }

            .place_3 {  
                /* background: #CD7F32; */
                svg {
                    color: #CD7F32;
                }
            }

            .row {
                padding-top: 0.25rem;
                align-items: flex-end;
                border-bottom: dashed 1px var(--gray-900);

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

                .theme {
                    font-size: 0.9125rem;
                }

                .score {
                    font-weight: 700;
                }
            }

            .coloredRow {
                color: #1AA7EC;
            }
        }
    }
`