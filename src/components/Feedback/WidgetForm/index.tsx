import { useState } from "react";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep/FeedbackContentStep";
import { Container } from './style';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep/FeedbackSuccessStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep/FeedbackTypeStep';

export const feedbackTypes = {
    BUG: {
        title: 'Problem',
        placeholder: "Tell us in details what is going on...",
        image: {
            source: '/assets/bug.svg',
            alt: 'Insect to represent a bug'
        }
    },
    IDEA: {
        title: 'Idea',
        placeholder: "Tell us your idea...",
        image: {
            source: '/assets/idea.svg',
            alt: 'Light bulb to represent an idea'
        }
    },
    OTHER: {
        title: 'Other',
        placeholder: "Tell us what you thought...",
        image: {
            source: '/assets/thought.svg',
            alt: 'thought bubble to represent other'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm(): JSX.Element {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return (
        <Container>

            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestart={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            onFeedbackRestart={handleRestartFeedback}
                            feedbackType={feedbackType}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}
        </Container>
    )
}