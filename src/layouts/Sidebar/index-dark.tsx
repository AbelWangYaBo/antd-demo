import { Menu } from "antd";

import LogoSvg from "@/assets/logo.svg";
import { MENUS } from "./utils";
import { useNavigate } from "react-router";

const Index = ({
  collapsed,
  hideHeader,
}: {
  collapsed: boolean;
  hideHeader?: boolean;
}) => {
  const navigate = useNavigate();

  const onClick = ({ key, keyPath }: { key: string; keyPath: string[] }) => {
    keyPath;
    navigate(key);
  };

  return (
    <div className="sidebar-wrapper">
      {hideHeader ? (
        ""
      ) : collapsed ? (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 64,
            borderBottom: "1px solid #ffffff",
            margin: 0,
          }}
        >
          <img
            src={LogoSvg}
            style={{
              width: "32px",
            }}
          />
        </div>
      ) : (
        <h2
          style={{
            textAlign: "center",
            fontFamily: "Merck",
            fontSize: 32,
            lineHeight: "64px",
            borderBottom: "1px solid #ffffff",
            margin: 0,
          }}
        >
          MMIOMS
        </h2>
      )}
      <Menu
        theme="dark"
        mode="inline"
        inlineCollapsed={collapsed}
        items={MENUS}
        onClick={onClick}
      />
    </div>
  );
};

export default Index;
