import BackgroudnImage from "@/assets/Mkgaa800x600.png";
import { Button, Form, Input, App } from "antd";
import { sigin } from "./mock";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const initialValue = {
    userCode: "MMIOMS",
    password: "MMIOMS",
  };
  const [form] = Form.useForm();
  const { message } = App.useApp();
  const navigate = useNavigate();

  const submit = () => {
    form
      .validateFields()
      .then(async (values) => {
        await sigin(values);
        message.success("Login Success!");
        navigate("/");
      })
      .catch((err) => {
        console.error(err, err);
      });
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          backgroundImage: `url(${BackgroudnImage})`,
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <div
          className="login-wrap"
          style={{
            width: 550,
            backgroundColor: "#fff",
            borderRadius: 10,
            padding: 20,
          }}
        >
          <h2
            className="login-title"
            style={{
              fontSize: 32,
              fontWeight: 400,
            }}
          >
            <span
              style={{
                fontFamily: "Merck",
                marginRight: 20,
                color: "purple",
              }}
            >
              MMIOMS
            </span>
            Login
          </h2>

          <Form form={form} layout="vertical" initialValues={initialValue}>
            <Form.Item
              name="userCode"
              label="User Code"
              rules={[
                { required: true, message: "Please input your user code" },
              ]}
            >
              <Input placeholder="input user code" />
            </Form.Item>
            <Form.Item name="password" label="Password" required>
              <Input placeholder="input password" type="password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={submit}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Index;
