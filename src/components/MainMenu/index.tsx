import { useState } from "react"
import { Container } from "./style"
import { useGame } from "../../hooks/useGame"
import { PlayerSchema } from "../../schema/player"
import Link from "next/link"
import { HowToPlayModal } from "./HowToPlayModal"

// import { ThemeContext } from 'styled-components'

export default function MainMenu(): JSX.Element {

    const { player } = useGame()
    const [playerName, setPlayerName] = useState('')
    const [isHowToPlayModalOpen, setIsHowToPlayModalOpen] = useState(false)

    function handleChoosenGame(game: string) {
        const playerSaved: PlayerSchema = JSON.parse(localStorage.getItem('colors-crush-player'))

        localStorage.setItem('colors-crush-player', JSON.stringify({
            name: playerName ? playerName : playerSaved.name,
            gamesAvailable: ['light'],
            currentTheme: game
        }))
    }

    function handleOpenHowToPlayModal() {
        setIsHowToPlayModalOpen(!isHowToPlayModalOpen)
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
            <button
                className="howToPlayButton"
                onClick={handleOpenHowToPlayModal}
            >
                <h3>How To Play</h3>
            </button>

            <h3>CHOOSE YOUR THEME TO PLAY</h3>
            <ul className="listOfGames">
                {player
                    ? player.gamesAvailable.map(game =>
                    (<Link
                        href="/gameboard"
                        key={game}
                        prefetch
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
                        prefetch
                    >
                        <a
                            onClick={() => handleChoosenGame('light')}
                        >
                            LIGHT
                        </a>
                    </Link>}
            </ul>

            <HowToPlayModal
                handleCloseHowToPlayModal={handleOpenHowToPlayModal}
                isHowToPlayModalOpen={isHowToPlayModalOpen}
            />

        </Container>
    )
}