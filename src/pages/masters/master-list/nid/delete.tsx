import { Button, Popconfirm, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { delData, INid } from "./mock";

const Index = ({ record, getList }: { record: INid; getList: () => void }) => {
  const [open, setOpen] = useState(false);

  const confirmDelete = async ({ code }: INid) => {
    try {
      await delData(code);
      message.success("Success");
      setOpen(false);
      getList();
      return true;
    } catch (err: unknown) {
      message.error((err as AnyObject).message || "Error");
    }
    //
  };
  return (
    <Popconfirm
      title="Delete the NID"
      description="Are you sure to delete this NID?"
      onConfirm={() => confirmDelete(record)}
      onCancel={() => {
        setOpen(false);
      }}
      open={open}
      okText="Yes"
      cancelText="No"
    >
      <Button
        type="link"
        size="small"
        danger
        icon={<DeleteOutlined />}
        onClick={() => setOpen(true)}
      >
        Delete
      </Button>
    </Popconfirm>
  );
};

export default Index;
