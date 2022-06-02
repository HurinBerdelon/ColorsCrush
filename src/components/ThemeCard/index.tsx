import { useState } from "react"
import ReactCardFlip from "react-card-flip"
import { LOCALSTORE_ITEM } from "../../config"
import { PlayerSchema } from "../../schema/player"
import { Container } from "./style"

interface ThemeCardProps {
    themeName: string
    isRewardOpen: boolean
    handleToggleReward(): void
}

export function ThemeCard({ themeName, isRewardOpen, handleToggleReward }: ThemeCardProps): JSX.Element {

    const [flipClass, setFlipClass] = useState(false)

    function handleFlip() {
        if (isRewardOpen) {
            return
        } else {
            setFlipClass(true)

            handleToggleReward()

            const player: PlayerSchema = JSON.parse(localStorage.getItem(LOCALSTORE_ITEM))

            if (!player.gamesAvailable.includes(themeName)) {
                player.gamesAvailable.push(themeName)
            }
            localStorage.setItem(LOCALSTORE_ITEM, JSON.stringify(player))
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