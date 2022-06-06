import { useState } from "react";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep/FeedbackContentStep";
import { Container } from './style';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep/FeedbackSuccessStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep/FeedbackTypeStep';

export const feedbackTypes = {
    BUG: {
        title: 'problem',
        placeholder: "tell-us-in-details-what-is-going-on",
        image: {
            source: '/assets/bug.svg',
            alt: 'insect-to-represent-a-bug'
        }
    },
    IDEA: {
        title: 'idea',
        placeholder: "tell-us-your-idea",
        image: {
            source: '/assets/idea.svg',
            alt: 'light-bulb-to-represent-an-idea'
        }
    },
    OTHER: {
        title: 'other',
        placeholder: "tell-us-what-you-thought",
        image: {
            source: '/assets/thought.svg',
            alt: 'thought-bubble-to-represent-other'
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