import { useState } from "react";
import {
  Col,
  Form,
  Row,
  Select,
  TimePicker,
  DatePicker,
  InputNumber,
  Button,
  message,
} from "antd";
import type { SelectProps } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import TextArea from "antd/lib/input/TextArea";
import dayjs from "dayjs";
import { useMutation, useQuery } from "react-query";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";
import { SCreateRoom } from "./style";
import { formatDate, formatTime } from "src/helpers/date";

export default function CreateRoom() {
  const [antForm] = Form.useForm();

  // state

  // api
  const { data: listSports } = useQuery(["getListSports"], async () => {
    const response = await requestToken({
      method: "GET",
      url: API_URL.LIST_SPORT,
    });
    return response?.data.data;
  });

  const { data: clubDetail } = useQuery(["CLUBS_DETAIL"], async () => {
    const response = await requestToken({
      method: "GET",
      url: API_URL.CLUBS.DETAIL,
    });
    return response?.data.data[0];
  });

  const { data: clubsOther } = useQuery(["CLUBS_OTHER"], async () => {
    const response = await requestToken({
      method: "GET",
      url: API_URL.CLUBS.CLUBS_OTHER,
    });
    return response?.data.data;
  });

  const { mutate: createRoom, isLoading } = useMutation({
    mutationFn: (data) =>
      requestToken({ method: "POST", url: API_URL.MATCHS.CREATE, data: data }),
    onError(error: any, variables, context) {
      message.error(error?.response?.data?.message || "Thất bại");
    },
    onSuccess(data, variables, context) {
      message.success("Tạo phòng thành công!");
      antForm.resetFields();
    },
  });

  // function helper
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current < dayjs().endOf("day");
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const options: SelectProps["options"] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }

  // form
  // const handleChangeValue = (allvalues: any) => {
  //   console.log(allvalues);
  //   console.log("date: ", formatDate(allvalues.match_date));
  //   console.log("time: ", formatTime(allvalues.match_time));
  // };

  const onFinish = (values: any) => {
    const data = {
      ...values,
      match_date: formatDate(values.match_date),
      match_time: formatTime(values.match_time),
    };
    createRoom(data);
  };

  return (
    <SCreateRoom>
      <Form
        form={antForm}
        onFinish={onFinish}
        // onValuesChange={(value, allvalues) => handleChangeValue(allvalues)}
        className="form-create"
      >
        <div className="px-[20px] py-[12px]">
          <Row gutter={50}>
            <Col span={12}>
              <h3 className="title_item">Thông tin lời khiêu chiến</h3>
              <Row gutter={16}>
                <Col span={24}>
                  <div className="mb-[30px]">
                    <label className="labe-form">
                      Chọn bộ môn thi đấu <span>*</span>
                    </label>
                    <Form.Item
                      name="sports_discipline_id"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập giá trị !!",
                        },
                      ]}
                    >
                      <Select
                        className="input_form"
                        showSearch
                        placeholder="Môn thi đấu"
                        optionFilterProp="children"
                        filterOption={filterOption}
                        options={
                          listSports &&
                          listSports.length > 0 &&
                          listSports.map((item: any) => {
                            return {
                              label: item.name,
                              value: item.id,
                            };
                          })
                        }
                      />
                    </Form.Item>
                  </div>
                </Col>

                <Col span={24}>
                  <div className="mb-[30px]">
                    <label className="labe-form">
                      Chọn thành viên trong đội <span>*</span>
                    </label>
                    <Form.Item
                      name="member_club_id"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập giá trị !!",
                        },
                      ]}
                    >
                      <Select
                        className="input_form"
                        mode="multiple"
                        allowClear
                        style={{ width: "100%" }}
                        placeholder="Thành viên trong đội"
                        options={clubDetail?.members.map((item: any) => {
                          return {
                            label: item.name,
                            value: item.id,
                          };
                        })}
                      />
                    </Form.Item>
                  </div>
                </Col>

                <Col span={24}>
                  <div className="mb-[30px]">
                    <label className="labe-form">
                      Chọn ngày thi đấu <span>*</span>
                    </label>
                    <Form.Item
                      name="match_date"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập giá trị !!",
                        },
                      ]}
                    >
                      <DatePicker
                        disabledDate={disabledDate}
                        className="input_form"
                        placeholder="Ngày thi đấu"
                      />
                    </Form.Item>
                  </div>
                </Col>

                <Col span={12}>
                  <div className="mb-[30px]">
                    <label className="labe-form">
                      Chọn giờ thi đấu <span>*</span>
                    </label>
                    <Form.Item
                      name="match_time"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập giá trị !!",
                        },
                      ]}
                    >
                      <TimePicker
                        format={"HH:mm"}
                        className="input_form"
                        placeholder="Giờ thi đấu"
                      />
                    </Form.Item>
                  </div>
                </Col>

                <Col span={12}>
                  <div className="mb-[30px]">
                    <label className="labe-form">
                      Thời gian thi đấu <span>*</span>
                    </label>
                    <Form.Item
                      name="duration_minutes"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập giá trị !!",
                        },
                      ]}
                    >
                      <InputNumber
                        placeholder="Số phút"
                        className="input_form"
                      />
                    </Form.Item>
                  </div>
                </Col>

                <Col span={24}>
                  <div className="mb-[30px]">
                    <label className="labe-form">
                      Chọn địa điểm <span>*</span>
                    </label>
                    <Form.Item
                      name="venue"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập giá trị !!",
                        },
                      ]}
                    >
                      <TextArea
                        className="input_form input_form_textarea"
                        placeholder="Chọn địa điểm"
                      />
                    </Form.Item>
                  </div>
                </Col>

                <Col span={12}>
                  <div className="mb-[30px]">
                    <label className="labe-form">
                      Chọn trạng thái công khai <span>*</span>
                    </label>
                    <Form.Item
                      name="type"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập giá trị !!",
                        },
                      ]}
                    >
                      <Select
                        className="input_form"
                        showSearch
                        placeholder="Trạng thái công khai"
                        optionFilterProp="children"
                        filterOption={filterOption}
                        options={[
                          {
                            value: "1",
                            label: "Công khai",
                          },
                          {
                            value: "2",
                            label: "Không công khai",
                          },
                        ]}
                      />
                    </Form.Item>
                  </div>
                </Col>

                <Col span={12}>
                  <div className="mb-[30px]">
                    <label className="labe-form">
                      Coin cược <span>*</span>
                    </label>

                    <div className="button_input">
                      <Form.Item
                        name="coin"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập giá trị !!",
                          },
                        ]}
                      >
                        <InputNumber
                          className="input_form"
                          placeholder="Số coin"
                        />
                      </Form.Item>

                      <Button
                        className="button_all_in"
                        type="primary"
                        onClick={() => {
                          antForm.setFieldsValue({
                            coin: 20,
                          });
                        }}
                      >
                        All in
                      </Button>
                    </div>
                  </div>
                </Col>

                <Col span={24}>
                  <div className="mb-[30px]">
                    <label className="labe-form">
                      Đôi lời nhắn gửi đến đối thủ
                    </label>
                    <Form.Item name="description">
                      <TextArea
                        className="input_form input_form_textarea"
                        placeholder="Muốn thua thì tới đây"
                      />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <h3 className="title_item">Chọn đội gửi lời khiêu chiến</h3>

              <div className="mb-[30px]">
                <label className="labe-form">
                  Chọn Clubs <span>*</span>
                </label>
                <Form.Item
                  name="challenge_club"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập giá trị !!",
                    },
                  ]}
                >
                  <Select
                    className="input_form"
                    mode="multiple"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Clubs"
                    options={clubsOther?.map((item: any) => {
                      return {
                        label: item.name,
                        value: item.id,
                      };
                    })}
                  />
                </Form.Item>
              </div>

              <Form.Item className="wrap_button_submit">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="button_submit"
                  loading={isLoading}
                >
                  Gửi lời mời
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Form>
    </SCreateRoom>
  );
}
