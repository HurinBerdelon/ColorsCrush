import { NextApiRequest, NextApiResponse } from "next";
import { FeedbackType } from "../../components/Feedback/WidgetForm";
import { feedback_api } from "../../services/api";

interface BodyRequestProps {
    type: FeedbackType
    comment: string
    screenshot: string
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'POST') {

        const data: BodyRequestProps = request.body

        await feedback_api.post('/feedbacks', {
            type: data.type,
            comment: data.comment,
            screenshot: data.screenshot
        })
    }
    response.json({ redirect: true })
}