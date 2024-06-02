import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import App from "./App.jsx";
import Layout from "./routes/Layout";
import InstanceCreate from "./routes/InstanceCreate.jsx";
import InstanceUpdate from "./routes/InstanceUpdate.jsx";
import NotFound from "./routes/NotFound.jsx";
// styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route
            index={false}
            path="/instance-create"
            element={<InstanceCreate />}
          />
          <Route
            index={false}
            path="/instance-edit"
            element={<InstanceUpdate />}
          />
          <Route index={false} path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
