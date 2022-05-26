import { useEffect, useState } from "react";
import { useGame } from "../../hooks/useGame";
import { Container } from "./style";

export function ScoreBoard(): JSX.Element {

    const { scoreDisplay } = useGame()
    const [percent, setPercent] = useState(0)
    const [multiplies, setMultiplies] = useState(0)

    useEffect(() => {
        setPercent(scoreDisplay - (Math.floor(scoreDisplay / 100)) * 100)
        setMultiplies(Math.floor(scoreDisplay / 100))

    }, [scoreDisplay])

    return (
        <Container percent={percent}>
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