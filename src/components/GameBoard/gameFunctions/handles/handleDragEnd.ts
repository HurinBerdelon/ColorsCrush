import { boardWidth } from "../../../../config"
import { checkForColumn } from "../checkForColumn"
import { checkForRow } from "../checkForRow"

interface handleDragEndProps {
    squaredBeingReplaced: HTMLImageElement
    setSquaredBeingReplaced(square: HTMLImageElement): void
    squaredBeingDragged: HTMLImageElement
    setSquaredBeingDragged(square: HTMLImageElement): void
    currentPieceArrangement: string[]
    setCurrentPieceArrangement(pieces: string[]): void
    Blank: string
    isPlaying: boolean
    setScoreDisplay(score): void

}

export function handleDragEnd(
    {
        currentPieceArrangement,
        setCurrentPieceArrangement,
        squaredBeingDragged,
        setSquaredBeingDragged,
        squaredBeingReplaced,
        setSquaredBeingReplaced,
        Blank,
        isPlaying,
        setScoreDisplay
    }: handleDragEndProps): void {

    // if user tries to drop a piece outside the table, it will return and leave the function
    if (!squaredBeingReplaced) return

    const squareBeingReplacedId = parseInt(squaredBeingReplaced.getAttribute('data-id'))
    const squareBeingDraggedId = parseInt(squaredBeingDragged.getAttribute('data-id'))

    const validMoves = [
        squareBeingDraggedId - 1,
        squareBeingDraggedId - boardWidth,
        squareBeingDraggedId + 1,
        squareBeingDraggedId + boardWidth,
    ]

    const validMove = validMoves.includes(squareBeingReplacedId)

    if (validMove) {
        currentPieceArrangement[squareBeingReplacedId] = squaredBeingDragged.getAttribute('src')
        currentPieceArrangement[squareBeingDraggedId] = squaredBeingReplaced.getAttribute('src')
    }

    const isColumnOfFive = checkForColumn({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 5, isPlaying })
    const isRowOfFive = checkForRow({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 5, isPlaying })
    const isColumnOfFour = checkForColumn({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 4, isPlaying })
    const isRowOfFour = checkForRow({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 4, isPlaying })
    const isColumnOfThree = checkForColumn({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 3, isPlaying })
    const isRowOfThree = checkForRow({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 3, isPlaying })

    if (squareBeingReplacedId && validMove &&
        (isColumnOfFour || isColumnOfThree || isRowOfFour || isRowOfThree || isColumnOfFive || isRowOfFive)
    ) {
        setSquaredBeingDragged(null)
        setSquaredBeingReplaced(null)
    } else {
        currentPieceArrangement[squareBeingReplacedId] = squaredBeingReplaced.getAttribute('src')
        currentPieceArrangement[squareBeingDraggedId] = squaredBeingDragged.getAttribute('src')
        setCurrentPieceArrangement([...currentPieceArrangement])
    }
}