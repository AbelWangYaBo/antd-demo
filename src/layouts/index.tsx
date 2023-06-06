import { Outlet } from "react-router";
import AppBar from "./AppBar";
import SiderbarPurple from "./Sidebar/index";
import SiderbarLight from "./Sidebar/index-light";
import SiderbarDark from "./Sidebar/index-dark";
import { useState } from "react";
import useMediaQuery from "@/utils/use-media-query";
import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import BreadCrumb from "./breadcrumb";
const Index = () => {
  const [collapsed, setCollapsed] = useState(false);
  const matches = useMediaQuery("(max-width: 1600px)");
  const [theme, setTheme] = useState("purple");
  const changeTheme = (type: string) => {
    setTheme(type);
  };
  let Siderbar = SiderbarPurple;
  let themeStyle = {
    background: "purple",
    color: "#ffffff",
    borderBottom: "1px solid rgba(255, 255, 255, .6)",
  };
  if (theme === "light") {
    Siderbar = SiderbarLight;
    themeStyle = {
      background: "#ffffff",
      color: "rgba(0, 0, 0, 0.88)",
      borderBottom: "1px solid rgba(5, 5, 5, .06)",
    };
  } else if (theme === "dark") {
    Siderbar = SiderbarDark;
    themeStyle = {
      background: "#001529",
      color: "#ffffff",
      borderBottom: "1px solid rgba(255, 255, 255, .6)",
    };
  }

  console.log("matches", matches);
  return (
    <div className="app-wrapper">
      {matches ? (
        <Drawer
          width={300}
          open={collapsed}
          placement="left"
          footer={null}
          onClose={() => setCollapsed(false)}
          mask={false}
          bodyStyle={{
            padding: 0,
            overflow: "hidden",
          }}
          headerStyle={{
            // background: "purple",
            ...themeStyle,
            height: 64,
          }}
          closable={false}
          title={
            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                flexDirection: "row",
                height: 64,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  fontSize: 32,
                  lineHeight: 1,
                  margin: 0,
                  padding: 0,
                  flex: 1,
                  fontFamily: "Merck",
                  color: themeStyle.color,
                }}
              >
                MMIOMS{" "}
              </h2>
              <span onClick={() => setCollapsed(false)}>
                <CloseOutlined
                  style={{
                    fontSize: 24,
                    color: themeStyle.color,
                    cursor: "pointer",
                  }}
                />
              </span>
            </div>
          }
        >
          <Siderbar collapsed={false} hideHeader={true} />
        </Drawer>
      ) : (
        <Siderbar collapsed={collapsed} />
      )}

      <div className="app-main">
        <AppBar
          toggleSidebar={() => setCollapsed(!collapsed)}
          changeTheme={changeTheme}
        />
        <div>
          <BreadCrumb />
          <Outlet />
        </div>
      </div>
      {/* <AppBar />
      <Siderbar /> */}
    </div>
  );
};

export default Index;
