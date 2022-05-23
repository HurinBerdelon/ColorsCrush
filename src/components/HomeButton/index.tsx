import Link from "next/link";
import { Container } from "./style";

export function HomeButton(): JSX.Element {

    return (
        <Container>
            <Link href="/">
                <a>Home</a>
            </Link>
        </Container>
    )
}