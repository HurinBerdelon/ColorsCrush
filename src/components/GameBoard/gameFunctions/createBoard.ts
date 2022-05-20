import { boardWidth } from "../../../config"


interface createBoardProps {
    setCurrentPieceArrangement(pieces: string[]): void
    squarePieces: string[]
}

export function createBoard({ squarePieces, setCurrentPieceArrangement }: createBoardProps): void {

    const randomPieceArrangement = []

    for (let i = 0; i < boardWidth * boardWidth; i++) {
        const randomPiece = squarePieces[Math.floor(Math.random() * squarePieces.length)]
        randomPieceArrangement.push(randomPiece)
    }

    setCurrentPieceArrangement(randomPieceArrangement)
}