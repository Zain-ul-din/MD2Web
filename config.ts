import Config, { Theme } from "./configType";

const theme: Theme = {
    dark: {
        '--bg-color': '#111',
        '--light-bg-color': 'rgba(255,255,255,0.05)',
        '--border-color': 'rgba(255, 255, 255, 0.2)',
        '--light-border-color': 'rgba(65, 65, 65, 0.4)',
        '--text-color': '#ffff',
        '--muted-text-color': 'rgba(255,255,255,0.4)',
        '--selection-color': 'rgb(250, 79, 165)',
        '--code-border-style': 'solid',
    }, 
    light: {
        '--bg-color': 'white',
        '--light-bg-color': 'rgba(170, 170, 171, 0.114)',
        '--border-color': '#333',
        '--light-border-color': 'rgba(0, 0, 0, 0.1)',
        '--text-color': 'rgba(0, 0, 0, 0.84)',
        '--muted-text-color': '#888',
        '--selection-color': 'rgba(137, 176, 248, 0.5)',
        '--code-border-style': 'solid',
    },
    system: {
        light: "light",
        dark: "dark"
    }
}

const config: Config = { theme }
export default config;

