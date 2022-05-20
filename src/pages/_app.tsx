import { AppProps } from "next/app";
import { GameProvider } from "../hooks/useGame";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from 'styled-components'
import light from "../styles/theme/light";
import dark from "../styles/theme/dark";

import { useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {

    const [theme, setTheme] = useState(light)

    function toggleTheme() {
        setTheme(theme.title === 'light' ? dark : light)
    }

    return (
        <ThemeProvider
            theme={light}
        >
            <GameProvider>
                <GlobalStyle />
                <Component {...pageProps} />
            </GameProvider>
        </ThemeProvider>
    )
}