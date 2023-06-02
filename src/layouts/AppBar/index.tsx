import { Button, Avatar, Dropdown } from "antd";
import {
  MenuOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
const Index = ({
  toggleSidebar,
  changeTheme,
}: {
  toggleSidebar: () => void;
  changeTheme: (type: "purple" | "light" | "dark") => void;
}) => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          style={{
            fontSize: 16,
            lineHeight: 2,
          }}
        >
          <SettingOutlined /> Change Password
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          style={{
            fontSize: 16,
            lineHeight: 2,
          }}
        >
          <LogoutOutlined /> Log out
        </div>
      ),
    },
  ];
  return (
    <div className="app-bar-container">
      <span className="btn-sidebar" onClick={toggleSidebar}>
        <MenuOutlined />
      </span>
      <div className="app-bar-title">
        <span
          className="app-bar-title"
          style={{
            marginRight: 20,
          }}
        >
          MMIOMS
        </span>
        <Button
          type="text"
          onClick={() => changeTheme("purple")}
          style={{ color: "#ffffff" }}
        >
          Purple Sidebar
        </Button>
        <Button
          type="text"
          onClick={() => changeTheme("light")}
          style={{ color: "#ffffff" }}
        >
          Light Sidebar
        </Button>
        <Button
          type="text"
          onClick={() => changeTheme("dark")}
          style={{ color: "#ffffff" }}
        >
          Dark Sidebar
        </Button>
      </div>
      <div className="app-bar-collapse">
        <Dropdown
          menu={{ items }}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
        >
          <Avatar className="account" size={48} icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </div>
  );
};

export default Index;
