import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas'
import { Loading } from "../Loading";
import { BackgroundButton, Button } from "./style";
import { useState } from "react";

interface ScreenshotButtonProps {
    onScreenshotTook(screenshot: string | null): void
    screenshot: string | null
}

export function ScreenshotButton({ screenshot, onScreenshotTook }: ScreenshotButtonProps): JSX.Element {

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true)
        const canvas = await html2canvas(document.querySelector('html')!)
        const base64Image = canvas.toDataURL('image/png', 0.5)

        onScreenshotTook(base64Image)
        setIsTakingScreenshot(false)
    }

    if (screenshot) {
        return (
            <BackgroundButton
                type="button"
                onClick={() => onScreenshotTook(null)}
                style={{
                    backgroundImage: `url(${screenshot})`,
                    // backgroundPosition: 'right bottom',
                    // backgroundSize: 100
                }}
            >
                <Trash weight="fill" />
            </BackgroundButton>
        )
    }

    return (
        <Button
            type="button"
            onClick={handleTakeScreenshot}
        >
            {isTakingScreenshot ? <Loading /> : <Camera className="camera" />}

        </Button>
    )
}