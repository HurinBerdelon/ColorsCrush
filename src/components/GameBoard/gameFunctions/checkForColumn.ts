import { boardWidth } from "../../../config"

interface checkForColumnProps {
    currentPieceArrangement: string[]
    Blank: string
    setScoreDisplay(score): void
    sequenceOf: number
    isPlaying: boolean
}

export function checkForColumn({ currentPieceArrangement, Blank, sequenceOf, setScoreDisplay, isPlaying }: checkForColumnProps): boolean {
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

        // check if every sequenceOf elements are the same
        if (column.every(square => currentPieceArrangement[square] === decidedPiece && !isBlank)) {

            if (isPlaying) setScoreDisplay((score: number) => score + sequenceOf)
            column.forEach(square => currentPieceArrangement[square] = Blank)
            return true
        }
    }
}