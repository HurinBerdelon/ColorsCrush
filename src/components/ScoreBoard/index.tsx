import { useContext, useEffect, useState } from "react";
import { useGame } from "../../hooks/useGame";
import { Container } from "./style";
import { ThemeContext } from 'styled-components'
import { api } from "../../services/api";
import { Loading } from "../Feedback/WidgetForm/ScreenshotButton.tsx/Loading";
import { toastSuccess } from "../../providers/toastProvider";
import { PlayerSchema } from "../../schema/player";
import { darkThemeRewardScore, LOCALSTORE_KEY } from "../../config";

interface ScoreBoardProps {
    handleOpenThemeRewardModal(opening?: boolean): void
}

export function ScoreBoard({ handleOpenThemeRewardModal }: ScoreBoardProps): JSX.Element {

    const { scoreDisplay, game } = useGame()
    const [percent, setPercent] = useState(0)
    const [multiplies, setMultiplies] = useState(0)
    const [isRestartLoading, setIsRestartLoading] = useState(false)
    const [isSaveLoading, setIsSaveLoading] = useState(false)

    useEffect(() => {
        setPercent(scoreDisplay - (Math.floor(scoreDisplay / 100)) * 100)
        setMultiplies(Math.floor(scoreDisplay / 100))

        if (scoreDisplay >= darkThemeRewardScore) {
            const playerSaved: PlayerSchema = JSON.parse(localStorage.getItem(`player_${LOCALSTORE_KEY}`))

            if (!playerSaved.gamesAvailable.includes('dark')) {
                handleOpenThemeRewardModal(true)
            }
        }

    }, [scoreDisplay])

    async function handleSaveScore() {
        setIsSaveLoading(true)
        const response = await api.post('/prisma_api', game)
        if (response.data.received) {
            setIsSaveLoading(false)
            toastSuccess()
        }
    }

    function handleReloadPage() {
        location.reload()
        setIsRestartLoading(true)
    }

    const { colors } = useContext(ThemeContext)

    return (
        <Container
            percent={percent}
            barColorBegin={colors.scoreBar[multiplies % 7]?.begin}
            barColorEnd={colors.scoreBar[multiplies % 7]?.end}
        >
            <div className="scores">
                <h2>Score: {scoreDisplay}</h2>
                <div className="scoreBox">
                    <div className="scoreBar"></div>
                </div>
                <h3>{multiplies} x</h3>

                <div className="interactionButtons">
                    <button
                        type="button"
                        onClick={handleSaveScore}
                        disabled={isSaveLoading}
                    >
                        {isSaveLoading ? <Loading /> : 'Save Score'}
                    </button>
                    <button
                        type="button"
                        onClick={handleReloadPage}
                        disabled={isRestartLoading}
                    >
                        {isRestartLoading ? <Loading /> : 'Restart'}
                    </button>
                </div>
            </div>

        </Container>
    )
}