import { useEffect } from "react"
import { boardWidth } from "../../../config"
import { useGame } from "../../../hooks/useGame"

interface checkForRowProps {
    currentPieceArrangement: string[]
    Blank: string
    setScoreDisplay(score): void
    sequenceOf: number
    isPlaying: boolean
}

export function checkForRow({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf, isPlaying }: checkForRowProps): boolean {

    // Find fields that should not be watched for current sequenceOf 
    const notValid: number[] = []

    for (let i = 1; i <= boardWidth; i++) {

        for (let j = 1; j < sequenceOf; j++) {
            notValid.push(boardWidth * i - 1 * j)
        }
    }

    for (let i = 0; i < 64; i++) {

        const row: number[] = []

        // creates a row with a 'sequenceOf' elements
        for (let j = 0; j < sequenceOf; j++) {
            row.push(i + (j))
        }

        const decidedPiece = currentPieceArrangement[i]
        const isBlank = currentPieceArrangement[i] === Blank

        if (notValid.includes(i)) continue

        // check if every sequenceOf elements are the same
        if (row.every(square => currentPieceArrangement[square] === decidedPiece && !isBlank)) {

            if (isPlaying) setScoreDisplay((scoreDisplay: number) => scoreDisplay + sequenceOf * (sequenceOf - 2))
            row.forEach(square => currentPieceArrangement[square] = Blank)
            return true
        }
    }
}