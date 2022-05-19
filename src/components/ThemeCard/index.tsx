import { useState } from "react"
import ReactCardFlip from "react-card-flip"
import { Container } from "./style"

interface ThemeCardProps {
    frontImage: {
        url: string
        title: string
    }
}

export function ThemeCard(): JSX.Element {

    const [flipClass, setFlipClass] = useState(false)

    function handleFlip() {
        setFlipClass(!flipClass)
    }

    return (
        <Container>
            <ReactCardFlip
                isFlipped={flipClass}
                flipDirection='horizontal'
            >
                <div
                    className="face front"
                    onClick={handleFlip}
                >
                    ?
                </div>
                <div
                    className="face back"
                    onClick={handleFlip}>
                    Gift
                    {/* <img src={frontImage.url} alt={frontImage.title} /> */}
                </div>
            </ReactCardFlip>
        </Container >
    )
}