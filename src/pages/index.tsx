import { GetStaticProps } from "next"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from "next/head"
import { useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { Footer } from "../components/Footer"
import MainMenu from "../components/MainMenu"
import { useGame } from "../hooks/useGame"
import { useTheme } from "../hooks/useTheme"

import { useTranslation } from 'next-i18next'

export default function Home(): JSX.Element {

    const { setIsPlaying } = useGame()
    const { t } = useTranslation()
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {

    return {
        props: {
            ...(await serverSideTranslations(locale, ['home']))
        }
    }
}