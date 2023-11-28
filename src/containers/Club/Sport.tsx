import { Col, Container, Row } from "styled-bootstrap-grid";
import { SSport } from "./style";
import CardTeam from "src/components/CardTeam";

export interface Props {
  data: any;
  number_of_members: number;
  isAdmin: boolean;
}

export default function Sport({ data, number_of_members, isAdmin }: Props) {
  return (
    <SSport>
      {data && data.length > 0 && (
        <Row>
          {data.map((sport: any) => (
            <Col
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              col={12}
              key={sport.id}
              className="item-sport"
            >
              <CardTeam
                avatar=""
                name={sport.name}
                id={sport.id}
                members={sport.number_of_participants}
                type={sport.id}
                number_of_members={number_of_members}
              />
            </Col>
          ))}
        </Row>
      )}
    </SSport>
  );
}

// import Table, { ColumnsType } from "antd/lib/table";
// import { Button, Modal, Space, message } from "antd";
// import { SSport } from "./style";
// import CardTeam from "src/components/CardTeam";

// export interface Props {
//   data: any;
//   number_of_members: number;
// }

// export default function Sport({ data, number_of_members }: Props) {
//   const columns: ColumnsType<any> = [
//     {
//       title: "STT",
//       dataIndex: "id",
//       key: "id",
//       render: (text) => <div className="">{text}</div>,
//     },
//     {
//       title: "Tên",
//       dataIndex: "name",
//       key: "name",
//       render: (text) => <div className="">{text}</div>,
//     },
//     {
//       title: "Thành viên",
//       dataIndex: "number_of_participants",
//       key: "number_of_participants",
//       render: (text) => <div className="">{text}</div>,
//     },
//     {
//       title: "Thành viên dự bị",
//       dataIndex: "number_of_reserves",
//       key: "number_of_reserves",
//       render: (text) => <div className="">{text}</div>,
//     },
//     {
//       title: "Action",
//       key: "action",
//       fixed: "right",
//       render: (_, record) => (
//         <Space size="small">
//           <Button className="capitalize" type="primary" size="small">
//             Chi tiết
//           </Button>
//           <Button className="capitalize" type="primary" danger size="small">
//             Xóa
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <SSport>
//       {/* {data && data.length > 0 && (
//         <Container>
//           <Row>
//             {data.map((sport: any) => (
//               <Col
//                 xl={6}
//                 lg={6}
//                 md={6}
//                 sm={12}
//                 xs={12}
//                 col={12}
//                 key={sport.id}
//                 className="item-sport"
//               >
//                 <CardTeam
//                   avatar=""
//                   name={sport.name}
//                   id={sport.id}
//                   members={sport.number_of_participants}
//                   type={sport.id}
//                   number_of_members={number_of_members}
//                 />
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       )} */}
//       {data && data.length > 0 && <Table columns={columns} dataSource={data} />}
//     </SSport>
//   );
// }
