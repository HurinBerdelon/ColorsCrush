import { AppProps } from "next/app";
import { BodyContainer, GlobalStyle } from "../styles/GlobalStyle";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <BodyContainer>
            <GlobalStyle />
            <Component {...pageProps} />
        </BodyContainer>
    )
}