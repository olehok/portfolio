import { useTheme } from "../context/themeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}
    className="button">
      Switch to {theme === "light" ? "dark" : "light"}
    </button>
  );
}
