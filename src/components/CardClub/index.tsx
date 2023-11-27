import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SModalJoinClub, StylesCard } from "./style";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";
import { useMutation } from "react-query";
import { Button, Form, Modal, Select, SelectProps, message } from "antd";
import Loading from "src/components/Loading";
import IconFirstMember from "../Icons/IconFirstMember";
import IconSecondMember from "../Icons/IconSecondMember";
import teams from "src/assets/image/teams.png";

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
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenModalCancel, setIsOpenModalCancel] = useState<boolean>(false);
  const [options, setOptions] = useState<SelectProps["options"]>([]);
  const [isRequested, setIsRequested] = useState<boolean>(false);

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

  const { isLoading: isLoadingJoin, mutateAsync } = useMutation({
    mutationFn: (data) =>
      requestToken({ method: "POST", url: API_URL.JOIN_CLUB, data: data }),
    onError(error: any, variables, context) {
      message.error(error?.response?.data?.message || "Thất bại");
    },
    onSuccess(data, variables, context) {
      handleCloseModalJoin();
      message.success("Đã gửi request join club!", 1.5);
      message.info(
        "Các request join club sau đó sẽ bị huỷ vì bạn chỉ được đồng ý tham gia 1 club!",
        4
      );
      setIsRequested(true);
    },
  });

  const { isLoading: isLoadingCancel, mutateAsync: mutateCancel } = useMutation(
    {
      mutationFn: (data) =>
        requestToken({
          method: "POST",
          url: API_URL.CANCEL_JOIN_CLUB,
          data: data,
        }),
      onError(error: any, variables, context) {
        message.error(error?.response?.data?.message || "Thất bại");
      },
      onSuccess(data, variables, context) {
        handleCloseModalJoin();
        message.success("Đã huỷ request join trước đó!", 1.5);
        setIsRequested(false);
      },
    }
  );

  const onSubmitRequestJoin = (values: any) => {
    mutateAsync({
      ...values,
      club_id: id,
    });
    form.resetFields();
  };

  const onSubmitRequestCancel = (values: any) => {
    mutateCancel({
      ...values,
      club_id: id,
    });
    form.resetFields();
  };

  const handleOpenModalJoin = () => {
    setIsOpenModal(true);
  };

  const handleCloseModalJoin = () => {
    setIsOpenModal(false);
  };

  const handleOpenModalCancel = () => {
    setIsOpenModalCancel(true);
  };

  const handleCloseModalCancel = () => {
    setIsOpenModalCancel(false);
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

            <Button
              type="primary"
              danger={isRequested}
              htmlType="button"
              className="card__menu"
              onClick={
                isRequested ? handleOpenModalCancel : handleOpenModalJoin
              }
            >
              {isRequested ? "Cancel" : "Join"}
            </Button>
          </div>

          <div className="wrap__card">
            <div className="card__avatar">
              <Image src={teams} alt="" />
            </div>

            <div className="card__title">{name}</div>

            <div className="card__status card__info">
              Trạng thái:
              <span className={`status ${status === 1 ? "active" : "off"}`}>
                {status === 1 ? "Đang hoạt động" : "Ngừng hoạt động"}
              </span>
            </div>

            {/* <div className="card__status">Teams: {teams_count}</div> */}

            <div className="card__status card__info">
              Bộ môn thi đấu:
              <span>{options?.map((sport) => sport.label).join(", ")}</span>
            </div>

            {description && (
              <div className="card__subtitle card__info">
                Tiểu sử: <span>{description}</span>
              </div>
            )}

            <div className="card__indicator">
              <span className="card__indicator-amount">{members}</span>/
              {number_of_members} Thành viên
            </div>

            <div className="card__progress">
              <progress
                max={100}
                value={Math.round(Number((members / number_of_members) * 100))}
              />
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      <Modal
        title={`Join club ${name}`}
        centered
        open={isOpenModal}
        onCancel={handleCloseModalJoin}
        footer={null}
      >
        <SModalJoinClub>
          <Form
            form={form}
            layout="vertical"
            name="basic"
            onFinish={onSubmitRequestJoin}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="mb-[16px]">
              <Form.Item
                label="Bộ môn"
                name="sports_discipline_id"
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
                disabled={isLoadingJoin}
              >
                Join club
                {isLoadingJoin && (
                  <div className="loader">
                    <Loading />
                  </div>
                )}
              </Button>
            </Form.Item>
          </Form>
        </SModalJoinClub>
      </Modal>

      <Modal
        title={`Cancel join club ${name}`}
        centered
        open={isOpenModalCancel}
        onCancel={handleCloseModalCancel}
        footer={null}
      >
        <SModalJoinClub>
          <Form
            form={form}
            layout="vertical"
            name="basic"
            onFinish={onSubmitRequestCancel}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="btn-create"
                disabled={isLoadingCancel}
              >
                Cancel join club
                {isLoadingCancel && (
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
