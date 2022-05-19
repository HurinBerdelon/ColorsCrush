import Head from "next/head";
import { useState } from "react";
import { GameBoard } from "../components/GameBoard";
import { ScoreBoard } from "../components/ScoreBoard";
import { StartGameModal } from "../components/StartGameModal";
import { ThemeCard } from "../components/ThemeCard";
import { GameProvider } from "../hooks/useGame";

export default function Home(): JSX.Element {

    const [isStartGameModalOpen, setIsStartGameModalOpen] = useState(true)

    function handleToggleStartGameModal() {
        setIsStartGameModalOpen(!isStartGameModalOpen)
    }

    return (
        <GameProvider>
            <Head>
                <title>ColorsCrush</title>
            </Head>
            <StartGameModal
                isOpen={isStartGameModalOpen}
                onRequestClose={handleToggleStartGameModal}
            />
            <ScoreBoard />
            <GameBoard />
            {/* <ThemeCard /> */}
        </GameProvider>
    )
}
