import Document, { Head, Html, Main, NextScript } from "next/document";
import { GlobalStyle } from "../styles/GlobalStyle";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>ColorsCrush</title>
                </Head>
                <body id="app_root">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}