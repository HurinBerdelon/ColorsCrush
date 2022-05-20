import 'styled-components'

declare module 'style-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            background: string,
            boxColorOne: string,
            boxColorTwo: string,
            mainText: string,
            secondaryText: string,

            gray: string,
            white: string,
            black: string,

            scoreBarOne: string,
            scoreBarTwo: string,

            currentPlayer: string,
        }
    }
}