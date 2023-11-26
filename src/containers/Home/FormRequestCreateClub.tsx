import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  message,
  InputNumber,
  Select,
  SelectProps,
} from "antd";
import { Container } from "styled-bootstrap-grid";
import { SFormRequestCreateClub } from "./style";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";
import { useMutation, useQuery } from "react-query";
import Loading from "src/components/Loading";

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

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: (data) =>
      requestToken({ method: "POST", url: API_URL.CREATE_CLUB, data: data }),
    onError(error: any, variables, context) {
      message.error(error?.response?.data?.message || "Thất bại");
    },
    onSuccess(data, variables, context) {
      message.success("Đã gửi request tạo club!", 1.5);
      message.info(
        "Các request join club trước đó sẽ bị huỷ khi bạn tạo club!",
        4
      );
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
          <h3 className="page-content-title title_form">Tạo club</h3>

          <Form
            form={form}
            layout="vertical"
            name="basic"
            onFinish={onSubmitRequestForm}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="mb-[16px]">
              <Form.Item<FormRequest>
                label="Tên club"
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
              <Form.Item
                label="Bộ môn"
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
              <Form.Item
                label="Số lượng thành viên"
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
                  max={100}
                />
              </Form.Item>
            </div>

            <div className="mb-[16px]">
              <Form.Item label="Giới thiệu" name="description">
                <TextArea
                  placeholder="Giới thiệu club"
                  autoSize={{ minRows: 4, maxRows: 6 }}
                />
              </Form.Item>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="btn-create"
                disabled={isLoading}
              >
                Tạo club
                {isLoading && (
                  <div className="loader">
                    <Loading />
                  </div>
                )}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Container>
    </SFormRequestCreateClub>
  );
}
