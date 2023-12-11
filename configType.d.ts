export type Theme = {
    dark: CSSVariables,
    light: CSSVariables,
    system: {
        light: Exclude<keyof Theme, "system">,
        dark: Exclude<keyof Theme, "system">
    }
}


type ConfigType = { 
    theme: Theme
}

export default ConfigType;

export type CSSVariables = Record<string, string>

