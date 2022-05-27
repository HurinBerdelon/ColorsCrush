import Head from "next/head"
import { useEffect } from "react"
import { Footer } from "../components/Footer"
import MainMenu from "../components/MainMenu"
import { useGame } from "../hooks/useGame"

export default function Home(): JSX.Element {

    const { setIsPlaying } = useGame()

    useEffect(() => {
        setIsPlaying(false)
    }, [])

    return (
        <>
            <Head>
                <title>Home | ColorsCrush</title>
            </Head>
            <MainMenu />
            <Footer />
        </>
    )
}