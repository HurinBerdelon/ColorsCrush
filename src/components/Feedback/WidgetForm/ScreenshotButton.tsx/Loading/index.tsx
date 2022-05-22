import { CircleNotch } from "phosphor-react";
import { Container } from "./style";

export function Loading() {

    return (
        <Container>
            <CircleNotch weight='bold' className="loading-icon" />
        </Container>
    )
}