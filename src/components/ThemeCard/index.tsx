import { useState } from "react"
import ReactCardFlip from "react-card-flip"
import { LOCALSTORE_KEY } from "../../config"
import { useGame } from "../../hooks/useGame"
import { PlayerSchema } from "../../schema/player"
import { Container } from "./style"

interface ThemeCardProps {
    themeName: string
    isRewardOpen: boolean
    handleToggleReward(): void
}

export function ThemeCard({ themeName, isRewardOpen, handleToggleReward }: ThemeCardProps): JSX.Element {

    const [flipClass, setFlipClass] = useState(false)
    const { setPlayer } = useGame()

    function handleFlip() {
        if (isRewardOpen) {
            return
        } else {
            setFlipClass(true)

            handleToggleReward()

            const player: PlayerSchema = JSON.parse(localStorage.getItem(`player_${LOCALSTORE_KEY}`))

            if (!player.gamesAvailable.includes(themeName)) {
                player.gamesAvailable.push('dark')
                setPlayer({
                    ...player,
                })
            }
            localStorage.setItem(`player_${LOCALSTORE_KEY}`, JSON.stringify(player))
        }
    }

    return (
        <Container>
            <ReactCardFlip
                isFlipped={flipClass}
                flipDirection='horizontal'
            >
                <div
                    className={`face front ${!isRewardOpen && 'interact'}`}
                    onClick={handleFlip}
                >
                    ?
                </div>
                <div
                    className="face back"
                >
                    {themeName}
                </div>
            </ReactCardFlip>
        </Container >
    )
}