import { useEffect, useState } from 'react';
import Modal from 'react-modal'
import { LOCALSTORE_ITEM } from '../../config';
import { useGame } from '../../hooks/useGame';
import { Loading } from '../Feedback/WidgetForm/ScreenshotButton.tsx/Loading';
import { ThemeCard } from '../ThemeCard';
import { Container } from "./style";

interface ThemeRewardModalProps {
    isOpen: boolean
    onRequestClose(): void
}

export function ThemeRewardModal(
    {
        onRequestClose,
        isOpen
    }: ThemeRewardModalProps): JSX.Element {

    const [isRewardOpen, setIsRewardOpen] = useState(false)
    const [isRestartLoading, setIsRestartLoading] = useState(false)
    const { player, setPlayer } = useGame()

    useEffect(() => {
        Modal.setAppElement(document.getElementById('__next'))
    }, [])

    function handleToggleReward() {
        setIsRewardOpen(true)
    }

    function handleChangeGameTheme() {

        setIsRestartLoading(true)

        localStorage.setItem(LOCALSTORE_ITEM, JSON.stringify({
            ...player,
            currentTheme: 'dark'
        }))

        setPlayer({
            ...player,
            currentTheme: 'dark'
        })

        location.reload()
    }

    return (
        <Modal
            isOpen={isOpen}
            overlayClassName='react-modal-overlay'
            className='react-modal-content_themeReward'
        >

            <Container>
                <h3>Congratulations, you got a reward!</h3>
                <div className='themeCardBox'>
                    <ThemeCard
                        handleToggleReward={handleToggleReward}
                        isRewardOpen={isRewardOpen}
                        themeName='dark'
                    />
                </div>
                {isRewardOpen && (
                    <div className="buttons">
                        <button
                            onClick={() => onRequestClose()}
                        >
                            Continue this game
                        </button>
                        <button
                            onClick={handleChangeGameTheme}
                            disabled={isRestartLoading}
                        >
                            {isRestartLoading ? <Loading /> : 'Start again with new theme'}

                        </button>
                    </div>
                )
                }


            </Container>
        </Modal>
    )
}