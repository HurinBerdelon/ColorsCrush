import { GetServerSideProps } from "next";
import { useState } from "react";
import Head from "next/head";
import HelpIcon from '@mui/icons-material/Help';
import { Widget } from "../components/Feedback/Widget";
import { GameBoard } from "../components/GameBoard";
import { HowToPlayButton } from "../components/HowToPlay/HowToPlayButton";
import { ScoreBoard } from "../components/ScoreBoard";
import { ScoreRecords, TableGameSchema } from "../components/ScoreRecords";
import { StartGameModal } from "../components/StartGameModal";
import { api } from "../services/api";
import { GameBodyContainer } from "../styles/GlobalStyle";


interface GamePageProps {
    historicalScores: TableGameSchema[]
}

export default function GamePage({ historicalScores }: GamePageProps): JSX.Element {

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
            <ScoreRecords historical={historicalScores} />
            <Widget />

            <HowToPlayButton className="howToPlayButton">
                <HelpIcon />
            </HowToPlayButton>

        </GameBodyContainer>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {

    const response = await api.get(`${process.env.HOME_PAGE_URL}/api/prisma_api`)

    const historicalScores: TableGameSchema[] = response.data.games.map(game => {
        return {
            id: game[3],
            playerName: game[1],
            score: game[0],
            theme: game[2],
            currentGame: false
        }
    })

    return {
        props: {
            historicalScores
        }
    }
}