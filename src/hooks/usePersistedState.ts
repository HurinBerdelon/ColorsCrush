import { Dispatch, SetStateAction, useEffect, useState } from "react";

type ReturnProps<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

export function usePersistedState<T>(key: string, initialState: T): ReturnProps<T> {

    const isServer = typeof window === "undefined"

    const [state, setState] = useState(() => {

        if (!isServer) {
            const storageValue = localStorage.getItem(key)

            if (storageValue) return JSON.parse(storageValue)
            else return initialState
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]

}