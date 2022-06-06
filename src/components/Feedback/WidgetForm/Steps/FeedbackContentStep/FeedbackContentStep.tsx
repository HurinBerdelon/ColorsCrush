import { useTranslation } from "next-i18next";
import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "../..";
import { api } from "../../../../../services/api";
import { CloseButton } from "../../../CloseButton";
import { Loading } from "../../ScreenshotButton.tsx/Loading";
import { ScreenshotButton } from "../../ScreenshotButton.tsx/ScreenshotButton";
import { Form, Header } from "./style";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType
    onFeedbackRestart(): void
    onFeedbackSent(): void
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestart, onFeedbackSent }: FeedbackContentStepProps): JSX.Element {

    const feedbackTypeInfo = feedbackTypes[feedbackType]

    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')
    const [isSendingFeedback, setIsSendingFeedback] = useState(false)

    const { t } = useTranslation()

    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault()

        setIsSendingFeedback(true)

        await api.post('/feedbacks', {
            type: feedbackType,
            comment,
            screenshot
        })

        setIsSendingFeedback(false)
        onFeedbackSent()
    }

    return (
        <>
            <Header>
                <button
                    type="button"
                    onClick={onFeedbackRestart}
                    className='backButton'
                >
                    <ArrowLeft weight="bold" className="arrowLeft" />
                </button>

                <span>
                    <img src={feedbackTypeInfo.image.source} alt={t(`feedback:${feedbackTypeInfo.image.alt}`)} />
                    {t(`feedback:${feedbackTypeInfo.title}`)}
                </span>
                <CloseButton />
            </Header>

            <Form
                onSubmit={handleSubmitFeedback}
            >
                <textarea
                    placeholder={t(`feedback:${feedbackTypeInfo.placeholder}`)}
                    onChange={event => setComment(event.target.value)}
                />

                <footer>

                    {/* <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    /> */}

                    <button
                        type="submit"
                        className="sendButton"
                        disabled={comment.length === 0 || isSendingFeedback}
                    >
                        {isSendingFeedback ? <Loading /> : t('feedback:send-feedback')}
                    </button>
                </footer>
            </Form>
        </>
    )
}