// Import necessary dependencies
import * as React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./rtk/store";
import App from "./App";
import theme from "./theme";
import {
  About,
  AdminDashboard,
  ContactPage,
  Dashboard,
  Error,
  Home,
  ManagerDashboard,
  OperatorDashboard,
} from "./pages";

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

// Create root element and root instance
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Create browser router and routes
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="contacts" element={<ContactPage />} />
      <Route path="about" element={<About />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="adminDashboard" element={<AdminDashboard />} />
      <Route path="operatorDashboard" element={<OperatorDashboard />} />
      <Route path="managerDashboard" element={<ManagerDashboard />} />
    </Route>
  )
);

// Render the application
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={route} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
