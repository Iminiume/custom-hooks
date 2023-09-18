import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import Layout from "./components/layout";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Layout>
    <App />
  </Layout>
);
