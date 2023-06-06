import { useEffect, useState } from "react";
import { Button, Form, Input, message, Modal, Spin } from "antd";
import { addData, getData, putData } from "./mock";

const Index = ({
  code,
  open,
  close,
}: {
  code: string;
  open: boolean;
  close: () => void;
}) => {
  const initialValue = {};
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const getDetail = async (code: string) => {
    if (!open) {
      return;
    }
    if (code) {
      setLoading(true);
      const resp = await getData(code);
      form.setFieldsValue(resp.data || {});
      setLoading(false);
    } else {
      form.setFieldsValue({});
    }
  };
  const submit = () => {
    form
      .validateFields()
      .then(async (values) => {
        if (code) {
          await putData(values);
        } else {
          await addData(values);
        }
        message.success("Success");
        close();
      })
      .catch((err) => {
        console.error(err, err);
      });
  };
  useEffect(() => {
    getDetail(code);
  }, [code, open]);
  if (!open) {
    return null;
  }
  return (
    <Modal
      open={open}
      footer={null}
      title={"Edit"}
      maskClosable={false}
      onCancel={close}
    >
      <Spin spinning={loading}>
        <Form form={form} initialValues={initialValue} preserve={false}>
          <Form.Item
            name="code"
            label="Code"
            rules={[{ required: true, message: "Please input nid code" }]}
          >
            <Input placeholder="code" />
          </Form.Item>

          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input nid name" }]}
          >
            <Input placeholder="name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={submit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};

export default Index;
