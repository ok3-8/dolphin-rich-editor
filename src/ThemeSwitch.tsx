import { FunctionComponent } from "react";

export type Theme = "dark" | "light";
interface ThemeSwitchProps {
  theme: Theme;
  onSwitchTheme: (color: Theme) => void;
}

const ThemeSwitch: FunctionComponent<ThemeSwitchProps> = ({
  theme,
  onSwitchTheme,
}) => {
  const switchTheme = (event: React.MouseEvent<HTMLLabelElement>) => {
    event.preventDefault();
    onSwitchTheme && onSwitchTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <label
      className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400"
      onClick={switchTheme}
    >
      <input
        type="radio"
        name="color-choice"
        value="White"
        className="sr-only"
        aria-labelledby="color-choice-0-label"
      />
      <span id="color-choice-0-label" className="sr-only">
        White
      </span>
      <span
        aria-hidden="true"
        className="h-8 w-8 dark:bg-white border dark:border-black border-opacity-10 rounded-full bg-black border-white"
      ></span>
    </label>
  );
};

export default ThemeSwitch;
