import { useEffect } from 'react'
import Modal from 'react-modal'
import { Container } from './style'
import CheckIcon from '@mui/icons-material/Check';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { darkThemeRewardScore } from '../../../config';
import { useTranslation } from 'next-i18next';

interface ReleasesModalProps {
    isReleasesModalOpen: boolean
    handleCloseReleasesModal(): void
}

export function ReleasesModal({ handleCloseReleasesModal, isReleasesModalOpen }: ReleasesModalProps): JSX.Element {

    const { t } = useTranslation()

    useEffect(() => {
        Modal.setAppElement(document.getElementById('__next'))
    }, [])

    return (
        <Modal
            isOpen={isReleasesModalOpen}
            onRequestClose={handleCloseReleasesModal}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button
                type='button'
                onClick={handleCloseReleasesModal}
                className='react-modal-close'
            >
                <img src='/assets/close.svg' alt="close-modal-button" />
            </button>

            <Container>
                <h2>{t('home:releases')}:</h2>

                <ul>
                    <h4>{t('home:version')} 0.1.0:</h4>
                    <li><CheckIcon /> {t('home:tests-of-application')}</li>

                    <h4>{t('home:version')} 0.2.0:</h4>
                    <li><CheckIcon /> {t('home:game-working')}</li>
                    <li><CheckIcon /> {t('home:score-beeing-saved-in-database')}</li>
                    <li><CheckIcon /> {t('home:top-10-scores-on-screen')}</li>
                    <li><CheckIcon /> {t('home:widget-to-send-feedbacks')}</li>
                    <li><CheckIcon /> {t('home:widget-with-instructions-about-the-game')}</li>

                    <h4>{t('home:version')} 0.3.0:</h4>
                    <li><CheckIcon /> {t('home:working-on-mobile-browsers')}</li>
                    <li><CheckIcon /> {t('home:reset-game-feature')}</li>
                    <li><CheckIcon /> {t('home:save-score-button')}</li>

                    <h4>{t('home:version')} 0.3.1:</h4>
                    <li><CheckIcon /> {t('home:Fix-bug-that-was-changing-player-name-to-anonymous')}</li>

                    <h4>{t('home:version')} 0.4.0:</h4>
                    <li><CheckIcon /> {t('home:add-new-theme-as-reward', { darkThemeRewardScore })}</li>
                    <li><CheckIcon /> {t('home:change-name-feature')}</li>
                    <li><CheckIcon /> {t('home:translation-to-portuguese')}</li>

                    <h4>{t('home:next-versions')}:</h4>
                    <li><CheckBoxOutlineBlankIcon /> {t('home:other-themes-as-rewards')}</li>
                    <li><CheckBoxOutlineBlankIcon /> {t('home:translation-for-other-languages')}</li>
                    <li><CheckBoxOutlineBlankIcon /> {t('home:new-ways-to-score-points')}</li>
                    <li><CheckBoxOutlineBlankIcon /> {t('home:level-hard-for-hardcore-players')}</li>
                </ul>
            </Container>
        </Modal>

    )
}