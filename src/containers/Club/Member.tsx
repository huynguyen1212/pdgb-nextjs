import React from "react";
import { SMembers } from "./style";
import { Avatar, Button, List, Skeleton } from "antd";

export interface PropsType {
  data: any;
  isAdmin: boolean;
}

export default function Member({ data, isAdmin }: PropsType) {
  const actionsMember = [
    <Button key="detail" className="capitalize" type="primary" size="small">
      Chi tiết
    </Button>,
  ];

  const actionsAdmin = [
    ...actionsMember,
    <Button
      key="delete"
      className="capitalize"
      type="primary"
      danger
      size="small"
    >
      Xóa
    </Button>,
  ]

  return (
    <SMembers>
      {data && data.length > 0 && (
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item: any, index) => (
            <List.Item
              actions={
                isAdmin
                  ? actionsAdmin
                  : actionsMember
              }
            >
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
    </SMembers>
  );
}
