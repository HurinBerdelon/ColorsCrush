import { createContext, ReactNode, useContext, useState } from "react";

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
}

interface GameProviderProps {
    children: ReactNode
}

const GameContext = createContext<GameContextData>(
    {} as GameContextData
)

export function GameProvider({ children }: GameProviderProps) {

    const [boardImages, setBoardImages] = useState<string[]>([])
    const [currentPieceArrangement, setCurrentPieceArrangement] = useState([])
    const [squaredBeingDragged, setSquaredBeingDragged] = useState(null)
    const [squaredBeingReplaced, setSquaredBeingReplaced] = useState(null)
    const [scoreDisplay, setScoreDisplay] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    // const [playerName, setPlayerName] = useState('')

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
                Blank
            }}
        >
            {children}
        </GameContext.Provider>
    )
}

export function useGame() {
    return useContext(GameContext)
}