import { DragEvent, useEffect } from "react"
import { useState } from "react"
import Hanzo from '../../images/hanzo.png'
import Lucio from '../../images/lucio.png'
import Mei from '../../images/mei.png'
import DVA from '../../images/dva.png'
import Reaper from '../../images/reaper.png'
import Sombra from '../../images/sombra.png'
import Blank from '../../images/blank.png'
import { ScoreBoard } from "../ScoreBoard"
import { Container } from "../../styles/GlobalStyle"
import { useGame } from "../../hooks/useGame"
import { boardWitdh } from "../../config"
import { checkForRow as checkForRowOfFour } from "./gameFunctions/checkForRow"

const width = boardWitdh
const candyColors = [
    Hanzo,
    Lucio,
    Mei,
    DVA,
    Reaper,
    Sombra,
]

export function GameBoard(): JSX.Element {

    const {
        currentPieceArrangement: currentColorArrangement,
        setCurrentPieceArrangement: setCurrentColorArrangement,
        squaredBeingDragged,
        setSquaredBeingDragged,
        squaredBeingReplaced,
        setSquaredBeingReplaced,
        scoreDisplay,
        setScoreDisplay
    } = useGame()

    function checkForColumnOfFour() {
        for (let i = 0; i <= 39; i++) {
            const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
            const decidedColor = currentColorArrangement[i]
            const isBlank = currentColorArrangement[i] === Blank

            // check if every 3 elements are the same
            if (columnOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
                setScoreDisplay((score: number) => score + 4)
                columnOfFour.forEach(square => currentColorArrangement[square] = Blank)
                return true
            }
        }
    }

    function checkForColumnOfThree() {
        for (let i = 0; i <= 47; i++) {
            const columnOfThree = [i, i + width, i + width * 2]
            const decidedColor = currentColorArrangement[i]
            const isBlank = currentColorArrangement[i] === Blank

            // check if every 3 elements are the same
            if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
                setScoreDisplay(scoreDisplay => scoreDisplay + 3)
                columnOfThree.forEach(square => currentColorArrangement[square] = Blank)
                return true
            }
        }
    }

    // function checkForRowOfFour() {
    //     for (let i = 0; i < 64; i++) {
    //         const rowOfFour = [i, i + 1, i + 1 * 2, i + 1 * 3]
    //         const decidedColor = currentColorArrangement[i]
    //         const isBlank = currentColorArrangement[i] === Blank

    //         const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]

    //         if (notValid.includes(i)) continue

    //         // check if every 3 elements are the same
    //         if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
    //             setScoreDisplay(scoreDisplay => scoreDisplay + 4)
    //             rowOfFour.forEach(square => currentColorArrangement[square] = Blank)
    //             return true
    //         }
    //     }
    // }

    function checkForRowOfThree() {
        for (let i = 0; i < 64; i++) {
            const rowOfThree = [i, i + 1, i + 1 * 2]
            const decidedColor = currentColorArrangement[i]
            const isBlank = currentColorArrangement[i] === Blank

            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]

            if (notValid.includes(i)) continue

            // check if every 3 elements are the same
            if (rowOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
                setScoreDisplay(scoreDisplay => scoreDisplay + 3)
                rowOfThree.forEach(square => currentColorArrangement[square] = Blank)
                return true
            }
        }
    }

    function moveIntoSquareBelow() {
        for (let i = 0; i < 64 - width; i++) {

            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
            const isFirstRow = firstRow.includes(i)

            if (isFirstRow && currentColorArrangement[i] === Blank) {
                currentColorArrangement[i] = candyColors[Math.floor(Math.random() * candyColors.length)]
            }

            if ((currentColorArrangement[i + width]) === Blank) {
                currentColorArrangement[i + width] = currentColorArrangement[i]
                currentColorArrangement[i] = Blank
            }
        }
    }

    function dragStart(event) {
        setSquaredBeingDragged(event.target)
    }

    function dragDrop(event) {
        setSquaredBeingReplaced(event.target)
    }

    function dragEnd(event) {
        const squareBeingReplacedId = parseInt(squaredBeingReplaced.getAttribute('data-id'))
        const squareBeingDraggedId = parseInt(squaredBeingDragged.getAttribute('data-id'))

        currentColorArrangement[squareBeingReplacedId] = squaredBeingDragged.getAttribute('src')
        currentColorArrangement[squareBeingDraggedId] = squaredBeingReplaced.getAttribute('src')

        const validMoves = [
            squareBeingDraggedId - 1,
            squareBeingDraggedId - width,
            squareBeingDraggedId + 1,
            squareBeingDraggedId + width,
        ]

        const validMove = validMoves.includes(squareBeingReplacedId)

        const isColumnOfFour = checkForColumnOfFour()
        const isRowOfFour = checkForRowOfFour({ currentPieceArrangement: currentColorArrangement, Blank, setScoreDisplay, sequenceOf: 4 })
        const isColumnOfThree = checkForColumnOfThree()
        const isRowOfThree = checkForRowOfThree()

        if (squareBeingReplacedId && validMove && (isColumnOfFour || isColumnOfThree || isRowOfFour || isRowOfThree)) {
            setSquaredBeingDragged(null)
            setSquaredBeingReplaced(null)
        } else {
            currentColorArrangement[squareBeingReplacedId] = squaredBeingReplaced.getAttribute('src')
            currentColorArrangement[squareBeingDraggedId] = squaredBeingDragged.getAttribute('src')
            setCurrentColorArrangement([...currentColorArrangement])
        }
    }

    function createBoard() {

        const randomColorArrangement = []

        for (let i = 0; i < width * width; i++) {
            const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
            randomColorArrangement.push(randomColor)
        }

        setCurrentColorArrangement(randomColorArrangement)
    }

    useEffect(() => {
        createBoard()
    }, [])

    useEffect(() => {

        const timer = setInterval(() => {
            checkForColumnOfFour()
            checkForRowOfFour({ currentPieceArrangement: currentColorArrangement, Blank, setScoreDisplay, sequenceOf: 4 })
            checkForColumnOfThree()
            checkForRowOfThree()
            moveIntoSquareBelow()
            setCurrentColorArrangement([...currentColorArrangement])
        }, 50)
        return () => clearInterval(timer)

    }, [checkForColumnOfThree,
        moveIntoSquareBelow,
        checkForColumnOfFour,
        checkForRowOfThree,
        checkForRowOfFour, currentColorArrangement])

    return (
        <Container>
            <div className="app">
                <div className="game">
                    {currentColorArrangement.map((candyColor, index: number) => (
                        <img
                            key={index}
                            src={candyColor}
                            alt={candyColor}
                            data-id={index}
                            draggable={true}
                            onDragStart={dragStart}
                            onDragOver={(event) => event.preventDefault()}
                            onDragEnter={(event) => event.preventDefault()}
                            onDragLeave={(event) => event.preventDefault()}
                            onDrop={dragDrop}
                            onDragEnd={dragEnd}
                        />
                    ))}
                </div>
            </div>

            <ScoreBoard score={scoreDisplay} />
        </Container>
    )
}