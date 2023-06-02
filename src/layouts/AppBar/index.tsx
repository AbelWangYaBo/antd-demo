import { Button, Avatar, Dropdown } from "antd";
import {
  MenuOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
const Index = () => {
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
      <span className="btn-sidebar">
        <MenuOutlined />
      </span>
      <span className="app-bar-title">MMIOMS</span>
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
