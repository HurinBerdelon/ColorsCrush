import { useEffect, useState } from "react"
import Link from "next/link"
import { v4 as uuidv4 } from 'uuid'
import EditIcon from '@mui/icons-material/Edit';
import { Container } from "./style"
import { useGame } from "../../hooks/useGame"
import { PlayerSchema } from "../../schema/player"
import { Loading } from "../Feedback/WidgetForm/ScreenshotButton.tsx/Loading"

import { useTheme } from "../../hooks/useTheme"
import light from "../../styles/theme/light"
import dark from "../../styles/theme/dark"
import { LOCALSTORE_KEY } from "../../config"
import { StartGameForm } from "./StartGameForm"
import { useTranslation } from "next-i18next";
import i18next from '../../../next-i18next.config'
import { useRouter } from "next/router";

const THEMES = {
    dark,
    light,
}

export default function MainMenu(): JSX.Element {

    const router = useRouter()
    const { t } = useTranslation()

    const { player, setPlayer, isGameLoading, setIsGameLoading, setGame, setScoreDisplay } = useGame()
    const [isChangingName, setIsChangingName] = useState(true)
    const { theme: currentTheme, setTheme } = useTheme()

    useEffect(() => {
        setGame({
            id: uuidv4(),
            playerName: '',
            score: 0,
            theme: ''
        })
        setScoreDisplay(0)

        localStorage.removeItem('colors-crush-player')
        const playerSaved: PlayerSchema = JSON.parse(localStorage.getItem(`player_${LOCALSTORE_KEY}`))

        if (playerSaved) {
            setPlayer(playerSaved)
            setIsChangingName(false)
        }

    }, [])

    function handleStartGame() {

        setIsGameLoading(true)

        localStorage.setItem(`player_${LOCALSTORE_KEY}`, JSON.stringify({
            name: player.name,
            gamesAvailable: player.gamesAvailable
        }))

        setPlayer({
            ...player
        })
    }


    return (
        <Container>
            <h1>{t('home:welcome')}<span>Beta</span></h1>

            <h3>{t('home:choose-language')}</h3>
            <div className="languages">
                <Link
                    href='/'
                    locale={'en'}
                >
                    <button
                        className={`languageSelector ${router.locale === 'en' ? 'active' : ''}`}
                        disabled={router.locale === 'en' ? true : false}
                    >
                        🇬🇧
                    </button>
                </Link>
                <Link
                    href='/'
                    locale={'pt-BR'}
                >
                    <button
                        className={`languageSelector ${router.locale === 'pt-BR' ? 'active' : ''}`}
                        disabled={router.locale === 'pt-BR' ? true : false}
                    >
                        🇧🇷
                    </button>
                </Link>
            </div>

            <h3>{t('home:choose-theme')}</h3>
            <div className="themes">
                {player
                    ? player.gamesAvailable.map(theme => (
                        <button
                            key={theme}
                            className={`themeSelector ${currentTheme.title === theme && 'active'}`}
                            disabled={isGameLoading || currentTheme.title === theme}
                            onClick={() => setTheme(THEMES[theme])}
                        >
                            {theme.toUpperCase()}
                        </button>
                    ))
                    : <button
                        className={`themeSelector ${currentTheme.title === 'light' && 'active'}`}
                        disabled={isGameLoading || currentTheme.title === 'light'}
                        onClick={() => setTheme(THEMES.light)}
                    >
                        LIGHT
                    </button>
                }
            </div>
            {!isChangingName
                ? (
                    <>
                        <h3>
                            {t('home:hello')}, {player.name}
                            <span
                                onClick={() => setIsChangingName(true)}
                            >
                                <EditIcon />
                            </span>
                        </h3>

                        <Link href="/gameboard" >
                            <a
                                className="startGame"
                                onClick={handleStartGame}
                            >
                                {isGameLoading ? <Loading /> : t('home:start')}
                            </a>
                        </Link>
                    </>
                )
                : <StartGameForm />
            }

        </Container>
    )
}