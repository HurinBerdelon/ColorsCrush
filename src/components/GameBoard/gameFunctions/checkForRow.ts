import { useGame } from "../../../hooks/useGame"

interface checkForRowProps {
    currentPieceArrangement: string[]
    Blank: string
    setScoreDisplay(score): void
    sequenceOf: number
}

export function checkForRow({ currentPieceArrangement, Blank, setScoreDisplay, sequenceOf }: checkForRowProps) {

    for (let i = 0; i < 64; i++) {

        const row: number[] = []

        for (let j = 0; j < sequenceOf; j++) {
            row.push(i + (j))
        }
        // console.log(row)

        // if (sequenceOf === 3) {
        //     row = [i, i + 1, i + (1 * 2)]
        // } else if (sequenceOf === 4) {

        // }
        // row = sequenceOf === 3 && [i, i + 1, i + (1 * 2)]
        // row = sequenceOf === 4 && [i, i + 1, i + (1 * 2), i + (1 * 3)]
        // row = sequenceOf === 3 && [i, i + 1, i + (1 * 2), i + (1 * 3), i + (1 * 4)]
        // console.log(row)

        // const rowOfFour = [i, i + 1, i + 1 * 2, i + 1 * 3]
        const decidedColor = currentPieceArrangement[i]
        const isBlank = currentPieceArrangement[i] === Blank

        const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]

        if (notValid.includes(i)) continue

        // check if every 3 elements are the same
        if (row.every(square => currentPieceArrangement[square] === decidedColor && !isBlank)) {
            setScoreDisplay((scoreDisplay: number) => scoreDisplay + 4)
            row.forEach(square => currentPieceArrangement[square] = Blank)
            return true
        }
    }

    // ##############################

    // for (let i = 0; i < 64; i++) {
    //     const rowOfThree = [i, i + 1, i + 1 * 2]
    //     const decidedColor = currentColorArrangement[i]
    //     const isBlank = currentColorArrangement[i] === Blank

    //     const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]

    //     if (notValid.includes(i)) continue

    //     // check if every 3 elements are the same
    //     if (rowOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
    //         setScoreDisplay(scoreDisplay => scoreDisplay + 3)
    //         rowOfThree.forEach(square => currentColorArrangement[square] = Blank)
    //         return true
    //     }
    // }
}