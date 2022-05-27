import { useEffect } from 'react'
import Modal from 'react-modal'
import { Container } from './style'
import CheckIcon from '@mui/icons-material/Check';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

interface ReleasesModalProps {
    isReleasesModalOpen: boolean
    handleCloseReleasesModal(): void
}

export function ReleasesModal({ handleCloseReleasesModal, isReleasesModalOpen }: ReleasesModalProps): JSX.Element {

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
                <h2>Releases:</h2>

                <ul>
                    <h4>Version 0.1.0:</h4>
                    <li><CheckIcon /> Tests of the application.</li>

                    <h4>Version 0.2.0:</h4>
                    <li><CheckIcon /> Game working.</li>
                    <li><CheckIcon /> Score beeing saved in database.</li>
                    <li><CheckIcon /> Top 10 scores on screen.</li>
                    <li><CheckIcon /> Widget to send feedbacks.</li>
                    <li><CheckIcon /> Widget with instructions about the game.</li>

                    <h4>Version 0.3.0:</h4>
                    <li><CheckIcon /> Working on Mobile browsers.</li>
                    <li><CheckIcon /> Reset game feature.</li>
                    <li><CheckIcon /> Save score button.</li>

                    <h4>Next Versions:</h4>
                    <li><CheckBoxOutlineBlankIcon /> Other themes as rewards.</li>
                    <li><CheckBoxOutlineBlankIcon /> Reset name feature.</li>
                    <li><CheckBoxOutlineBlankIcon /> Translation for other languages.</li>
                    <li><CheckBoxOutlineBlankIcon /> New ways to score points.</li>
                    <li><CheckBoxOutlineBlankIcon /> Level hard for hardcore players.</li>
                </ul>
            </Container>
        </Modal>

    )
}