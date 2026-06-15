import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from './components/Dashboard';
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);