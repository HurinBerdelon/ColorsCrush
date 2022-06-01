import { useEffect, useState } from "react"
import { Container } from "./style"
import { useGame } from "../../hooks/useGame"
import { PlayerSchema } from "../../schema/player"
import Link from "next/link"
import { Loading } from "../Feedback/WidgetForm/ScreenshotButton.tsx/Loading"

import project from '../../../package.json'

// import { ThemeContext } from 'styled-components'

export default function MainMenu(): JSX.Element {

    const { player, setPlayer, isGameLoading, setIsGameLoading } = useGame()
    const [playerName, setPlayerName] = useState('anonymous')

    useEffect(() => {
        localStorage.removeItem('colors-crush-player')
        const playerSaved: PlayerSchema = JSON.parse(localStorage.getItem(`colors-crush-player_v${project.version}`))

        setPlayer(playerSaved)
    }, [])

    function handleChoosenGame(game: string) {

        setIsGameLoading(true)

        localStorage.setItem(`colors-crush-player_v${project.version}`, JSON.stringify({
            name: player?.name ? player.name : playerName,
            gamesAvailable: ['light'],
            currentTheme: game
        }))

        if (!player) {
            setPlayer({
                name: playerName,
                gamesAvailable: ['light'],
                currentTheme: game
            })
        }
    }

    // const { colors } = useContext(ThemeContext)

    return (
        <Container>
            {/* <Switch
                onChange={() => { }}
                checked={false}
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}
            /> */}

            <h1>Welcome to Colors Crush<span>Beta</span></h1>
            {player
                ? <h3>Hello, {player.name}</h3>
                : <input
                    type='text'
                    onChange={(event) => setPlayerName(event.target.value)}
                    placeholder='Your Name'
                />}

            <h3>CHOOSE YOUR THEME TO PLAY</h3>
            <ul className="listOfGames">
                {isGameLoading ? <Loading />
                    :
                    (player
                        ? player.gamesAvailable.map(game =>
                        (<Link
                            key={game}
                            href='/gameboard'
                        >
                            <a

                                onClick={() => handleChoosenGame(game)}
                            >
                                {game.toUpperCase()}
                            </a>
                        </Link>)
                        )
                        : <Link
                            href='/gameboard'
                        >
                            <a
                                onClick={() => handleChoosenGame('light')}
                            >
                                LIGHT
                            </a>
                        </Link>)}
            </ul>

        </Container>
    )
}