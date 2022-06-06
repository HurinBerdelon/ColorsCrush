import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'
import Modal from 'react-modal'
import { db_frequency } from '../../../config'
import { Container } from './style'

interface HowToPlayModalProps {
    isHowToPlayModalOpen: boolean
    handleCloseHowToPlayModal(): void
}

export function HowToPlayModal({ handleCloseHowToPlayModal, isHowToPlayModalOpen }: HowToPlayModalProps): JSX.Element {

    const { t } = useTranslation()

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

            <button
                type='button'
                onClick={handleCloseHowToPlayModal}
                className='react-modal-close'
            >
                <img src='/assets/close.svg' alt="close-modal-button" />
            </button>

            <Container>
                <h2>{t('gameboard:how-to-play')}</h2>
                <ul>
                    <li>
                        {t('gameboard:move-the-circles-to-make-rows')}
                    </li>
                    <li>
                        {t('gameboard:circles-can-be-moved')}
                    </li>
                    <li>
                        {t('gameboard:on-moving-a-circle-it')}
                    </li>
                    <li>
                        {t('gameboard:everytime-a-match-is-reached')}
                    </li>
                    <li>
                        {t('gameboard:matchs-of-x-give-y-points')}
                    </li>
                    <li>
                        {t('gameboard:your-score-is-saved-every', { db_frequency })}
                    </li>
                </ul>
            </Container>
        </Modal>

    )
}