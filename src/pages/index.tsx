import Head from "next/head"
import { useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { Footer } from "../components/Footer"
import MainMenu from "../components/MainMenu"
import { useGame } from "../hooks/useGame"
import { useTheme } from "../hooks/useTheme"
import light from "../styles/theme/light"

export default function Home(): JSX.Element {

    const { setIsPlaying } = useGame()
    const { theme } = useTheme()

    useEffect(() => {
        setIsPlaying(false)
    }, [])

    return (
        <ThemeProvider
            theme={theme}
        >
            <Head>
                <title>Home | ColorsCrush</title>
            </Head>

            <MainMenu />
            <Footer />
        </ThemeProvider>
    )
}