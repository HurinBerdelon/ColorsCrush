import { useGame } from "../../hooks/useGame";
import { Container } from "./style";

export function ScoreBoard(): JSX.Element {

    const { scoreDisplay } = useGame()

    return (
        <Container>
            <h2>Score: {scoreDisplay}</h2>
        </Container>
    )
}