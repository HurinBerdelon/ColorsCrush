interface handleDragStartProps {
    setSquaredBeingDragged(square: HTMLImageElement): void
}

export function handleDragStart(eventTarget, { setSquaredBeingDragged }: handleDragStartProps): void {
    setSquaredBeingDragged(eventTarget)
}