import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Menu, Button } from "antd";
import { MENU_LIST } from "@/constants";
import { useState } from "react";

const Index = () => {
  const onClick = ({ key, keyPath }: any) => {
    console.log("...args", key, keyPath);
  };
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return <div>Page Index</div>;
  return (
    <div>
      <div style={{ width: 300 }}>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={["1", "2", "2"]}
          defaultOpenKeys={["1", "2"]}
          mode="inline"
          inlineCollapsed={collapsed}
          items={MENU_LIST}
          onClick={onClick}
          style={{
            backgroundColor: "purple",
            color: "#fff",
          }}
        />
      </div>
    </div>
  );
  return (
    <>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={MENU_LIST}
        inlineCollapsed={collapsed}
      />
      <Button
        type="primary"
        onClick={() => setCollapsed(!collapsed)}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </>
  );
  return <div>1</div>;
};

export default Index;
