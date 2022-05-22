import { useEffect } from 'react'
import Modal from 'react-modal'
import { Container } from './style'

interface HowToPlayModalProps {
    isHowToPlayModalOpen: boolean
    handleCloseHowToPlayModal(): void
}

export function HowToPlayModal({ handleCloseHowToPlayModal, isHowToPlayModalOpen }: HowToPlayModalProps): JSX.Element {

    useEffect(() => {
        Modal.setAppElement(document.getElementById('__next'))
    }, [])

    return (
        <Modal
            isOpen={isHowToPlayModalOpen}
            onRequestClose={handleCloseHowToPlayModal}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <Container>
                <h2>How To Play:</h2>
                <ul>
                    <li>
                        Move the circles to make rows or columns with 3, 4 or 5 of the same color and score points.
                    </li>
                    <li>
                        Circles can be moved one square up, down, left or right.
                    </li>
                    <li>
                        On Moving a circle it will change place with another one if a match of 3, 4 or 5 is reached.
                    </li>
                    <li>
                        Everytime a match is reached the circles of that color will disappear and the board will refill.
                    </li>
                    <li>
                        Matchs of 5 give 15 points, matchs of 4 give 8 points and matchs of 3 give 3 points.
                    </li>
                    <li>
                        Your score is saved every 15 seconds, once you reach the top 10 scores.
                    </li>
                </ul>
            </Container>
        </Modal>

    )
}