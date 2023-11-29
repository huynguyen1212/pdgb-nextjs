import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SModalJoinClub, StylesCard } from "./style";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";
import { useMutation, useQueryClient } from "react-query";
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
  request_join_status: any;
  request_id: any;
  manager: string;
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
  request_join_status,
  request_id,
  manager,
}: Props) {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenModalCancel, setIsOpenModalCancel] = useState<boolean>(false);
  const [options, setOptions] = useState<SelectProps["options"]>([]);
  const [requested, setRequested] = useState<any>(request_join_status);

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
    onError(error: any) {
      message.error(error?.response?.data?.message || "Thất bại");
    },
    onSuccess() {
      handleCloseModalJoin();
      message.success("Đã gửi request join club!", 1.5);
      queryClient.invalidateQueries("listOtherClubs");
      setRequested(2);
    },
  });

  const { mutateAsync: mutateCancel } = useMutation(
    {
      mutationFn: () =>
        requestToken({
          method: "POST",
          url: `${API_URL.CANCEL_JOIN_CLUB}/${request_id}`,
        }),
      onError(error: any) {
        message.error(error?.response?.data?.message || "Thất bại");
      },
      onSuccess() {
        handleCloseModalCancel();
        message.success("Đã huỷ request join trước đó!", 1.5);
        queryClient.invalidateQueries("listOtherClubs");
        setRequested(1);
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

  const onSubmitRequestCancel = () => {
    mutateCancel();
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
              danger={requested === 1}
              htmlType="button"
              className="card__menu"
              onClick={
                requested === 1 ? handleOpenModalCancel : handleOpenModalJoin
              }
            >
              {requested === 1 ? "Huỷ" : "Tham gia"}
            </Button>
          </div>

          <div className="wrap__card">
            <div className="card__avatar">
              <Image src={teams} alt="" />
            </div>

            <div className="card__title">{name}</div>

            {/* <div className="card__status card__info">
              Trạng thái:
              <span className={`status ${status === 1 ? "active" : "off"}`}>
                {status === 1 ? "Đang hoạt động" : "Ngừng hoạt động"}
              </span>
            </div> */}

            {/* <div className="card__status">Teams: {teams_count}</div> */}
            <div className="card__status card__info">
              Admin:
              <span>{manager}</span>
            </div>

            <div className="card__status card__info">
              Bộ môn thi đấu:
              <span>{options?.map((sport) => sport.label).join(", ")}</span>
            </div>

            {description && (
              <div className="card__subtitle card__info">
                Slogan: <span>{description}</span>
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
        title={`Tham gia club ${name}`}
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
                Tham gia club
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
        title={`Huỷ tham gia club ${name}`}
        centered
        open={isOpenModalCancel}
        onCancel={handleCloseModalCancel}
        footer={null}
      >
        <SModalJoinClub>
          <p className="my-3">Xác nhận huỷ yêu cầu tham gia</p>
          <Button
            type="primary"
            onClick={onSubmitRequestCancel}
            className="btn-create"
            disabled={isLoadingJoin}
          >
            Huỷ
            {isLoadingJoin && (
              <div className="loader">
                <Loading />
              </div>
            )}
          </Button>
        </SModalJoinClub>
      </Modal>
    </StylesCard>
  );
}
