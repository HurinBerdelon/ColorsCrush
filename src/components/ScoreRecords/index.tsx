import { useGame } from "../../hooks/useGame";
import { Container } from "./style";
import { v4 as uuidv4 } from 'uuid'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useEffect, useState } from "react";
import { GameSchema } from "../../schema/game";
import { api } from "../../services/api";
import dayjs from "dayjs";
import { db_frequency } from "../../config";

interface TableGameSchema extends GameSchema {
    currentGame: boolean
}

export function ScoreRecords(): JSX.Element {

    const { player, scoreDisplay } = useGame()
    const [historicalScores, setHistoricalScores] = useState<TableGameSchema[]>([])
    const [timestamp, setTimestamp] = useState(dayjs().unix())
    const [game, setGame] = useState<GameSchema>({
        id: uuidv4(),
        playerName: '',
        score: 0,
        theme: ''
    })

    function updateHistoricalScores(currentGame: GameSchema) {

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

    useEffect(() => {
        api.get('/prisma_api')
            .then(response => setHistoricalScores(response.data.games.map(game => {
                return {
                    id: game[3],
                    playerName: game[1],
                    score: game[0],
                    theme: game[2],
                    currentGame: false
                }
            }
            )))
    }, [])

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

            // api.post('/prisma_api', game)

            setTimestamp(currentTimestamp)
        }

        if (historicalScores.length > 0) updateHistoricalScores(game)
    }, [game])

    return (
        <Container>
            <div className="content">
                <div className="table">
                    <div className="title">
                        <p></p>
                        <p className="name">PLAYER</p>
                        <p className="theme">THEME</p>
                        <p className="score">SCORE</p>
                    </div>
                    {historicalScores
                        ? historicalScores.map((score, index) => (
                            <div key={score.id} className={`row place_${index + 1} ${score.currentGame ? 'coloredRow' : ''}`}>
                                <p className='place'>{index + 1}{index < 3 && <EmojiEventsIcon />}</p>
                                <p className="name">{score.playerName}</p>
                                <p className="theme">{score.theme}</p>
                                <p className="score">{score.score}</p>
                            </div>
                        ))
                        : null}
                </div>
            </div>
        </Container>
    )
}