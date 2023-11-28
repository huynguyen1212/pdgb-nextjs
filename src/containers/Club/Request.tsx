import Table, { ColumnsType } from "antd/lib/table";
import { Button, Modal, Space, message } from "antd";
import { SRequest } from "./style";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";

export default function Request({ data }: any) {
  // const [dataSource, setDataSource] = useState<any>([]);
  const [isOpenModalAccept, setIsOpenModalAccept] = useState<boolean>(false);
  const [isOpenModalReject, setIsOpenModalReject] = useState<boolean>(false);

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: (data: any) =>
      requestToken({
        method: "POST",
        url: API_URL.CLUBS.REVIEW_REQUEST,
        data: data,
      }),
    onError(error: any) {
      message.error(error?.response?.data?.message || "Thất bại");
    },
  });

  const handleCloseModalAccept = () => {
    setIsOpenModalAccept(false);
  };

  const handleOpenModalAccept = () => {
    setIsOpenModalAccept(true);
  };

  const handleCloseModalReject = () => {
    setIsOpenModalReject(false);
  };

  const handleOpenModalReject = () => {
    setIsOpenModalReject(true);
  };

  const handleAccept = (id: any) => {
    mutateAsync({ request_id: id, status: 1 });
    handleCloseModalAccept();
  };

  const handleReject = (id: any) => {
    mutateAsync({ request_id: id, status: 2 });
    handleCloseModalReject();
  };

  // useEffect(() => {
  //   const listRequests: any = [];
  //   if (!(data && data.length === 0)) return;
  //   data.map((item: any) => {
  //     listRequests.push({
  //       key: item.id,
  //       name: item.name,
  //       email: item.email,
  //     });
  //   });
  //   setDataSource(listRequests);
  // }, [data]);

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
      dataIndex: "key",
      render: (_, record) => (
        <>
          {console.log("111212", record.key)}
          <Space size="small">
            <Button
              className="capitalize"
              type="primary"
              size="small"
              onClick={handleOpenModalAccept}
            >
              Duyệt
            </Button>
            <Button
              className="capitalize"
              type="primary"
              danger
              size="small"
              onClick={handleOpenModalReject}
            >
              Từ chối
            </Button>
          </Space>
          <Modal
            title="Duyệt"
            centered
            open={isOpenModalAccept}
            onOk={() => handleAccept(record.key)}
            onCancel={handleCloseModalAccept}
            okText="Duyệt"
            cancelText="Đóng"
            className="text-center"
          >
            <p className="">Xác nhận duyệt thành viên vào club</p>
          </Modal>
          <Modal
            title="Từ chối"
            centered
            open={isOpenModalReject}
            onOk={() => handleReject(record.key)}
            onCancel={handleCloseModalReject}
            okText="Từ chối"
            cancelText="Đóng"
            className="text-center"
          ></Modal>
        </>
      ),
    },
  ];

  return (
    <SRequest>
      <Table columns={columns} dataSource={dataSource} />
    </SRequest>
  );
}
