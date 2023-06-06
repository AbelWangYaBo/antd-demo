import { Descriptions } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const Index = () => {
  const list = [
    {
      label: "EUD Format for Methanol for Maharashtra",
      children: [
        {
          label: "EUD_Methanol_Maharashtra.docx",
        },
      ],
    },
    {
      label: "EUD Format for Methanol for Non-Maharashtra",
      children: [
        {
          label: "EUD_Methanol_Non-Maharashtra.docx",
        },
      ],
    },
    {
      label: "EUD Format for Hexane, Heptane & Pentane",
      children: [
        {
          label: "EUD_Hexane_Heptane_Pentane.docx",
        },
      ],
    },
    {
      label: "EUD Format for n-Hexane,n-Heptane & n-Pentane",
      children: [
        {
          label: "EUD_nHexane_n Heptane_nPentane_Cyclohexane.docx",
        },
      ],
    },
    {
      label: "Secondary Sales Data Format",
      children: [
        {
          label: "Secondary_Sales_Data_For_Merck.xlsx",
        },
      ],
    },
    {
      label: "Trade Compliance Policy",
      children: [
        {
          label: "Trade_Compliance_Policy.pdf",
        },
      ],
    },
    {
      label: "Template for Payment Disputes",
      children: [
        {
          label: "Payment_Dispute_Template.pdf",
        },
      ],
    },
    {
      label: "EUD format for Cell Line Products",
      children: [
        {
          label: "EUD_For_CellLine.docx",
        },
      ],
    },
    {
      label: "EUD Format for General Materials",
      children: [
        {
          label: "EUD_General.docx",
        },
        {
          label: "IsoPropyl_Alcohol_(IPA)_EUD_format.docx",
        },
        {
          label: "EUD_for_Deuterated_Products.docx",
        },
      ],
    },
    {
      label: "Merck Price List 2021",
      children: [
        {
          label: "Build_V1_1021.zip",
        },
        {
          label: "Application_Installation_And_Feature_Guide.pdf",
        },
      ],
    },
    {
      label: "Privacy Policy",
      children: [
        {
          label: "Privacy Policy of Merck Website_India DPO(clean).docx",
        },
      ],
    },
  ];

  return (
    <Descriptions
      title="Responsive Descriptions"
      layout="vertical"
      bordered
      column={{ xs: 1, sm: 1, md: 2 }}
    >
      {list.map((item) => (
        <Descriptions.Item key={item.label} label={item.label}>
          {item.children?.map((l, k) => (
            <div
              style={{
                margin: "2px 0",
              }}
              key={k}
            >
              <a href={`#${l.label}`}>
                <DownloadOutlined /> {l.label}
              </a>
            </div>
          ))}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};

export default Index;
