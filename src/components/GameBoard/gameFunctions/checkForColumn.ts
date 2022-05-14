import { boardWidth } from "../../../config"

interface checkForColumnProps {
    currentPieceArrangement: string[]
    Blank: string
    setScoreDisplay(score): void
    sequenceOf: number
}

export function checkForColumn({ currentPieceArrangement, Blank, sequenceOf, setScoreDisplay }: checkForColumnProps): boolean {
    // The last element to be checked is the last element of the board without the last (sequenceOf - 1) rows.
    const lastElementToBeChecked = ((boardWidth ** 2) - 1) - boardWidth * (sequenceOf - 1)

    for (let i = 0; i <= lastElementToBeChecked; i++) {

        const column: number[] = []

        // Fill the column array with a sequenceOf elements
        for (let j = 0; j < sequenceOf; j++) {
            column.push(i + boardWidth * j)
        }

        const decidedPiece = currentPieceArrangement[i]
        const isBlank = currentPieceArrangement[i] === Blank

        // check if every 3 elements are the same
        if (column.every(square => currentPieceArrangement[square] === decidedPiece && !isBlank)) {
            setScoreDisplay((score: number) => score + 4)
            column.forEach(square => currentPieceArrangement[square] = Blank)
            return true
        }
    }
}