import { useEffect, useState } from "react"
import { Container } from "./style"
import { useGame } from "../../hooks/useGame"
import { PlayerSchema } from "../../schema/player"
import Link from "next/link"
import { Loading } from "../Feedback/WidgetForm/ScreenshotButton.tsx/Loading"

import { useTheme } from "../../hooks/useTheme"
import light from "../../styles/theme/light"
import dark from "../../styles/theme/dark"
import { LOCALSTORE_KEY } from "../../config"

export default function MainMenu(): JSX.Element {

    const { player, setPlayer, isGameLoading, setIsGameLoading } = useGame()
    const [playerName, setPlayerName] = useState('anonymous')
    const { setTheme } = useTheme()

    useEffect(() => {
        localStorage.removeItem('colors-crush-player')
        const playerSaved: PlayerSchema = JSON.parse(localStorage.getItem(`player_${LOCALSTORE_KEY}`))

        setPlayer(playerSaved)
    }, [])

    function handleChoosenGame(game: string) {

        setIsGameLoading(true)

        setTheme(game === 'light' ? light : dark)

        localStorage.setItem(`player_${LOCALSTORE_KEY}`, JSON.stringify({
            name: player ? player.name : playerName,
            gamesAvailable: player ? player.gamesAvailable : ['light'],
            currentTheme: game
        }))

        if (!player) {
            setPlayer({
                name: playerName,
                gamesAvailable: ['light'],
                currentTheme: game
            })
        } else {
            setPlayer({
                ...player,
                currentTheme: game
            })
        }
    }

    return (
        <Container>

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