import Table, { ColumnsType } from "antd/lib/table";
import { Button, Modal, Space, message } from "antd";
import { SRequest } from "./style";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";

export default function Request({ data }: any) {
  const queryClient = useQueryClient();
  const [dataSource, setDataSource] = useState<any>([]);
  const [isOpenModalAccept, setIsOpenModalAccept] = useState<boolean>(false);
  const [isOpenModalReject, setIsOpenModalReject] = useState<boolean>(false);

  const {  mutateAsync } = useMutation({
    mutationFn: (data: any) =>
      requestToken({
        method: "POST",
        url: API_URL.CLUBS.REVIEW_REQUEST,
        data: data,
      }),
    onError(error: any) {
      console.log(error?.response?.data, "error")
      message.error(error?.response?.data?.error || "Thất bại");
    },
    onSuccess() {
      message.success("Duyệt thành công!", 1.5);
      queryClient.invalidateQueries("getListRequests");
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

  const handleAccept = (id: number) => {
    mutateAsync({ status: 2, request_id: id });
    handleCloseModalAccept();
  };

  const handleReject = (id: number) => {
    mutateAsync({ status: 3, request_id: id});
    handleCloseModalReject();
  };

  useEffect(() => {
    const listRequests: any = [];
    data.map((item: any) => {
      listRequests.push({
        id: item.id,
        name: item.members.name,
        email: item.members.email,
      });
    });
    setDataSource(listRequests);
  }, [data]);

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
      dataIndex: "id",
      render: (_, record) => (
        <>
          {console.log("111212", record.id)}
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
            onOk={() => handleAccept(record.id)}
            onCancel={handleCloseModalAccept}
            okText="Duyệt"
            cancelText="Đóng"
            className="text-center"
          >
            <p className="my-3">Xác nhận đồng ý cho thành viên vào club</p>
          </Modal>
          <Modal
            title="Từ chối"
            centered
            open={isOpenModalReject}
            onOk={() => handleReject(record.id)}
            onCancel={handleCloseModalReject}
            okText="Từ chối"
            cancelText="Đóng"
            className="text-center"
          >
            <p className="my-3">Xác nhận từ chối cho thành viên vào club</p>
          </Modal>
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
