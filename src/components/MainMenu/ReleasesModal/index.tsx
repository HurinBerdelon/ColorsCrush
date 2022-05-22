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
            <Container>
                <h2>Releases:</h2>

                <ul>
                    <h4>Version 0.2.0:</h4>
                    <li><CheckIcon /> Game working.</li>
                    <li><CheckIcon /> Score beeing saved in database.</li>
                    <li><CheckIcon /> Top 10 scores on screen.</li>
                    <li><CheckIcon /> Widget to send some feedback.</li>

                    <h4>Next Versions:</h4>
                    <li><CheckBoxOutlineBlankIcon /> Other themes as rewards.</li>
                    <li><CheckBoxOutlineBlankIcon /> Reset name feature.</li>
                    <li><CheckBoxOutlineBlankIcon /> Reset game without refresh the page.</li>
                    <li><CheckBoxOutlineBlankIcon /> Translation for other languages.</li>


                </ul>
            </Container>
        </Modal>

    )
}