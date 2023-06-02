import React from "react";
import { Space, Spin, Alert } from "antd";
import { Outlet } from "react-router";
import { LoadingOutlined } from "@ant-design/icons";

const Index: React.FC = () => {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 48, color: "purple" }} spin />
  );

  const spinTip = (
    <div
      style={{
        fontSize: 16,
        lineHeight: 2,
        marginTop: 30,
        padding: 0,
        fontWeight: 400,
        textShadow: "none",
        color: "purple",
        textAlign: "center",
        letterSpacing: 1,
      }}
    >
      Loading...
    </div>
  );

  return (
    <>
      <Spin
        tip={spinTip}
        indicator={antIcon}
        style={{
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          right: 0,
          bottom: 0,
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          WebkitTapHighlightColor: "transparent",
          color: "#ffffff",
          maxHeight: "100vh",
        }}
      >
        <div>
          {new Array(17).fill(1).map(() => (
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          ))}
        </div>
      </Spin>
      <button onClick={() => alert(1)}>按钮</button>
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
      {new Array(17).fill(1).map(() => (
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      ))}
      {/* <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin> */}
    </>
  );
  <Space
    direction="vertical"
    style={{
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      WebkitTapHighlightColor: "transparent",
      color: "#ffffff",
    }}
  >
    <Spin size="large" tip="Loading...">
      <Outlet />
    </Spin>
  </Space>;
};

export default Index;
