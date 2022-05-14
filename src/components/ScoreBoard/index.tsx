import { Container } from "./style";

interface ScoreBoardProps {
    score: number
}

export function ScoreBoard({ score }: ScoreBoardProps): JSX.Element {


    return (
        <Container>
            <h2>Score: {score}</h2>
        </Container>
    )
}