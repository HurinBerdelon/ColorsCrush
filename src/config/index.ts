import project from '../../package.json'

export const boardWidth = 8

export const db_frequency = 15

export const scoreTableLenght = 10

export const darkThemeRewardScore = 100

export const LOCALSTORE_KEY = `colors-crush_v${project.version}`

export const squarePiecesTemplate = {
    light: [
        '/images/light/pink.png',
        '/images/light/yellow.png',
        '/images/light/purple.png',
        '/images/light/blue.png',
        '/images/light/green.png',
        '/images/light/orange.png',
    ],
    dark: [
        '/images/dracula/pink.png',
        '/images/dracula/yellow.png',
        '/images/dracula/dark-blue.png',
        '/images/dracula/light-blue.png',
        '/images/dracula/green.png',
        '/images/dracula/red.png',
    ],
    dracula: [
        '/images/dracula/pink.png',
        '/images/dracula/yellow.png',
        '/images/dracula/dark-blue.png',
        '/images/dracula/light-blue.png',
        '/images/dracula/green.png',
        '/images/dracula/red.png',
    ],

}