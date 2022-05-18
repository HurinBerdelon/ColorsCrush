import styled from 'styled-components'

export const Container = styled.div`

    display: flex;

    .app {
        display: flex;
        padding: 30px;

        .game {
            width: 568px;
            height: 568px;
            display: flex;
            gap: 1px;
            flex-wrap: wrap;

            img {
                height: 70px;
                width: 70px;
                /* border-radius: 2rem; */
                /* padding: 0.5rem; */
            }
        }
    }
`