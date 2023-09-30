import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Status from './components/Status/Status'
import StatusViewer from './components/Status/StatusViewer';
import { Provider } from "react-redux";
import store from './Redux/store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/status",
    element: <Status/>,
  },
  {
    path: "/status/:userId",
    element: <StatusViewer/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  
    <RouterProvider router={router}>
      <Provider>
        
      </Provider>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
