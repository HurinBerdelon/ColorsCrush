import styled from 'styled-components'

export const Container = styled.div`

    display: flex;

    .app {
        display: flex;
        padding: 30px;

        .game {
            width: 624px;
            height: 624px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;

            img {
                height: 70px;
                width: 70px;
                border-radius: 2rem;
                /* padding: 0.5rem; */
            }
        }
    }
`