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
  Tag,
} from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import TextArea from "antd/lib/input/TextArea";
import dayjs, { Dayjs } from "dayjs";
import { useMutation, useQuery } from "react-query";
import Image from "next/image";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";
import { SCreateRoom } from "./style";
import {
  DAY_OF_WEEK,
  convertTo12HourFormat,
  convertToVietnameseDate,
  formatDate,
  formatTime,
} from "src/helpers/date";

import { FaRegCalendarAlt } from "react-icons/fa";
import { IMAGES } from "./data/data";

type DisabledTime = (current: Dayjs | undefined) => {
  disabledHours?: () => number[];
  disabledMinutes?: (selectedHour: number) => number[];
};

export default function CreateRoom() {
  const [antForm] = Form.useForm();

  // state
  const [isCreateNewMatch, setIsCreateNewMatch] = useState(false);
  const [sportId, setSportId] = useState<any>();

  // api
  const { data: listMatchs, refetch } = useQuery(["LIST_MATCHS"], async () => {
    const response = await requestToken({
      method: "GET",
      url: API_URL.MATCHS.LIST_MATCHS,
    });
    return response?.data.data;
  });

  const { data: listSports } = useQuery(["getListSports"], async () => {
    const response = await requestToken({
      method: "GET",
      url: API_URL.LIST_SPORT,
    });
    return response?.data.data;
  });

  const { data: clubsOther } = useQuery(["CLUBS_OTHER"], async () => {
    const response = await requestToken({
      method: "GET",
      url: API_URL.CLUBS.CLUBS_OTHER,
    });
    return response?.data.data;
  });

  const { data: userInfo } = useQuery(["getUserInfo"], async () => {
    const response = await requestToken({
      method: "GET",
      url: API_URL.USER_INFO,
    });
    return response?.data.data;
  });

  const { data: listMemberWithSport } = useQuery(
    ["LIST_MEMBER_WITH_SPORT", sportId],
    async () => {
      const response = await requestToken({
        method: "GET",
        url: API_URL.CLUBS.LIST_MEMBER_WITH_SPORT(sportId),
      });
      return response?.data.data;
    },
    {
      enabled: !!sportId,
    }
  );

  const { mutate: createRoom, isLoading } = useMutation({
    mutationFn: (data) =>
      requestToken({ method: "POST", url: API_URL.MATCHS.CREATE, data: data }),
    onError(error: any, variables, context) {
      message.error(error?.response?.data?.message || "Thất bại");
    },
    onSuccess(data, variables, context) {
      message.success("Tạo phòng thành công!");
      antForm.resetFields();
      setIsCreateNewMatch(false);
      refetch();
    },
  });

  // function helper
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current <= dayjs().startOf("day");
  };

  const disabledTime: DisabledTime = (current) => {
    if (
      new Date(antForm.getFieldsValue().match_date).getDate() ===
      new Date().getDate()
    ) {
      return {
        disabledHours: () => {
          return Array.from({ length: dayjs().hour() }, (_, i) => i); // Vô hiệu hóa các giờ trong quá khứ
        },
        disabledMinutes: (selectedHour) => {
          return selectedHour === dayjs().hour()
            ? Array.from({ length: dayjs().minute() }, (_, i) => i) // Vô hiệu hóa các phút trong quá khứ nếu đã chọn giờ hiện tại
            : [];
        },
      };
    }
    return {};
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

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
      <div className="buttons">
        {isCreateNewMatch ? (
          <Button
            type="primary"
            danger
            onClick={() => setIsCreateNewMatch(false)}
          >
            Hủy tạo Match
          </Button>
        ) : (
          <Button type="primary" onClick={() => setIsCreateNewMatch(true)}>
            Tạo Match
          </Button>
        )}
      </div>

      {isCreateNewMatch && (
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
                          onChange={(value) => setSportId(value)}
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
                          options={
                            listMemberWithSport &&
                            listMemberWithSport.length > 0 &&
                            listMemberWithSport?.map((item: any) => {
                              return {
                                label: item.members.name,
                                value: item.members.id,
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
                          onChange={() =>
                            antForm.setFieldsValue({
                              match_time: undefined,
                            })
                          }
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
                          disabledTime={disabledTime}
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
                              coin: userInfo?.coin,
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
      )}

      {listMatchs && listMatchs.length > 0 && (
        <div className="list_pk">
          <h3 className="title_item">Match đã tạo</h3>

          <div className="list_main">
            {listMatchs.map((item: any) => {
              return (
                <div className="list_item" key={item.id}>
                  <div className="time_image">
                    <div className="time">
                      <p className="month">
                        {DAY_OF_WEEK[new Date(item.match_date).getDay()]}
                      </p>
                      <p className="date">
                        {new Date(item.match_date).getDate()}
                      </p>
                    </div>

                    <div className="image">
                      <Image
                        src={IMAGES[Number(item.sports_discipline.id) - 1]}
                        alt=""
                        width={100}
                      />
                    </div>
                  </div>

                  <div className="content">
                    <p className="content_date">
                      <FaRegCalendarAlt color="#0a2664" size={17} />
                      <span>{`${convertToVietnameseDate(
                        item.match_date
                      )} | ${convertTo12HourFormat(item.match_time)}`}</span>
                    </p>

                    <p className="content_name_category">
                      Bộ Môn:{" "}
                      <span className="uppercase">
                        {item.sports_discipline.name}
                      </span>
                    </p>

                    <p className="content_name_category">
                      Đội mình:
                      <span className="uppercase">
                        {item.team_ones.map((i: any) => `${i.name}`).join(", ")}
                      </span>
                    </p>

                    {item.team_twos.length > 0 && (
                      <p className="content_name_category">
                        Đội bạn:
                        <span className="uppercase">
                          {item.team_twos
                            .map((i: any) => `${i.name}`)
                            .join(", ")}
                        </span>
                      </p>
                    )}

                    <p className="content_name_category">
                      Thời gian: <span>{item.duration_minutes} phút</span>
                    </p>

                    <p className="content_name_category">
                      Địa điểm: <span>{item.venue}</span>
                    </p>

                    <p className="content_coin">{item.coin} coin</p>

                    <p className="content_name_team">
                      Danh sách Club Đối thủ:
                      <span>
                        {item.challenge_clubs
                          .map((i: any) => `${i.name}`)
                          .join(", ")}
                      </span>
                    </p>

                    <p className="content_des">{item.description}</p>
                  </div>

                  <p className="status">
                    <Tag
                      color={
                        item.status === 1
                          ? "orange"
                          : item.status === 2
                          ? "green"
                          : "red"
                      }
                    >
                      {item.status_name}
                    </Tag>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </SCreateRoom>
  );
}
