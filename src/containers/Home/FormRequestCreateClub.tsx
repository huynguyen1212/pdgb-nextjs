import React, { useEffect, useRef, useState } from "react";
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
import { request } from "src/api/axios";
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
      request({
        method: "GET",
        url: API_URL.LIST_SPORT,
      }),
    onSuccess(data) {
      setListSports(data.data.data);
    },
  });

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: (data) =>
      request({ method: "POST", url: API_URL.CREATE_CLUB, data: data }),
    onError(error: any, variables, context) {
      message.error(error?.response?.data?.message || "Thất bại");
    },
    onSuccess(data, variables, context) {
      message.success("Tạo club thành công!");
    },
  });

  const onSubmitRequestForm = (values: any) => {
    const formData = {
      ...values,
      manager_id: 1,
    };
    mutateAsync(formData);
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
          <h3 className="page-content-title title_form">
            Form request create club
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
              <Form.Item<FormRequest>
                label="Club"
                name="club_name"
                rules={[
                  {
                    required: true,
                    message: "Please input your club name!",
                  },
                ]}
              >
                <Input size="large" placeholder="Input your club name" />
              </Form.Item>
            </div>

            <div className="mb-[16px]">
              <Form.Item
                label="Sport"
                name="sports_discipline_ids"
                rules={[
                  {
                    required: true,
                    message: "Please input your sport name!",
                  },
                ]}
              >
                <Select
                  placeholder="Select sport"
                  mode="multiple"
                  allowClear
                  options={options}
                />
              </Form.Item>
            </div>

            <div className="mb-[16px]">
              <Form.Item
                label="Number of members"
                name="number_of_members"
                rules={[
                  {
                    required: true,
                    message: "Please input your number of members!",
                  },
                ]}
              >
                <InputNumber
                  style={{ width: "100%", padding: '0 10px' }}
                  size="large"
                  min={1}
                  max={100000}
                  defaultValue={15}
                />
              </Form.Item>
            </div>

            <div className="mb-[16px]">
              <Form.Item label="Description" name="description">
                <TextArea
                  placeholder="Description your club"
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
                Create club
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
