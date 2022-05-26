import { Container } from "./style"

interface ScoreRecordsModalButtonProps {
    handleOpenScoreRecordsModal(): void
}

export function ScoreRecordsModalButton({ handleOpenScoreRecordsModal }: ScoreRecordsModalButtonProps): JSX.Element {

    return (
        <Container
            onClick={handleOpenScoreRecordsModal}
        >
            Show Records
        </Container>
    )
}