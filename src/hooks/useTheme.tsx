import { createContext, ReactNode, useContext, useEffect, useState, } from "react";
import { DefaultTheme } from "styled-components";
import { LOCALSTORE_KEY } from "../config";

import light from '../styles/theme/light'
import { usePersistedState } from "./usePersistedState";

interface ThemeContextData {
    theme: typeof light
    setTheme(theme: DefaultTheme): void
}

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeContext = createContext<ThemeContextData>(
    {} as ThemeContextData
)

export function ThemeContextProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = usePersistedState(`theme_${LOCALSTORE_KEY}`, light)

    return (
        <ThemeContext.Provider
            value={{
                theme,
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