import { useEffect, useState } from "react";
import { Button, Table, Space, Spin } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { getList, INid } from "./mock";
import { ColumnsType } from "antd/es/table";
import Delete from "./delete";
import Form from "./form";

const Index: React.FC = () => {
  const [list, setList] = useState<INid[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeCode, setActiveCode] = useState("");
  const getDatas = async () => {
    setLoading(true);
    setList([]);
    const resp = await getList();
    setList(resp.data as INid[]);
    setLoading(false);
  };
  useEffect(() => {
    getDatas();
  }, []);

  const handleAdd = () => {
    setActiveCode("");
    setOpen(true);
  };

  const handleEdit = (record: INid) => {
    setActiveCode(record.code);
    setOpen(true);
    //
  };

  const columns: ColumnsType<INid> = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (_text, record: INid) => (
        <Space size="middle">
          <Button
            type="link"
            size="small"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>

          <Delete record={record} getList={getDatas}></Delete>
        </Space>
      ),
    },
  ];

  return (
    <Spin spinning={loading}>
      <div className="app-container">
        <div>
          <Button type="primary" onClick={handleAdd}>
            Add
          </Button>
        </div>
        <Table rowKey={"code"} dataSource={list} columns={columns} />

        <Form
          code={activeCode}
          open={open}
          close={() => {
            setOpen(false);
            getDatas();
          }}
        />
      </div>
    </Spin>
  );
};

export default Index;
