import React, { useState } from "react";
import { SMembers } from "./style";
import { Avatar, Button, List, Modal, Skeleton, message } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";

export interface PropsType {
  data: any;
  isAdmin: boolean;
}

export default function Member({ data, isAdmin }: PropsType) {
  const queryClient = useQueryClient();
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false);
  const [idMember, setIdMember] = useState<any>();
  console.log(idMember);

  const handleCloseModalDelete = () => {
    setIsOpenModalDelete(false);
  };

  const handleOpenModalDelete = (id: any) => {
    setIsOpenModalDelete(true);
    setIdMember(id);
  };

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: (data: any) =>
      requestToken({
        method: "POST",
        url: API_URL.CLUBS.KICK_MEMBER,
        data: data,
      }),
    onError(error: any) {
      message.error(error?.response?.data?.message || "Thất bại");
    },
    onSuccess() {
      handleCloseModalDelete();
      message.success("Đã xoá thành công", 1.5);
      queryClient.invalidateQueries("getListClubs");
    },
  });

  const handleDeleteMember = (id: number) => {
    mutateAsync({ member_id: id });
  };

  const actionsAdmin = (id: any) => {
    return [
      <Button
        key="delete"
        className="capitalize"
        type="primary"
        danger
        size="small"
        onClick={() => handleOpenModalDelete(id)}
      >
        Xóa
      </Button>,
    ];
  };
  return (
    <SMembers>
      {data && data.length > 0 && (
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item: any, index) => (
            <List.Item actions={isAdmin ? actionsAdmin(item.id) : []}>
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src={`https://picsum.photos/id/${index}/200/300`} />
                  }
                  title={<a href="https://ant.design">{item.name}</a>}
                  description={item.email}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      )}

      <Modal
        title="Xoá thành viên"
        centered
        open={isOpenModalDelete}
        onOk={() => handleDeleteMember(idMember)}
        onCancel={handleCloseModalDelete}
        okText="Xoá"
        cancelText="Đóng"
        className="text-center"
      >
        <p className="my-3">Xác nhận xoá thành viên ra khỏi club</p>
      </Modal>
    </SMembers>
  );
}
