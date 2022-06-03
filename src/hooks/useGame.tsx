import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { GameSchema } from "../schema/game";
import { PlayerSchema } from "../schema/player";
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from "next/router";
import { LOCALSTORE_KEY, squarePiecesTemplate } from "../config";

const Blank = '/images/blank.png'

interface GameContextData {
    boardImages: string[]
    setBoardImages(images: string[]): void
    currentPieceArrangement: string[]
    setCurrentPieceArrangement(pieces: string[]): void
    squaredBeingDragged: HTMLImageElement
    setSquaredBeingDragged(square: HTMLImageElement): void
    squaredBeingReplaced: HTMLImageElement
    setSquaredBeingReplaced(square: HTMLImageElement): void
    scoreDisplay: number
    setScoreDisplay(score): void
    isPlaying: boolean
    setIsPlaying(isPlaying: boolean): void
    isGameLoading: boolean
    setIsGameLoading(isGameLoading: boolean): void
    Blank: string
    player: PlayerSchema
    setPlayer(player: PlayerSchema): void
    squarePieces: string[]
    setSquarePieces(squarePieces: string[]): void
    game: GameSchema,
    setGame(game: GameSchema): void
}

interface GameProviderProps {
    children: ReactNode
}

const GameContext = createContext<GameContextData>(
    {} as GameContextData
)

export function GameProvider({ children }: GameProviderProps) {

    // Game states
    const [boardImages, setBoardImages] = useState<string[]>([])
    const [currentPieceArrangement, setCurrentPieceArrangement] = useState([])
    const [squaredBeingDragged, setSquaredBeingDragged] = useState(null)
    const [squaredBeingReplaced, setSquaredBeingReplaced] = useState(null)
    const [scoreDisplay, setScoreDisplay] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isGameLoading, setIsGameLoading] = useState(false)

    // Player States
    const [player, setPlayer] = useState<PlayerSchema>()
    const [squarePieces, setSquarePieces] = useState<string[]>([])
    const [game, setGame] = useState<GameSchema>({
        id: uuidv4(),
        playerName: '',
        score: 0,
        theme: ''
    })

    const router = useRouter()

    useEffect(() => {
        if (!player) {
            const playerSaved = JSON.parse(localStorage.getItem(`player_${LOCALSTORE_KEY}`))
            if (playerSaved) {
                setPlayer(playerSaved)
            } else {
                router.push('/')
            }
        }

    }, [])

    useEffect(() => {
        if (player) {
            setSquarePieces(squarePiecesTemplate[player.currentTheme])
        }

    }, [player])

    return (
        <GameContext.Provider
            value={{
                boardImages,
                setBoardImages,
                currentPieceArrangement,
                setCurrentPieceArrangement,
                squaredBeingDragged,
                setSquaredBeingDragged,
                squaredBeingReplaced,
                setSquaredBeingReplaced,
                scoreDisplay,
                setScoreDisplay,
                isPlaying,
                setIsPlaying,
                isGameLoading,
                setIsGameLoading,
                Blank,
                player,
                setPlayer,
                squarePieces,
                setSquarePieces,
                game,
                setGame,
            }}
        >
            {children}
        </GameContext.Provider>
    )
}

export function useGame() {
    return useContext(GameContext)
}