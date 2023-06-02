import { Outlet } from "react-router";
import AppBar from "./AppBar";
import { Space, Layout } from "antd";
const Index = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <AppBar />
        <Outlet />
      </Layout>
    </Space>
  );

  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Index;
