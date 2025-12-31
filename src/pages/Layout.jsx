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
      <header className="header">
        <div className="container">
          <h1>
            <NavLink to="/">Junior Frontend Developer</NavLink>
          </h1>
          <div className="wrapper">
            <p className="text">
              Building responsive interfaces with HTML, CSS, Sass, React, and
              Redux.
            </p>
          </div>
          <div className="separator"></div>
          <nav className="nav">
            <h3>
              <NavLink to="/about">About</NavLink>
            </h3>
            <h3>
              <NavLink to="/projects">Projects</NavLink>
            </h3>
            <ThemeToggle />
          </nav>
          <div className="separator"></div>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">
          <div className="separator"></div>
          <h3>Contacts</h3>
          <div className="footer-container">
            <p className="text">Email: ok.olegkovalenko@gmail.com</p>
            <p className="text">|</p>
            <p className="text">Linkedin</p>
            <p className="text">|</p>
            <p className="text">Github</p>
          </div>
          <p className="text">© 2025 Oleh Kovalenko</p>
        </div>
      </footer>
    </div>
  );
}
