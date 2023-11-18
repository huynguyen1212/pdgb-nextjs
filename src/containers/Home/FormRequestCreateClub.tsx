import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message, Modal } from "antd";
import { Container } from "styled-bootstrap-grid";
import { SFormRequestCreateClub } from "./style";
import { request } from "src/api/axios";
import API_URL from "src/api/url";
import { useMutation, useQuery } from "react-query";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function FormRequestCreateClub() {
  useQuery({
    queryKey: ["getNewsNear"],
    queryFn: () =>
      request({
        method: "GET",
        url: API_URL.NEWS.GET,
      }),
    onSuccess(data) {
      console.log(data);
    },
  });

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: (data) =>
      request({ method: "POST", url: API_URL.LOGIN, data: data }),
    onError(error: any, variables, context) {
      message.error(error?.response?.data?.message || "Thất bại");
    },
    onSuccess(data, variables, context) {
      message.success("Thành công");
    },
  });

  const onFinish = (values: any) => {
    console.log("Success:", values);
    mutateAsync(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <SFormRequestCreateClub>
      <Container>
        <h3 className="page-content-title title_form">
          Form request create club
        </h3>
        <div className="form_request_create_club">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="mb-[16px]">
              <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
            </div>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Container>
    </SFormRequestCreateClub>
  );
}
