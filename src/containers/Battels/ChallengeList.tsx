import {
  Button,
  DatePicker,
  DatePickerProps,
  Modal,
  Select,
  SelectProps,
} from "antd";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { SChallengeList, SModalAccept, SModalConfirmMatch } from "./style";
import bilac from "src/assets/image/bi-lac.jpeg";
import { useState } from "react";

export default function ChallengeList() {
  const [idPK, setIdPK] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenConfirm, setIsModalOpenConfirm] = useState(false);
  const [isBattelNow, setIsBattelNow] = useState(false);

  const options: SelectProps["options"] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }

  const handleChangeInModal = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  // modal confirm match
  const handleOkConfirmMatch = () => {
    setIsModalOpenConfirm(false);
  };

  return (
    <SChallengeList>
      <div className="filter_button">
        {isBattelNow ? (
          <h3 className="title_item" style={{ marginBottom: 0 }}>
            Trận đấu đang diễn ra
          </h3>
        ) : (
          <div className="filter">
            <div className="arrow_button">
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
                onChange={onChange}
                className="date_picker"
                placeholder="Lọc theo ngày"
              />
            </div>
          </div>
        )}

        <div className="button_now">
          {isBattelNow ? (
            <Button type="primary" onClick={() => setIsBattelNow(false)}>
              Lời khiêu chiến
            </Button>
          ) : (
            <Button type="primary" onClick={() => setIsBattelNow(true)}>
              Trận đang đấu
            </Button>
          )}
        </div>
      </div>

      {isBattelNow ? (
        <div className="list_pk">
          <div className="list_main">
            <div className="list_item">
              <div className="time_image">
                <div className="time">
                  <p className="month">Fri</p>
                  <p className="date">24</p>
                </div>

                <div className="image">
                  <Image src={bilac} alt="" width={100} />
                </div>
              </div>

              <div className="content">
                <p className="content_date">
                  <FaRegCalendarAlt color="#0a2664" size={17} />
                  <span>Jul 10, 2023 @ 10:30 am</span>
                </p>

                <p className="content_name_team">
                  Đối thủ: <span>PDGB</span>
                </p>

                <p className="content_name_category">
                  Bộ Môn: <span>Bilac</span>
                </p>

                <p className="content_des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  repellendus error dignissimos minima praesentium, eveniet, rem
                  quas molestias repudiandae expedita assumenda voluptatibus
                  numquam pariatur fugiat quis, facere itaque! Ipsum, fugiat.
                </p>

                <p className="content_coin">80 coin</p>
              </div>

              <div className="wrap_buttons">
                <div className="buttons">
                  <Button
                    type="primary"
                    onClick={() => {
                      setIsModalOpenConfirm(true);
                    }}
                  >
                    Cập nhật trạng thái
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="list_pk">
          <h3 className="title_item">Danh sách lời khiêu chiến</h3>

          <div className="list_main">
            <div className="list_item">
              <div className="time_image">
                <div className="time">
                  <p className="month">Fri</p>
                  <p className="date">24</p>
                </div>

                <div className="image">
                  <Image src={bilac} alt="" width={100} />
                </div>
              </div>

              <div className="content">
                <p className="content_date">
                  <FaRegCalendarAlt color="#0a2664" size={17} />
                  <span>Jul 10, 2023 @ 10:30 am</span>
                </p>

                <p className="content_name_team">
                  Đối thủ: <span>PDGB</span>
                </p>

                <p className="content_name_category">
                  Bộ Môn: <span>Bilac</span>
                </p>

                <p className="content_des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  repellendus error dignissimos minima praesentium, eveniet, rem
                  quas molestias repudiandae expedita assumenda voluptatibus
                  numquam pariatur fugiat quis, facere itaque! Ipsum, fugiat.
                </p>

                <p className="content_coin">80 coin</p>
              </div>

              <div className="wrap_buttons">
                <div className="buttons">
                  <Button type="primary" onClick={showModal}>
                    Chiến luôn
                  </Button>

                  <Button type="primary" danger>
                    Chơi bời gì
                  </Button>
                </div>
              </div>
            </div>

            <div className="list_item">
              <div className="time_image">
                <div className="time">
                  <p className="month">Fri</p>
                  <p className="date">24</p>
                </div>

                <div className="image">
                  <Image src={bilac} alt="" width={100} />
                </div>
              </div>

              <div className="content">
                <p className="content_date">
                  <FaRegCalendarAlt color="#0a2664" size={17} />
                  <span>Jul 10, 2023 @ 10:30 am</span>
                </p>

                <p className="content_name_team">
                  Đối thủ: <span>PDGB</span>
                </p>

                <p className="content_name_category">
                  Bộ Môn: <span>Bilac</span>
                </p>

                <p className="content_des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  repellendus error dignissimos minima praesentium, eveniet, rem
                  quas molestias repudiandae expedita assumenda voluptatibus
                  numquam pariatur fugiat quis, facere itaque! Ipsum, fugiat.
                </p>

                <p className="content_coin">80 coin</p>
              </div>

              <div className="wrap_buttons">
                <div className="buttons">
                  <Button type="primary" onClick={showModal}>
                    Chiến luôn
                  </Button>

                  <Button type="primary" danger>
                    Chơi bời gì
                  </Button>
                </div>
              </div>
            </div>

            <div className="list_item">
              <div className="time_image">
                <div className="time">
                  <p className="month">Fri</p>
                  <p className="date">24</p>
                </div>

                <div className="image">
                  <Image src={bilac} alt="" width={100} />
                </div>
              </div>

              <div className="content">
                <p className="content_date">
                  <FaRegCalendarAlt color="#0a2664" size={17} />
                  <span>Jul 10, 2023 @ 10:30 am</span>
                </p>

                <p className="content_name_team">
                  Đối thủ: <span>PDGB</span>
                </p>

                <p className="content_name_category">
                  Bộ Môn: <span>Bilac</span>
                </p>

                <p className="content_des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  repellendus error dignissimos minima praesentium, eveniet, rem
                  quas molestias repudiandae expedita assumenda voluptatibus
                  numquam pariatur fugiat quis, facere itaque! Ipsum, fugiat.
                </p>

                <p className="content_coin">80 coin</p>
              </div>

              <div className="wrap_buttons">
                <div className="buttons">
                  <Button type="primary" onClick={showModal}>
                    Chiến luôn
                  </Button>

                  <Button type="primary" danger>
                    Chơi bời gì
                  </Button>
                </div>
              </div>
            </div>
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
      >
        <SModalAccept>
          <p className="content_date">
            <FaRegCalendarAlt color="#0a2664" size={17} />
            <span>Jul 10, 2023 @ 10:30 am</span>
          </p>

          <p className="content_name_team">
            Đối thủ: <span>PDGB</span>
          </p>

          <p className="content_name_category">
            Bộ Môn: <span>Bilac</span>
          </p>

          <p className="content_des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            repellendus error dignissimos minima praesentium, eveniet, rem quas
            molestias repudiandae expedita assumenda voluptatibus numquam
            pariatur fugiat quis, facere itaque! Ipsum, fugiat.
          </p>

          <p className="content_coin">80 coin</p>

          <div className="mb-[30px]">
            <label className="labe-form">
              Chọn thành viên trong đội <span>*</span>
            </label>

            <Select
              className="input_form"
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              onChange={handleChangeInModal}
              options={options}
            />
          </div>
        </SModalAccept>
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
            Ấn <span>OK</span> để nhận coin nào !!!
          </p>
        </SModalConfirmMatch>
      </Modal>
    </SChallengeList>
  );
}
