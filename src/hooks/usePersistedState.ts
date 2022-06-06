import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useGame } from "./useGame";

type ReturnProps<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

export function usePersistedState<T>(key: string, initialState: T): ReturnProps<T> {

    const [state, setState] = useState(initialState)

    useEffect(() => {
        const storageValue = localStorage.getItem(key)

        if (storageValue) {
            setState(JSON.parse(storageValue))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]

}