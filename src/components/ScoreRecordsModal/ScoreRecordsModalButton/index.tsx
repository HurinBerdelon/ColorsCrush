import { useTranslation } from "next-i18next"
import { Container } from "./style"

interface ScoreRecordsModalButtonProps {
    handleOpenScoreRecordsModal(): void
}

export function ScoreRecordsModalButton({ handleOpenScoreRecordsModal }: ScoreRecordsModalButtonProps): JSX.Element {

    const { t } = useTranslation()

    return (
        <Container
            onClick={handleOpenScoreRecordsModal}
        >
            {t('gameboard:show-ranking')}
        </Container>
    )
}