import { useEffect } from 'react'
import Modal from 'react-modal'
import { useGame } from '../../hooks/useGame'
import { Container } from './style'

interface StartGameModalProps {
    isOpen: boolean
    onRequestClose(): void
}

export function StartGameModal({ isOpen, onRequestClose }: StartGameModalProps): JSX.Element {

    const { setIsPlaying } = useGame()

    useEffect(() => {
        Modal.setAppElement(document.getElementById('__next'))
    }, [])

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => { }}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <Container>
                <button
                    onClick={() => {
                        setIsPlaying(true)
                        onRequestClose()
                    }}
                >
                    Click to Play
                </button>
            </Container>
        </Modal>
    )
}