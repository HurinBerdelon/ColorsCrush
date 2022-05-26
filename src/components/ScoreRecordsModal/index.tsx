import { useEffect } from "react";
import Modal from "react-modal";
import { ScoreBoard } from "../ScoreBoard";
import { ScoreRecords, TableGameSchema } from "../ScoreRecords";
import { Container } from "./style";

interface ScoreRecordsModalProps {
    isOpen: boolean
    onRequestClose(): void
    historicalScores: TableGameSchema[]
}

export function ScoreRecordsModal({ isOpen, onRequestClose, historicalScores }: ScoreRecordsModalProps): JSX.Element {

    useEffect(() => {
        Modal.setAppElement(document.getElementById('__next'))
    }, [])

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >

            <button
                type='button'
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src='/assets/close.svg' alt="close-modal-button" />
            </button>

            <Container>
                <ScoreRecords historical={historicalScores} />
            </Container>
        </Modal>
    )
}