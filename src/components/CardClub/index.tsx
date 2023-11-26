import React, { useEffect, useState } from "react";
import { SModalJoinClub, StylesCard } from "./style";
import { request } from "src/api/axios";
import API_URL from "src/api/url";
import { useMutation } from "react-query";
import { Button, Form, Modal, Select, SelectProps, message } from "antd";
import Loading from "src/components/Loading";
import IconFirstMember from "../Icons/IconFirstMember";
import IconSecondMember from "../Icons/IconSecondMember";
import { SPORT_TYPE } from "src/constants/sport";

export interface Props {
  name: string;
  status: string | number;
  members: number;
  id: number;
  description?: string;
  teams_count: number;
  number_of_members: number;
  sports_disciplines: any;
}

export default function CardClub({
  name,
  members,
  status = 1,
  id,
  description = "",
  teams_count = 0,
  number_of_members = 0,
  sports_disciplines = [],
}: Props) {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<SelectProps["options"]>([]);

  useEffect(() => {
    const optionsSelect: SelectProps["options"] = [];
    sports_disciplines.map((sport: any) => {
      optionsSelect.push({
        label: sport.name,
        value: sport.id,
      });
    });
    setOptions(optionsSelect);
  }, [sports_disciplines]);

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: (data) =>
      request({ method: "POST", url: API_URL.JOIN_CLUB, data: data }),
    onError(error: any, variables, context) {
      message.error(error?.response?.data?.message || "Thất bại");
    },
    onSuccess(data, variables, context) {
      handleCloseModal();
      message.success("Đã gửi request join club!", 1.5);
      message.info(
        "Các request join club sau đó sẽ bị huỷ vì bạn chỉ được đồng ý tham gia 1 club!",
        4
      );
    },
  });

  const onSubmitRequestJoin = (values: any) => {
    mutateAsync({
      ...values,
      club_id: id,
    });
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StylesCard>
      <div className="card">
        <div className="card__inner">
          <div className="card__wrapper">
            <div className="card___wrapper-acounts">
              <div className="card__score">+{members}</div>
              <div className="card__acounts">
                <IconFirstMember />
              </div>
              <div className="card__acounts">
                <IconSecondMember />
              </div>
            </div>
            <button
              type="button"
              className="card__menu"
              onClick={handleOpenModal}
            >
              Join
            </button>
          </div>
          <div className="card__title">{name}</div>
          <p className="card__status">
            Status:{" "}
            <span className={`status ${status === 1 ? "active" : "off"}`}>
              {status === 1 ? "Active" : "Off"}
            </span>
          </p>
          <div className="card__status">Teams: {teams_count}</div>
          <div className="card__status">
            Sports: {options?.map(sport => sport.label).join(', ')}
          </div>

          {description && <div className="card__subtitle">Description: {description}</div>}
          <div className="card__indicator">
            <span className="card__indicator-amount">{members}</span>/
            {number_of_members} Members
          </div>
          <div className="card__progress">
            <progress
              max={100}
              value={Math.round(Number((members / number_of_members) * 100))}
            />
          </div>
        </div>
      </div>
      <Modal
        title={`Join club ${name}`}
        centered
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
      >
        <SModalJoinClub>
          <Form
            form={form}
            layout="vertical"
            name="basic"
            onFinish={onSubmitRequestJoin}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
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

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="btn-create"
                disabled={isLoading}
              >
                Join club
                {isLoading && (
                  <div className="loader">
                    <Loading />
                  </div>
                )}
              </Button>
            </Form.Item>
          </Form>
        </SModalJoinClub>
      </Modal>
    </StylesCard>
  );
}
