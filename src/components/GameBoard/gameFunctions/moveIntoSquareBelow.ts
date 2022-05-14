import { squarePieces } from ".."
import { boardWidth } from "../../../config"

interface moveIntoSquareBelowProps {
    currentPieceArrangement: string[]
    Blank: string
}

export function moveIntoSquareBelow({ Blank, currentPieceArrangement }: moveIntoSquareBelowProps): void {

    const firstRow: number[] = []

    for (let i = 0; i < boardWidth; i++) {
        firstRow.push(i)
    }

    for (let i = 0; i < (boardWidth ** 2 - boardWidth); i++) {

        const isFirstRow = firstRow.includes(i)

        // Create a new piece on empty space on first row
        if (isFirstRow && currentPieceArrangement[i] === Blank) {
            currentPieceArrangement[i] = squarePieces[Math.floor(Math.random() * squarePieces.length)]
        }

        // Move piece into empty space below if not first row
        if ((currentPieceArrangement[i + boardWidth]) === Blank) {
            currentPieceArrangement[i + boardWidth] = currentPieceArrangement[i]
            currentPieceArrangement[i] = Blank
        }
    }
}