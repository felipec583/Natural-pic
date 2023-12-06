import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/Router.jsx";
import { RouterProvider } from "react-router-dom";
import GlobalStates from "./context/GlobalStates";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStates>
      <RouterProvider router={router} />
    </GlobalStates>
  </React.StrictMode>
);

