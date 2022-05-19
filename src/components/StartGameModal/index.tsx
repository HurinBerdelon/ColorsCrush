import Modal from 'react-modal'
import { useGame } from '../../hooks/useGame'
import { Container } from './style'

interface StartGameModalProps {
    isOpen: boolean
    onRequestClose(): void
}

export function StartGameModal({ isOpen, onRequestClose }: StartGameModalProps): JSX.Element {

    const { setIsPlaying } = useGame()

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            // appElement={document.getElementById('app_root') as HTMLElement}
            className='react-modal-content'
        >
            <Container>

                <button
                    onClick={() => {
                        setIsPlaying(true)
                        onRequestClose()
                    }}
                >
                    Click to play
                </button>
            </Container>
        </Modal>
    )
}