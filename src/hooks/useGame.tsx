import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { squarePiecesTemplate } from "../config";
import { PlayerSchema } from "../schema/player";

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
    Blank: string
    player: PlayerSchema
    setPlayer(player: PlayerSchema): void
    squarePieces: string[]
    setSquarePieces(squarePieces: string[]): void
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

    // Player States
    const [player, setPlayer] = useState<PlayerSchema>()
    const [squarePieces, setSquarePieces] = useState<string[]>([])

    useEffect(() => {
        const player: PlayerSchema = JSON.parse(localStorage.getItem('colors-crush-player'))
        if (player) {
            setPlayer(player)
            setSquarePieces(squarePiecesTemplate[player.currentTheme])
        }
    }, [])

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
                Blank,
                player,
                setPlayer,
                squarePieces,
                setSquarePieces
            }}
        >
            {children}
        </GameContext.Provider>
    )
}

export function useGame() {
    return useContext(GameContext)
}