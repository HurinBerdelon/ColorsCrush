import Head from "next/head"
import { Footer } from "../components/Footer"
import MainMenu from "../components/MainMenu"

export default function Home(): JSX.Element {

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