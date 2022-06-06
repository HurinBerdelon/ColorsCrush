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
import { HomeButton } from "../components/HomeButton";
import { ScoreRecordsModal } from "../components/ScoreRecordsModal";
import { ScoreRecordsModalButton } from "../components/ScoreRecordsModal/ScoreRecordsModalButton";
import { ToastContainer } from "react-toastify";
import { ThemeRewardModal } from "../components/ThemeRewardModal";
import { useTheme } from "../hooks/useTheme";
import { ThemeProvider } from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface GamePageProps {
    historicalScores: TableGameSchema[]
}

export default function GamePage({ historicalScores }: GamePageProps): JSX.Element {

    const [isStartGameModalOpen, setIsStartGameModalOpen] = useState(true)
    const [isScoreRecordsModalOpen, setIsScoreRecordsModalOpen] = useState(false)
    const [isThemeRewardModalOpen, setIsThemeRewardModalOpen] = useState(false)
    const { theme } = useTheme()

    function handleToggleStartGameModal() {
        setIsStartGameModalOpen(!isStartGameModalOpen)
    }

    function handleOpenScoreRecordsModal() {
        setIsScoreRecordsModalOpen(!isScoreRecordsModalOpen)
    }

    function handleOpenThemeRewardModal(opening = false) {

        if (opening) {
            setIsThemeRewardModalOpen(true)
        } else {
            setIsThemeRewardModalOpen(!isThemeRewardModalOpen)
        }
    }

    return (
        <ThemeProvider
            theme={theme}
        >

            <GameBodyContainer>
                <ToastContainer />
                <Head>
                    <title>GameBoard | ColorsCrush</title>
                    <meta name="viewport" content=
                        "width=device-width, user-scalable=no" />
                </Head>
                <StartGameModal
                    isOpen={isStartGameModalOpen}
                    onRequestClose={handleToggleStartGameModal}
                />

                <ScoreRecordsModal
                    isOpen={isScoreRecordsModalOpen}
                    onRequestClose={handleOpenScoreRecordsModal}
                    historicalScores={historicalScores}
                />

                <ThemeRewardModal
                    isOpen={isThemeRewardModalOpen}
                    onRequestClose={handleOpenThemeRewardModal}
                />

                <HomeButton />

                <ScoreBoard handleOpenThemeRewardModal={handleOpenThemeRewardModal} />
                <GameBoard />
                <ScoreRecords historical={historicalScores} />
                <ScoreRecordsModalButton handleOpenScoreRecordsModal={handleOpenScoreRecordsModal} />
                <Widget />

                <HowToPlayButton>
                    <HelpIcon />
                </HowToPlayButton>
            </GameBodyContainer>
        </ThemeProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {

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
            historicalScores,
            ...(await serverSideTranslations(locale, ['gameboard', 'feedback']))
        }
    }
}