import { useEffect } from "react"
import { useGame } from "../../hooks/useGame"

import { checkForRow } from "./gameFunctions/checkForRow"
import { checkForColumn } from "./gameFunctions/checkForColumn"
import { moveIntoSquareBelow } from "./gameFunctions/moveIntoSquareBelow"
import { createBoard } from "./gameFunctions/createBoard"
import { handleDragEnd } from "./gameFunctions/handles/handleDragEnd"
import { handleDragStart } from "./gameFunctions/handles/handleDragStart"
import { handleDrop } from "./gameFunctions/handles/handleDrop"

import { Container } from "./style"

export function GameBoard(): JSX.Element {

    const {
        currentPieceArrangement,
        setCurrentPieceArrangement,
        squaredBeingDragged,
        setSquaredBeingDragged,
        squaredBeingReplaced,
        setSquaredBeingReplaced,
        setScoreDisplay,
        isPlaying,
        Blank,
        squarePieces
    } = useGame()

    useEffect(() => {
        createBoard({ setCurrentPieceArrangement, squarePieces })
    }, [squarePieces])

    useEffect(() => {
        const timer = setInterval(() => {
            checkForColumn({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 5, isPlaying })
            checkForRow({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 5, isPlaying })
            checkForColumn({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 4, isPlaying })
            checkForRow({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 4, isPlaying })
            checkForColumn({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 3, isPlaying })
            checkForRow({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 3, isPlaying })
            moveIntoSquareBelow({ Blank, currentPieceArrangement, squarePieces })
            setCurrentPieceArrangement([...currentPieceArrangement])
        }, 50)
        return () => clearInterval(timer)

    }, [
        moveIntoSquareBelow,
        checkForColumn,
        checkForRow,
        currentPieceArrangement])

    return (
        <Container>
            <div className="app">
                <div className="game">
                    {currentPieceArrangement.map((candyColor, index: number) => (
                        <img
                            key={index}
                            src={candyColor}
                            alt={candyColor}
                            data-id={index}
                            draggable={isPlaying}
                            onDragStart={(event) => handleDragStart(event, { setSquaredBeingDragged })}
                            onDragOver={(event) => event.preventDefault()}
                            onDragEnter={(event) => event.preventDefault()}
                            onDragLeave={(event) => event.preventDefault()}
                            onDrop={(event) => handleDrop(event, { setSquaredBeingReplaced })}
                            onDragEnd={(event) => handleDragEnd(event,
                                {
                                    squaredBeingReplaced,
                                    setSquaredBeingReplaced,
                                    squaredBeingDragged,
                                    setSquaredBeingDragged,
                                    currentPieceArrangement,
                                    setCurrentPieceArrangement,
                                    Blank,
                                    isPlaying,
                                    setScoreDisplay,
                                })}
                        />
                    ))}
                </div>
            </div>

        </Container>
    )
}