import { useTranslation } from "next-i18next"
import { FeedbackType, feedbackTypes } from "../.."
import { CloseButton } from "../../../CloseButton"
import { Container } from "./style"


interface FeedbackTypeStepProps {
    onFeedbackTypeChanged(type: FeedbackType): void
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps): JSX.Element {

    const { t } = useTranslation()

    return (
        <Container>
            <header>
                <span>{t('feedback:leave-your-feedback')}</span>
                <CloseButton />
            </header>

            <div>
                {Object.entries(feedbackTypes).map(([key, value]) => (
                    <button
                        key={key}
                        onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                        type='button'
                        className="selectButton"
                    >
                        <img src={value.image.source} alt={t(`feedback:${value.image.alt}`)} />
                        <span>{t(`feedback:${value.title}`)}</span>
                    </button>
                ))}
            </div>
        </Container>
    )
}