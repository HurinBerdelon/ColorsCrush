import { AppProps } from "next/app";
import { GameProvider } from "../hooks/useGame";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeContextProvider } from "../hooks/useTheme";

export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <ThemeContextProvider>
            <GameProvider>
                <GlobalStyle />
                <Component {...pageProps} />
            </GameProvider>

        </ThemeContextProvider>
    )
}