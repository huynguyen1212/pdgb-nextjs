import { Button, DatePicker, DatePickerProps } from "antd";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { SChallengeList } from "./style";
import banner from "src/assets/image/logo_banner/logo.jpg";
import { useState } from "react";

export default function ChallengeList() {
  const [isAccept, setIsAccept] = useState(true);

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <SChallengeList>
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
                <Image src={banner} alt="" width={100} />
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
                <Button type="primary">Chiến luôn</Button>

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
                <Image src={banner} alt="" width={100} />
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
                <Button type="primary">Chiến luôn</Button>

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
                <Image src={banner} alt="" width={100} />
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
                <Button type="primary">Chiến luôn</Button>

                <Button type="primary" danger>
                  Chơi bời gì
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SChallengeList>
  );
}
