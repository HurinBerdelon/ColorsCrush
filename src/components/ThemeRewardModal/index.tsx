import Modal from 'react-modal'
import { Container } from "./style";

interface ThemeRewardModalProps {
    isThemeRewardModalOpen: boolean
    handleCloseThemeRewardModal(): void
}

export function ThemeRewardModal({
    handleCloseThemeRewardModal,
    isThemeRewardModalOpen
}: ThemeRewardModalProps): JSX.Element {



    return (
        <Modal
            isOpen={isThemeRewardModalOpen}
            overlayClassName='react-modal-overlay'
            className='react-modal-content_themeReward'
        >
            <Container>

            </Container>
        </Modal>
    )
}