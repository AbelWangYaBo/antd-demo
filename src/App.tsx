import { App as AntApp, ConfigProvider } from "antd";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./router";
import "antd/dist/reset.css";
import Backdrop from "@/components/backdrop";
import "./variables.less";
import "./global.less";

const App = () => {
  const router = createBrowserRouter(routes);
  return (
    <>
      <ConfigProvider>
        <AntApp>
          <React.Suspense fallback={<Backdrop />}>
            <RouterProvider router={router} fallbackElement={<Backdrop />} />
          </React.Suspense>
        </AntApp>
      </ConfigProvider>
    </>
  );
};

export default App;
