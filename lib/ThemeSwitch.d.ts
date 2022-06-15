import { FunctionComponent } from "react";
export declare type Theme = "dark" | "light";
interface ThemeSwitchProps {
    theme: Theme;
    onSwitchTheme: (color: Theme) => void;
}
declare const ThemeSwitch: FunctionComponent<ThemeSwitchProps>;
export default ThemeSwitch;
