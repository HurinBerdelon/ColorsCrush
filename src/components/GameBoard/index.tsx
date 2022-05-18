import { useEffect } from "react"
import { Container } from "../../styles/GlobalStyle"
import { useGame } from "../../hooks/useGame"

import { checkForRow } from "./gameFunctions/checkForRow"
import { checkForColumn } from "./gameFunctions/checkForColumn"
import { moveIntoSquareBelow } from "./gameFunctions/moveIntoSquareBelow"
import { createBoard } from "./gameFunctions/createBoard"
import { handleDragEnd } from "./gameFunctions/handles/handleDragEnd"
import { handleDragStart } from "./gameFunctions/handles/handleDragStart"
import { handleDrop } from "./gameFunctions/handles/handleDrop"

import { ScoreBoard } from "../ScoreBoard"

import Hanzo from '../../images/hanzo.png'
import Lucio from '../../images/lucio.png'
import Mei from '../../images/mei.png'
import DVA from '../../images/dva.png'
import Reaper from '../../images/reaper.png'
import Sombra from '../../images/sombra.png'
import Blank from '../../images/blank.png'

import Purple from '../../images/colors/purple.png'
import Yellow from '../../images/colors/yellow.png'
import Red from '../../images/colors/red.png'
import Blue from '../../images/colors/blue.png'
import Green from '../../images/colors/green.png'
import Orange from '../../images/colors/orange.png'

export const squarePieces = [
    Purple,
    Yellow,
    Red,
    Blue,
    Green,
    Orange,
]

export function GameBoard(): JSX.Element {

    const {
        currentPieceArrangement,
        setCurrentPieceArrangement,
        squaredBeingDragged,
        setSquaredBeingDragged,
        squaredBeingReplaced,
        setSquaredBeingReplaced,
        scoreDisplay,
        setScoreDisplay
    } = useGame()

    useEffect(() => {
        createBoard({ setCurrentPieceArrangement })
    }, [])

    useEffect(() => {

        const timer = setInterval(() => {
            checkForColumn({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 5 })
            checkForRow({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 5 })
            checkForColumn({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 4 })
            checkForRow({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 4 })
            checkForColumn({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 3 })
            checkForRow({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf: 3 })
            moveIntoSquareBelow({ Blank, currentPieceArrangement })
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
                            draggable={true}
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
                                    setScoreDisplay
                                })}
                        />
                    ))}
                </div>
            </div>

            <ScoreBoard />
        </Container>
    )
}