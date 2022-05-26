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
        setIsGameLoading,
        Blank,
        squarePieces,
    } = useGame()

    useEffect(() => {
        setIsGameLoading(false)
    }, [])

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
                            onDragStart={(event) => handleDragStart(event.target, { setSquaredBeingDragged })}
                            onDragOver={(event) => event.preventDefault()}
                            onDragEnter={(event) => event.preventDefault()}
                            onDragLeave={(event) => event.preventDefault()}
                            onDrop={(event) => handleDrop(event.target, { setSquaredBeingReplaced })}
                            onTouchStart={(event) => handleDragStart(event.target, { setSquaredBeingDragged })}
                            onTouchMove={(event) => {
                                const eventTarget = document.elementFromPoint(
                                    event.nativeEvent.changedTouches[0].clientX,
                                    event.nativeEvent.changedTouches[0].clientY
                                )

                                if (squaredBeingReplaced != eventTarget) {
                                    handleDrop(eventTarget, { setSquaredBeingReplaced })
                                }
                            }}
                            onTouchEnd={() => handleDragEnd(
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
                                }
                            )}
                            onDragEnd={() => handleDragEnd(
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