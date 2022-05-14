interface handleDropProps {
    setSquaredBeingReplaced(square: HTMLImageElement): void
}

export function handleDrop(event, { setSquaredBeingReplaced }): void {
    setSquaredBeingReplaced(event.target)
}