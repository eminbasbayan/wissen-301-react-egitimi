import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import RootLayout from "./pages/Root";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetailsPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
