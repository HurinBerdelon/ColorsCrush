import Head from "next/head";
import { useState } from "react";
import { GameBoard } from "../components/GameBoard";
import { ScoreBoard } from "../components/ScoreBoard";
import { ScoreRecords } from "../components/ScoreRecords";
import { StartGameModal } from "../components/StartGameModal";
import { GameBodyContainer } from "../styles/GlobalStyle";

export default function GamePage(): JSX.Element {

    const [isStartGameModalOpen, setIsStartGameModalOpen] = useState(true)

    function handleToggleStartGameModal() {
        setIsStartGameModalOpen(!isStartGameModalOpen)
    }

    return (
        <GameBodyContainer>
            <Head>
                <title>GameBoard | ColorsCrush</title>
            </Head>
            <StartGameModal
                isOpen={isStartGameModalOpen}
                onRequestClose={handleToggleStartGameModal}
            />
            <ScoreBoard />
            <GameBoard />
            <ScoreRecords />
        </GameBodyContainer>
    )
}
