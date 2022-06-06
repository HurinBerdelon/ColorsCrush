import { ReactElement, useState } from "react";
import { HowToPlayModal } from "../HowToPlayModal";

interface HowToPlayButtonProps {
    children: ReactElement
}

export function HowToPlayButton({ children }: HowToPlayButtonProps): JSX.Element {

    const [isHowToPlayModalOpen, setIsHowToPlayModalOpen] = useState(false)

    function handleOpenHowToPlayModal() {
        setIsHowToPlayModalOpen(!isHowToPlayModalOpen)
    }

    return (
        <>
            <HowToPlayModal
                handleCloseHowToPlayModal={handleOpenHowToPlayModal}
                isHowToPlayModalOpen={isHowToPlayModalOpen}
            />

            <button
                className="howToPlayButton"
                onClick={handleOpenHowToPlayModal}
            >
                {children}
            </button>
        </>
    )
}