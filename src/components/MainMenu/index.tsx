import { useEffect, useState } from "react"
import Link from "next/link"
import { v4 as uuidv4 } from 'uuid'
import EditIcon from '@mui/icons-material/Edit';
import { Container } from "./style"
import { useGame } from "../../hooks/useGame"
import { PlayerSchema } from "../../schema/player"
import { Loading } from "../Feedback/WidgetForm/ScreenshotButton.tsx/Loading"

import { useTheme } from "../../hooks/useTheme"
import light from "../../styles/theme/light"
import dark from "../../styles/theme/dark"
import { LOCALSTORE_KEY } from "../../config"
import { StartGameForm } from "./StartGameForm"

const THEMES = {
    dark,
    light,
}

export default function MainMenu(): JSX.Element {

    const { player, setPlayer, isGameLoading, setIsGameLoading, setGame, setScoreDisplay } = useGame()
    const [isChangingName, setIsChangingName] = useState(true)
    const { theme: currentTheme, setTheme } = useTheme()

    useEffect(() => {
        setGame({
            id: uuidv4(),
            playerName: '',
            score: 0,
            theme: ''
        })
        setScoreDisplay(0)

        localStorage.removeItem('colors-crush-player')
        const playerSaved: PlayerSchema = JSON.parse(localStorage.getItem(`player_${LOCALSTORE_KEY}`))

        if (playerSaved) {
            setPlayer(playerSaved)
            setIsChangingName(false)
        }

        console.log(isGameLoading || currentTheme.title === 'light')
    }, [])

    function handleStartGame() {

        setIsGameLoading(true)

        localStorage.setItem(`player_${LOCALSTORE_KEY}`, JSON.stringify({
            name: player.name,
            gamesAvailable: player.gamesAvailable
        }))

        setPlayer({
            ...player
        })
    }


    return (
        <Container>
            <h1>Welcome to Colors Crush<span>Beta</span></h1>

            <h3>CHOOSE YOUR THEME</h3>
            <div className="themes">
                {player
                    ? player.gamesAvailable.map(theme => (
                        <button
                            key={theme}
                            className={`themeSelector ${currentTheme.title === theme && 'active'}`}
                            disabled={isGameLoading || currentTheme.title === theme}
                            onClick={() => setTheme(THEMES[theme])}
                        >
                            {theme.toUpperCase()}
                        </button>
                    ))
                    : <button
                        className={`themeSelector ${currentTheme.title === 'light' && 'active'}`}
                        disabled={isGameLoading || currentTheme.title === 'light'}
                        onClick={() => setTheme(THEMES.light)}
                    >
                        LIGHT
                    </button>
                }
            </div>
            {!isChangingName
                ? (
                    <>
                        <h3>
                            Hello, {player.name}
                            <span
                                onClick={() => setIsChangingName(true)}
                            >
                                <EditIcon />
                            </span>
                        </h3>

                        <Link href="/gameboard" >
                            <a
                                className="startGame"
                                onClick={handleStartGame}
                            >
                                {isGameLoading ? <Loading /> : 'Start'}
                            </a>
                        </Link>
                    </>
                )
                : <StartGameForm />
            }

            {/* <h3>Will change from here</h3>
            {player
                ? <h3>Hello, {player.name}</h3>
                : <input
                    type='text'
                    onChange={(event) => setPlayerName(event.target.value)}
                    placeholder='Your Name'
                />}

            
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
            </ul> */}

        </Container>
    )
}