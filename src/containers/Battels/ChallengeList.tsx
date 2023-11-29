import {
  Button,
  DatePicker,
  DatePickerProps,
  Modal,
  Select,
  Tag,
  message,
} from "antd";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { SChallengeList, SModalAccept, SModalConfirmMatch } from "./style";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";
import {
  DAY_OF_WEEK,
  convertTo12HourFormat,
  convertToVietnameseDate,
} from "src/helpers/date";
import { IMAGES } from "./data/data";

export default function ChallengeList() {
  // state
  const [idPK, setIdPK] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenReject, setIsModalOpenReject] = useState(false);
  const [isModalOpenConfirm, setIsModalOpenConfirm] = useState(false);
  const [isBattelNow, setIsBattelNow] = useState(false);
  const [memberList, setMemberList] = useState<string[]>([]);

  // api
  const { data: listPK, refetch } = useQuery(["LIST_PK"], async () => {
    const response = await requestToken({
      method: "GET",
      url: API_URL.MATCHS.LIST_PK,
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

  const { data: inDueMatch, refetch: refetchWait } = useQuery(
    ["IN_DUE_MATCH"],
    async () => {
      const response = await requestToken({
        method: "GET",
        url: API_URL.MATCHS.IN_DUE_MATCH,
      });
      return response?.data.data[0];
    }
  );

  const { mutate: replyMatch, isLoading } = useMutation({
    mutationFn: (data: any) =>
      requestToken({
        method: "POST",
        url: API_URL.MATCHS.REPLY_PK(idPK),
        data: data,
      }),
    onError(error: any, variables, context) {
      message.error(error?.response?.data?.message || "Thất bại");
    },
    onSuccess(data, variables, context) {
      message.success(
        (isModalOpen && "Chấp nhận khiêu chiến thành công!") ||
          (isModalOpenReject && "Từ chối thành công")
      );
      refetch();
      setIsModalOpen(false);
      setIsModalOpenReject(false);
    },
  });

  const { mutate: confirmMatch, isLoading: isLoadingConfirmMatch } =
    useMutation({
      mutationFn: (data: any) =>
        requestToken({
          method: "POST",
          url: API_URL.MATCHS.CONFIRM_MATCH,
          data: data,
        }),
      onError(error: any, variables, context) {
        message.error(error?.response?.data?.message || "Thất bại");
      },
      onSuccess(data, variables, context) {
        message.success("Gửi yêu cầu xác nhận thành công");
        refetchWait();
        setIsModalOpenConfirm(false);
      },
    });

  const { mutate: replyConfirmMatch, isLoading: isLoadingReplyConfirmMatch } =
    useMutation({
      mutationFn: (data: any) =>
        requestToken({
          method: "POST",
          url: API_URL.MATCHS.REPLY_CONFIRM_MATCH,
          data: data,
        }),
      onError(error: any, variables, context) {
        message.error(error?.response?.data?.message || "Thất bại");
      },
      onSuccess(data, variables, context) {
        message.success("Xác nhận thành công");
        refetchWait();
        setIsModalOpenConfirm(false);
      },
    });

  // modal accept
  const showModalAccept = (id: any) => {
    setIdPK(id);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const data = {
      status: 2,
      member_ids: memberList,
    };

    replyMatch(data);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setMemberList([]);
  };

  const handleChangeSelect = (value: string[]) => {
    setMemberList(value);
  };

  // modal reject
  const showModalReject = (id: any) => {
    setIdPK(id);
    setIsModalOpenReject(true);
  };

  const handleOkRject = () => {
    const data = {
      status: 3,
    };

    replyMatch(data);
    setIsModalOpen(false);
  };

  const handleCancelReject = () => {
    setIsModalOpenReject(false);
  };

  // modal confirm match
  const handleOkConfirmMatch = () => {
    setIsModalOpenConfirm(false);
  };

  // filter
  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <SChallengeList>
      <div className="filter_button">
        {isBattelNow ? (
          <h3 className="title_item" style={{ marginBottom: 0 }}>
            Trận đấu chờ cập nhật kết quả
          </h3>
        ) : (
          <div className="filter">
            {/* <div className="arrow_button">
              <span className="arrow_left">
                <MdArrowBackIosNew />
              </span>
              <span className="arrow_left">
                <MdArrowForwardIos />
              </span>
            </div>

            <button onClick={() => {}}>Today</button>

            <div className="ml-[20px]">
              <DatePicker
                onChange={onChangeDate}
                className="date_picker"
                placeholder="Lọc theo ngày"
              />
            </div> */}
          </div>
        )}

        <div className="button_now">
          {isBattelNow ? (
            <Button type="primary" onClick={() => setIsBattelNow(false)}>
              Lời khiêu chiến
            </Button>
          ) : (
            <Button type="primary" onClick={() => setIsBattelNow(true)}>
              Trận đấu chờ cập nhật kết quả
            </Button>
          )}
        </div>
      </div>

      {isBattelNow ? (
        <div className="list_pk">
          <div className="list_main">
            {inDueMatch &&
              inDueMatch.length > 0 &&
              inDueMatch.map((item: any) => {
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
                        Bộ Môn:
                        <span className="uppercase">
                          {item.sports_discipline.name}
                        </span>
                      </p>

                      <p className="content_name_category">
                        Đội bạn:
                        <span className="uppercase">
                          {item.team_ones
                            .map((i: any) => `${i.name}`)
                            .join(", ")}
                        </span>
                      </p>

                      {item.team_twos.length > 0 && (
                        <p className="content_name_category">
                          Đội mình:
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

                      <p className="content_des">
                        Đối thủ nói là: {item.description}
                      </p>
                    </div>

                    {item.status === 1 ? (
                      <div className="wrap_buttons">
                        <div className="buttons">
                          <Button
                            type="primary"
                            onClick={() => showModalAccept(item.id)}
                          >
                            Chiến luôn
                          </Button>

                          <Button
                            type="primary"
                            onClick={() => showModalReject(item.id)}
                            danger
                          >
                            Chơi bời gì
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <p className="status">
                        <Tag color={item.status === 2 ? "green" : "red"}>
                          {item.status_name}
                        </Tag>
                      </p>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div className="list_pk">
          <h3 className="title_item">Danh sách lời khiêu chiến</h3>

          <div className="list_main">
            {listPK &&
              listPK.length > 0 &&
              listPK.map((item: any) => {
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
                        Bộ Môn:
                        <span className="uppercase">
                          {item.sports_discipline.name}
                        </span>
                      </p>

                      <p className="content_name_category">
                        Đội bạn:
                        <span className="uppercase">
                          {item.team_ones
                            .map((i: any) => `${i.name}`)
                            .join(", ")}
                        </span>
                      </p>

                      {item.team_twos.length > 0 && (
                        <p className="content_name_category">
                          Đội mình:
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

                      <p className="content_des">
                        Đối thủ nói là: {item.description}
                      </p>
                    </div>

                    {item.status === 1 ? (
                      <div className="wrap_buttons">
                        <div className="buttons">
                          <Button
                            type="primary"
                            onClick={() => showModalAccept(item.id)}
                          >
                            Chiến luôn
                          </Button>

                          <Button
                            type="primary"
                            onClick={() => showModalReject(item.id)}
                            danger
                          >
                            Chơi bời gì
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <p className="status">
                        <Tag color={item.status === 2 ? "green" : "red"}>
                          {item.status_name}
                        </Tag>
                      </p>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* modal accept */}
      <Modal
        title="Chiến luôn"
        centered
        width={1000}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={isLoading}
      >
        <SModalAccept>
          <div className="mb-[30px]">
            <label className="labe-form">
              Chọn thành viên trong đội <span>*</span>
            </label>

            <Select
              className="input_form"
              mode="multiple"
              allowClear
              onChange={handleChangeSelect}
              style={{ width: "100%" }}
              placeholder="Thành viên trong đội"
              options={clubDetail?.members.map((item: any) => {
                return {
                  label: item.name,
                  value: item.id,
                };
              })}
            />
          </div>
        </SModalAccept>
      </Modal>

      {/* modal không chơi */}
      <Modal
        title="Chơi bời gì tầm này"
        centered
        open={isModalOpenReject}
        onOk={handleOkRject}
        onCancel={handleCancelReject}
      >
        <SModalConfirmMatch>
          <p className="question">Từ chối lời khiêu chiến !!!</p>
        </SModalConfirmMatch>
      </Modal>

      {/* modal confirm match */}
      <Modal
        title="Xác nhận trận đấu"
        centered
        open={isModalOpenConfirm}
        onOk={handleOkConfirmMatch}
        onCancel={() => {
          setIsModalOpenConfirm(false);
        }}
      >
        <SModalConfirmMatch>
          <p className="question">
            Trận đấu của bạn đã kết thúc? <br />
            Ấn <span>OK</span> để xác nhận nào !!!
          </p>
        </SModalConfirmMatch>
      </Modal>
    </SChallengeList>
  );
}
