import { useTranslation } from 'next-i18next'
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
    const { t } = useTranslation()

    useEffect(() => {
        Modal.setAppElement(document.getElementById('__next'))
    }, [])

    return (
        <Modal
            isOpen={isOpen}
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
                        {t('gameboard:click-to-play')}
                    </button>
                </div>

                <HowToPlayButton>
                    <h4>{t('gameboard:click-here-for-instructions')}</h4>
                </HowToPlayButton>
            </Container>

        </Modal>
    )
}