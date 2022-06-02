import { createContext, ReactNode, useContext, useEffect, useState, } from "react";
import { DefaultTheme } from "styled-components";
import { LOCALSTORE_ITEM } from "../config";

import light from '../styles/theme/light'
import { usePersistedState } from "./usePersistedState";

interface ThemeContextData {
    theme: DefaultTheme
    setTheme(theme: DefaultTheme): void
}

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeContext = createContext<ThemeContextData>(
    {} as ThemeContextData
)

export function ThemeContextProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = usePersistedState(`theme_${LOCALSTORE_ITEM}`, light)

    const [defaultTheme, setDefaultTheme] = useState(light)

    useEffect(() => {
        if (theme) {
            setDefaultTheme(theme)
        }
    }, [theme])

    return (
        <ThemeContext.Provider
            value={{
                theme: defaultTheme,
                setTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}