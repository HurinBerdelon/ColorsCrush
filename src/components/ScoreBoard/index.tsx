import { useContext, useEffect, useState } from "react";
import { useGame } from "../../hooks/useGame";
import { Container } from "./style";
import { ThemeContext } from 'styled-components'

export function ScoreBoard(): JSX.Element {

    const { scoreDisplay } = useGame()
    const [percent, setPercent] = useState(0)
    const [multiplies, setMultiplies] = useState(0)

    useEffect(() => {
        setPercent(scoreDisplay - (Math.floor(scoreDisplay / 100)) * 100)
        setMultiplies(Math.floor(scoreDisplay / 100))

    }, [scoreDisplay])

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
            </div>
        </Container>
    )
}