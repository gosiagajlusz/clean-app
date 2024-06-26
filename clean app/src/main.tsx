import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Dashboard from "./pages/Dashboard.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  path:'/',
  element:<Dashboard/>,
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Dashboard />
      <App></App>
    </RouterProvider>
  </React.StrictMode>
);
