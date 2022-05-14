import styled from 'styled-components'

export const Container = styled.div`

    display: flex;

    .app {
        display: flex;
        padding: 30px;

        .game {
            width: 560px;
            height: 560px;
            display: flex;
            flex-wrap: wrap;

            img {
                height: 70px;
                width: 70px;
            }
        }
    }
`