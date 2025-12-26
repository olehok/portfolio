import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import ThemeToggle from "../components/themeToggle";
import "../styles/main.scss";

export default function Layout() {
  const { theme } = useTheme();
  return (
    <div
      className="app-container"
      style={{
        backgroundColor: theme === "light" ? `#ffffff` : `#2b2b2b`,
        color: theme === "light" ? `#000000` : `#ffffff`,
      }}
    >
      <header>
        <div className="container">
          <h1>
            <NavLink to="/">OK Portfolio</NavLink>
          </h1>
          {/* <p className="text"
          style={{ textAlign: "center" }}
          >Frontend developer</p> */}
          <nav>
            <h3><NavLink to="/about">About</NavLink></h3>
            <h3><NavLink to="/projects">Projects</NavLink></h3>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
