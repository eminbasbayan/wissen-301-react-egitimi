import React, { useContext } from "react";
import Header from "./components/Layout/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/products",
//     element: <ProductsPage />,
//   },
// ]);

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

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
