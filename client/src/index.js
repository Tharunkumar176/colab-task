import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider, App as AntdApp } from "antd";  // Import App from antd as AntdApp
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2E3840",
          colorBorder: "#2E3840",
        },
      }}
    >
      {/* Wrap your entire app with AntdApp to provide theme context for static antd components */}
      <AntdApp>
        <App />
      </AntdApp>
    </ConfigProvider>
  </Provider>
);

reportWebVitals();
