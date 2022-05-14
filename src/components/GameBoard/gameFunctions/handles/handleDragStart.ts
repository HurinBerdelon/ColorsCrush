interface handleDragStartProps {
    setSquaredBeingDragged(square: HTMLImageElement): void
}

export function handleDragStart(event, { setSquaredBeingDragged }: handleDragStartProps): void {
    setSquaredBeingDragged(event.target)
}