import { useEffect, useState } from "react";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import dayjs from "dayjs";
import { Container } from "./style";
import { useGame } from "../../hooks/useGame";
import { GameSchema } from "../../schema/game";
import { api } from "../../services/api";
import { db_frequency } from "../../config";

export interface TableGameSchema extends GameSchema {
    currentGame: boolean
}

interface ScoreRecordsProps {
    historical: TableGameSchema[]
}

export function ScoreRecords({ historical }: ScoreRecordsProps): JSX.Element {

    const { player, scoreDisplay, game, setGame } = useGame()
    const [historicalScores, setHistoricalScores] = useState<TableGameSchema[]>(historical)
    const [timestamp, setTimestamp] = useState(dayjs().unix())

    function updateHistoricalScores(currentGame: GameSchema) {

        if (historicalScores.length === 0) {
            if (currentGame.score > 0) {
                historicalScores.push({
                    ...currentGame,
                    currentGame: true
                })
                setHistoricalScores(historicalScores)
            }
            return
        } else if (historicalScores.length < 10 && historicalScores.length !== 0 && currentGame.score > 0) {
            const game = historicalScores.find(item => item.id === currentGame.id)

            if (!game) {
                historicalScores.push({
                    ...currentGame,
                    currentGame: true
                })
                setHistoricalScores(historicalScores)
            } else {
                const index = historicalScores.indexOf(game)
                historicalScores[index] = { ...currentGame, currentGame: true }
                historicalScores.sort((a, b) => {
                    return a.score > b.score ? -1 : a.score < b.score ? 1 : 0
                })
                setHistoricalScores(historicalScores)
            }
        } else {
            if (historicalScores[historicalScores.length - 1].score < currentGame.score) {
                const game = historicalScores.find(item => item.id === currentGame.id)

                if (!game) {
                    historicalScores.pop()
                    historicalScores.push({
                        ...currentGame,
                        currentGame: true
                    })
                    setHistoricalScores(historicalScores)
                } else {
                    const index = historicalScores.indexOf(game)
                    historicalScores[index] = { ...currentGame, currentGame: true }
                    historicalScores.sort((a, b) => {
                        return a.score > b.score ? -1 : a.score < b.score ? 1 : 0
                    })
                    setHistoricalScores(historicalScores)
                }
            }
        }


    }

    useEffect(() => {
        if (player) {
            setGame({
                ...game,
                playerName: player.name,
                score: scoreDisplay,
                theme: player.currentTheme
            })
        }
    }, [scoreDisplay])

    // Everytime the game changes, check if has passed db_frequency seconds and updates database
    useEffect(() => {
        const currentTimestamp = dayjs().unix()

        if (game && game.score > 0 && (currentTimestamp - timestamp) >= db_frequency) {

            api.post('/prisma_api', game)

            setTimestamp(currentTimestamp)
        }

        updateHistoricalScores(game)
    }, [game])

    return (
        <Container>
            <div className="content">
                <div className="table">
                    <div className="title">
                        <p></p>
                        <p className="name">PLAYER</p>
                        <p className="score">SCORE</p>
                    </div>
                    {historicalScores
                        ? historicalScores.map((score, index) => (
                            <div key={score.id} className={`row place_${index + 1} ${score.currentGame ? 'coloredRow' : ''}`}>
                                <p className='place'>{index + 1}{index < 3 && <EmojiEventsIcon />}</p>
                                <p className="name">{score.playerName}</p>
                                <p className="score">{score.score}</p>
                            </div>
                        ))
                        : null}
                </div>
            </div>
        </Container>
    )
}