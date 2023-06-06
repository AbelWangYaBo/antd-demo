import { Col, Row, List, Tooltip } from "antd";

interface IItem {
  title: string;
  data?: string[];
}

const ListItem = ({ title, data }: IItem) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "200px",
        padding: 10,
      }}
    >
      <List
        header={
          <Tooltip title={title}>
            <div
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                wordBreak: "break-all",
                whiteSpace: "nowrap",
              }}
            >
              {title}
            </div>
          </Tooltip>
        }
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

const Index = () => {
  const list = [
    {
      title: "Scheme / Spot Offer",
    },
    {
      title: "New Introduction / Discontinuation",
    },
    {
      title: "End User Declaration (EUD)",
    },
    {
      title: "HSN / GST Document",
    },
  ];

  return (
    <Row>
      {list.map((item, i) => (
        <Col span={24} sm={12} md={8} lg={6} key={i}>
          <ListItem key={i} {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default Index;
