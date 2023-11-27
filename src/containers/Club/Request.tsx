import Table, { ColumnsType } from "antd/lib/table";
import { Button, Space } from "antd";
import { SRequest } from "./style";

export default function Request() {
  const dataSource = [
    {
      key: "1",
      name: "Huy",
      email: "email@gmail.com",
    },
    {
      key: "2",
      name: "Sơn",
      email: "email@gmail.com",
    },
  ];

  const columns: ColumnsType<any> = [
    {
      title: "Tên thành viên",
      dataIndex: "name",
      key: "name",
      render: (text) => <div className="">{text}</div>,
      width: 500,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <div className="">{text}</div>,
      width: 500,
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      render: (_, record) => (
        <Space size="small">
          <Button className="capitalize" type="primary" size="small">
            Duyệt
          </Button>
          <Button className="capitalize" type="primary" danger size="small">
            Từ chối
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <SRequest>
      <Table columns={columns} dataSource={dataSource} />
    </SRequest>
  );
}
