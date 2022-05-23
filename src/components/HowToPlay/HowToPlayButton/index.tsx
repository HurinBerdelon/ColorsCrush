import { ReactElement, useState } from "react";
import { HowToPlayModal } from "../HowToPlayModal";

interface HowToPlayButtonProps {
    children: ReactElement
    className: string
}

export function HowToPlayButton({ children, className }: HowToPlayButtonProps): JSX.Element {

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