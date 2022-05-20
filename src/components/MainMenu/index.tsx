import { useState } from "react"
import { Container } from "./style"
import { useGame } from "../../hooks/useGame"
import { PlayerSchema } from "../../schema/player"

// import { ThemeContext } from 'styled-components'

export default function MainMenu(): JSX.Element {

    const { player } = useGame()
    const [playerName, setPlayerName] = useState('')

    function handleChoosenGame(game: string) {
        const playerSaved: PlayerSchema = JSON.parse(localStorage.getItem('colors-crush-player'))

        localStorage.setItem('colors-crush-player', JSON.stringify({
            name: playerName ? playerName : playerSaved.name,
            gamesAvailable: ['light'],
            currentTheme: game
        }))
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

            <h1>Welcome to Colors Crush</h1>
            {player
                ? null
                : <input
                    type='text'
                    onChange={(event) => setPlayerName(event.target.value)}
                    placeholder='Your Name'
                />}
            <h3>CHOOSE YOUR THEME</h3>
            <ul className="listOfGames">
                {player
                    ? player.gamesAvailable.map(game =>
                    (<a
                        key={game}
                        href="/gameboard"
                        onClick={() => handleChoosenGame(game)}
                    >
                        {game.toUpperCase()}
                    </a>)
                    )
                    : <a
                        onClick={() => handleChoosenGame('light')}
                        href='/gameboard'
                    >
                        LIGHT
                    </a>}
            </ul>
        </Container>
    )
}