import { useTheme } from "../context/themeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="button"
      style={{
        backgroundColor: theme === "light" ? `#000000` : `#ffffff`,
        // color: theme === "light" ? `#000000` : `#ffffff`,
      }}
    >
      {/* Switch to {theme === "light" ? "dark" : "light"} */}
    </button>
  );
}
