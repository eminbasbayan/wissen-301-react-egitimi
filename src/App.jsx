import React, { useContext } from "react";
import Header from "./components/Layout/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  const { isThemeMode } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <ToastContainer />
      <div className={`wrapper ${isThemeMode && "bg-dark"}`}>
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
