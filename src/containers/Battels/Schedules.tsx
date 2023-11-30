import { useEffect, useState } from "react";
import { Modal, Select } from "antd";
import FullCalendar from "@fullcalendar/react";
import allLocales from "@fullcalendar/core/locales-all";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";
import Image from "next/image";

import { SSchedules } from "./style";
import styled from "styled-components";
import { useQuery } from "react-query";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";
import {
  DAY_OF_WEEK,
  convertTo12HourFormat,
  convertToVietnameseDate,
  gopNgayVaGio,
} from "src/helpers/date";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IMAGES } from "./data/data";

export default function Schedules() {
  // state
  const [events, setEvents] = useState([]);
  const [idMatch, setIdMatch] = useState<any>(-1);

  // api
  const { data: detailMatch } = useQuery(
    ["DETAIL_MATCH", idMatch],
    async () => {
      const response = await requestToken({
        method: "GET",
        url: API_URL.MATCHS.DETAIL_MATCH(idMatch),
      });
      return response?.data.data;
    }
  );

  const { data: listAllMatchs } = useQuery(["LIST_ALL_MATCH"], async () => {
    const response = await requestToken({
      method: "GET",
      url: API_URL.MATCHS.LIST_ALL_MATCH,
    });
    return response?.data.data;
  });

  useEffect(() => {
    if (listAllMatchs && listAllMatchs.length > 0) {
      const data = listAllMatchs.map((item: any) => {
        return {
          title: item.sports_discipline.name,
          start: new Date(gopNgayVaGio(item.match_date, item.match_time)),
          resourceId: item.id,
          id: item.id,
        };
      });

      setEvents(data);
    }
  }, [listAllMatchs]);

  // modal event
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (arg: any) => {
    setIsModalOpen(true);
    setIdMatch(arg.event.id);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // filter
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

  return (
    <SSchedules>
      <div className="filter">
        <div className="mb-[30px]">
          {/* <label className="labe-form">Lịch thi đấu của:</label>

          <Select
            className="input_form"
            showSearch
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            defaultValue="1"
            options={[
              {
                value: "1",
                label: "Lịch của tôi",
              },
              {
                value: "2",
                label: "Tất cả",
              },
            ]}
          /> */}
        </div>
      </div>

      <div className="wrap_calender">
        <FullCalendar
          locales={allLocales}
          locale="vi"
          plugins={[
            resourceTimelinePlugin,
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "timeGridDay,timeGridWeek,dayGridMonth",
          }}
          initialView="timeGridDay"
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          resources={[]}
          events={events}
          eventClick={(arg) => {
            showModal(arg);
          }}
        />
      </div>

      {/* modal accept */}
      <Modal
        title="Chi tiết Match"
        centered
        open={isModalOpen}
        onCancel={handleCancel}
        width={1000}
        footer={null}
      >
        <SModalEvent>
          {detailMatch && (
            <div className="list_item">
              <div className="time_image">
                <div className="time">
                  <p className="month">
                    {DAY_OF_WEEK[new Date(detailMatch.match_date).getDay()]}
                  </p>
                  <p className="date">
                    {new Date(detailMatch.match_date).getDate()}
                  </p>
                </div>

                <div className="image">
                  <Image
                    src={IMAGES[Number(detailMatch.sports_discipline.id) - 1]}
                    alt=""
                    width={100}
                  />
                </div>
              </div>

              <div className="content">
                <p className="content_date">
                  <FaRegCalendarAlt color="#0a2664" size={17} />
                  <span>{`${convertToVietnameseDate(
                    detailMatch.match_date
                  )} | ${convertTo12HourFormat(detailMatch.match_time)}`}</span>
                </p>

                <p className="content_name_category">
                  Bộ Môn:
                  <span className="uppercase">
                    {detailMatch.sports_discipline.name}
                  </span>
                </p>

                <p className="content_name_category">
                  Đội 1:
                  <span className="uppercase">
                    {detailMatch.team_ones
                      .map((i: any) => `${i.name}`)
                      .join(", ")}
                  </span>
                </p>

                {detailMatch.team_twos.length > 0 && (
                  <p className="content_name_category">
                    Đội 2:
                    <span className="uppercase">
                      {detailMatch.team_twos
                        .map((i: any) => `${i.name}`)
                        .join(", ")}
                    </span>
                  </p>
                )}

                <p className="content_name_category">
                  Thời gian: <span>{detailMatch.duration_minutes} phút</span>
                </p>

                <p className="content_name_category">
                  Địa điểm: <span>{detailMatch.venue}</span>
                </p>

                <p className="content_coin">{detailMatch.coin} coin</p>

                <p className="content_des">{detailMatch.description}</p>
              </div>
            </div>
          )}
        </SModalEvent>
      </Modal>
    </SSchedules>
  );
}

const SModalEvent = styled.div`
  .list_item {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 5fr;

    .time_image {
      .time {
        text-align: center;
        color: #0a2664;
        margin-bottom: 50px;

        .month {
          font-size: 14px;
          line-height: 17px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 0;
        }

        .date {
          font-size: 28px;
          line-height: 35px;
          font-weight: 600;
        }
      }

      .image {
        display: flex;
        justify-content: center;
      }
    }

    .content {
      .content_date {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 15px;

        span {
          font-size: 14px;
          line-height: 19px;
          font-weight: 400;
          color: #94979f;
        }
      }

      .content_name_category {
        color: #0a2664;
        font-size: 14px;
        margin-bottom: 5px;

        span {
          font-size: 17px;
          margin-left: 5px;
          font-weight: 600;
        }

        .uppercase {
          text-transform: uppercase;
        }
      }

      .content_coin {
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.6px;
        color: #ffc107;
        margin-bottom: 5px;
      }

      .content_name_team {
        color: #0a2664;
        font-size: 14px;

        span {
          text-transform: uppercase;
          font-size: 15px;
          font-weight: 600;
          margin-left: 5px;
        }
      }

      .content_des {
        font-size: 17px;
        line-height: 27px;
        font-weight: 400;
        color: #757984;
        margin: 10px 0;
      }
    }

    .status {
      display: flex;
      align-items: start;
      justify-content: flex-end;
      width: 100%;

      .ant-tag {
        font-size: 13px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        padding: 0 15px;
      }
    }
  }
`;
