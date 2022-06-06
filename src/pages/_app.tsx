import { AppProps } from "next/app";
import { appWithTranslation } from 'next-i18next'
import { GameProvider } from "../hooks/useGame";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeContextProvider } from "../hooks/useTheme";

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <ThemeContextProvider>
            <GameProvider>
                <GlobalStyle />
                <Component {...pageProps} />
            </GameProvider>

        </ThemeContextProvider>
    )
}

export default appWithTranslation(MyApp)