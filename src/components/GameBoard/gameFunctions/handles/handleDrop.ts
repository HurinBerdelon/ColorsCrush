interface handleDropProps {
    setSquaredBeingReplaced(square: HTMLImageElement): void
}

export function handleDrop(eventTarget, { setSquaredBeingReplaced }: handleDropProps): void {
    setSquaredBeingReplaced(eventTarget)
}