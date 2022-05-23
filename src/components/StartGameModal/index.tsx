import { useEffect } from 'react'
import Modal from 'react-modal'
import { useGame } from '../../hooks/useGame'
import { HowToPlayButton } from '../HowToPlay/HowToPlayButton'
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
                <div className="playButton">

                    <button
                        onClick={() => {
                            setIsPlaying(true)
                            onRequestClose()
                        }}
                    >
                        Click to Play
                    </button>
                </div>

                <HowToPlayButton className='howToPlayButton'>
                    <h4>Click Here for Instructions</h4>
                </HowToPlayButton>
            </Container>

        </Modal>
    )
}