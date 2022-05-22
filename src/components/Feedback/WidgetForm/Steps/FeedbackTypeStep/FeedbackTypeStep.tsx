import { FeedbackType, feedbackTypes } from "../.."
import { CloseButton } from "../../../CloseButton"
import { Container } from "./style"


interface FeedbackTypeStepProps {
    onFeedbackTypeChanged(type: FeedbackType): void
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps): JSX.Element {

    return (
        <Container>
            <header>
                <span>Leave your feedback</span>
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
                        <img src={value.image.source} alt={value.image.alt} />
                        <span>{value.title}</span>
                    </button>
                ))}
            </div>
        </Container>
    )
}