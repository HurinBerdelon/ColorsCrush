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

            scoreBar: {
                0: {
                    begin: string,
                    end: string,
                },
                1: {
                    begin: string,
                    end: string,
                },
                2: {
                    begin: string,
                    end: string,
                },
                3: {
                    begin: string,
                    end: string,
                },
                4: {
                    begin: string,
                    end: string,
                },
                5: {
                    begin: string,
                    end: string,
                },
                6: {
                    begin: string,
                    end: string,
                },
            }
        }
    }
}