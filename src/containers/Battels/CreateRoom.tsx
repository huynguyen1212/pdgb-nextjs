import {
  Col,
  Form,
  Row,
  Select,
  TimePicker,
  DatePicker,
  Input,
  InputNumber,
  Button,
} from "antd";
import type { SelectProps } from "antd";
import { SCreateRoom } from "./style";
import TextArea from "antd/lib/input/TextArea";

export default function CreateRoom() {
  const [antForm] = Form.useForm();

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
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

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  const handleChangeValue = (allvalues: []) => {
    console.log(allvalues);
  };

  return (
    <SCreateRoom>
      <Form
        form={antForm}
        onValuesChange={(value, allvalues) => handleChangeValue(allvalues)}
        className="form-create"
      >
        <div className="px-[20px] py-[12px]">
          <Row gutter={50}>
            <Col span={12}>
              <h3 className="title_item">Chọn đội gửi lời khiêu chiến</h3>
              <Row gutter={16}>
                <Col span={24}>
                  <div className="mb-[30px]">
                    <label className="labe-form">
                      Chọn bộ môn thi đấu <span>*</span>
                    </label>
                    <Form.Item name="category">
                      <Select
                        className="input_form"
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={[
                          {
                            value: "jack",
                            label: "Jack",
                          },
                          {
                            value: "lucy",
                            label: "Lucy",
                          },
                          {
                            value: "tom",
                            label: "Tom",
                          },
                        ]}
                      />
                    </Form.Item>
                  </div>
                </Col>

                <Col span={24}>
                  <div className="mb-[30px]">
                    <label className="labe-form">
                      Chọn thành viên trong đội <span>*</span>
                    </label>
                    <Form.Item name="members">
                      <Select
                        className="input_form"
                        mode="multiple"
                        allowClear
                        style={{ width: "100%" }}
                        placeholder="Please select"
                        defaultValue={["a10", "c12"]}
                        onChange={handleChange}
                        options={options}
                      />
                    </Form.Item>
                  </div>
                </Col>

                <Col span={12}>
                  <div className="mb-[30px]">
                    <label className="labe-form">
                      Chọn thời gian thi đấu <span>*</span>
                    </label>
                    <Form.Item name="time">
                      <TimePicker use12Hours className="input_form" />
                    </Form.Item>
                  </div>
                </Col>

                <Col span={12}>
                  <div className="mb-[30px]">
                    <label className="labe-form">
                      Chọn ngày thi đấu <span>*</span>
                    </label>
                    <Form.Item name="date">
                      <DatePicker className="input_form" />
                    </Form.Item>
                  </div>
                </Col>

                <Col span={24}>
                  <div className="mb-[30px]">
                    <label className="labe-form">
                      Chọn địa điểm <span>*</span>
                    </label>
                    <Form.Item name="local">
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
                      Chọn trạng thái trận đấu <span>*</span>
                    </label>
                    <Form.Item name="status">
                      <Select
                        className="input_form"
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
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
                      <Form.Item name="amount_coin">
                        <InputNumber className="input_form" />
                      </Form.Item>

                      <Button
                        className="button_all_in"
                        type="primary"
                        onClick={() => {
                          antForm.setFieldsValue({
                            amount_coin: 20,
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
                    <Form.Item name="des">
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
                <Form.Item name="clubs">
                  <Select
                    className="input_form"
                    mode="multiple"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Please select"
                    defaultValue={["a10", "c12"]}
                    onChange={handleChange}
                    options={options}
                  />
                </Form.Item>
              </div>
            </Col>
          </Row>
        </div>
      </Form>
    </SCreateRoom>
  );
}
