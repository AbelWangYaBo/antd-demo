import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
interface IProp {
  open?: boolean;
  children?: JSX.Element;
}

const Index = (props: IProp) => {
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
        spinning={props.open}
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
        {props.children || <div></div>}
      </Spin>
    </>
  );
};

export default Index;
