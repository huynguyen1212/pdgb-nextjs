import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  message,
  InputNumber,
  Select,
  SelectProps,
  Modal,
} from "antd";
import { Container } from "styled-bootstrap-grid";
import { SFormRequestCreateClub } from "./style";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";
import { useMutation, useQuery, useQueryClient } from "react-query";

const { TextArea } = Input;

type FormRequest = {
  club_name: string;
  number_of_members: number;
  sports_discipline_ids: number[];
  description?: string;
};

type ListSportType = {
  id: number;
  name: string;
  number_of_participants: number;
  number_of_reserves: number;
};

export default function FormRequestCreateClub() {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  useQuery({
    queryKey: ["getListSports"],
    queryFn: () =>
      requestToken({
        method: "GET",
        url: API_URL.LIST_SPORT,
      }),
    onSuccess(data) {
      setListSports(data.data.data);
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: (data) =>
      requestToken({ method: "POST", url: API_URL.CREATE_CLUB, data: data }),
    onError(error: any) {
      message.error(error?.response?.data?.message || "Thất bại");
    },
    onSuccess() {
      message.success("Đã gửi request tạo club!", 1.5);
      queryClient.invalidateQueries("listOtherClubs");
    },
  });

  const onSubmitRequestForm = (values: any) => {
    mutateAsync(values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const [listSports, setListSports] = useState<ListSportType[]>([]);
  const [options, setOptions] = useState<SelectProps["options"]>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => setIsOpenModal(true);

  const handleCloseModal = () => setIsOpenModal(false);

  useEffect(() => {
    const optionsSelect: SelectProps["options"] = [];
    listSports.map((sport) => {
      optionsSelect.push({
        label: sport.name,
        value: sport.id,
      });
    });
    setOptions(optionsSelect);
  }, [listSports]);

  return (
    <SFormRequestCreateClub>
      <Container>
        <div className="form_request_create_club">
          <h3 className="page-content-title title_form">
            Gửi yêu cầu tạo club
          </h3>

          <Form
            form={form}
            layout="vertical"
            name="basic"
            onFinish={onSubmitRequestForm}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="mb-[16px]">
              <label className="labe-form">
                Tên club <span>*</span>
              </label>
              <Form.Item<FormRequest>
                name="club_name"
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập tên club!",
                  },
                ]}
              >
                <Input size="large" placeholder="Nhập tên club" />
              </Form.Item>
            </div>

            <div className="mb-[16px]">
              <label className="labe-form">
                Bộ môn <span>*</span>
              </label>
              <Form.Item
                name="sports_discipline_ids"
                rules={[
                  {
                    required: true,
                    message: "Hãy chọn các bộ môn thi đấu trong club",
                  },
                ]}
              >
                <Select
                  placeholder="Chọn bộ môn"
                  mode="multiple"
                  allowClear
                  options={options}
                />
              </Form.Item>
            </div>

            <div className="mb-[16px]">
              <label className="labe-form">
                Số lượng thành viên <span>*</span>
              </label>
              <Form.Item
                name="number_of_members"
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập số lượng thành viên trong club",
                  },
                ]}
              >
                <InputNumber
                  placeholder="Nhập số lượng thành viên"
                  style={{ width: "100%", padding: "0 10px" }}
                  size="large"
                  min={1}
                  max={1000}
                />
              </Form.Item>
            </div>

            <div className="mb-[16px]">
              <label className="labe-form">
                Slogan <span>*</span>
              </label>
              <Form.Item
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập Slogan",
                  },
                ]}
              >
                <TextArea
                  placeholder="Giới thiệu club"
                  autoSize={{ minRows: 4, maxRows: 6 }}
                />
              </Form.Item>
            </div>

            <Form.Item>
              <Button
                type="primary"
                className="btn-create"
                onClick={handleOpenModal}
              >
                Gửi
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Modal
          title="Xác nhận tạo club"
          centered
          open={isOpenModal}
          onCancel={handleCloseModal}
          okText="Tạo"
          cancelText="Đóng"
          onOk={form.submit}
        >
          <p className="my-3">
            Các request join club trước đó sẽ bị huỷ khi bạn tạo club!
          </p>
        </Modal>
      </Container>
    </SFormRequestCreateClub>
  );
}
