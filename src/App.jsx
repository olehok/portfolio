import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h2>error</h2>,
    children: [
      { index: true, element: <Projects /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "*", element: <h2>Not Found</h2> },
    ],
  },
], { basename: '/portfolio/' });

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
