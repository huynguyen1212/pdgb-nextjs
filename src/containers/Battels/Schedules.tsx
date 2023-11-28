import { useState } from "react";
import { Modal, Select } from "antd";
import FullCalendar from "@fullcalendar/react";
import allLocales from "@fullcalendar/core/locales-all";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";

import { SSchedules } from "./style";
import styled from "styled-components";

export default function Schedules() {
  const [events, setEvents] = useState([
    {
      title: "Nice event 1",
      start: new Date().setHours(new Date().getHours() + 1),
      resourceId: "1",
      id: "1",
    },
    {
      title: "Nice event 2",
      start: new Date().setHours(new Date().getHours() + 2),
      resourceId: "2",
      id: "2",
    },
    {
      title: "Nice event 3",
      start: new Date().setHours(new Date().getHours() + 3),
      resourceId: "3",
      id: "3",
    },
    {
      title: "Nice event 1",
      start: new Date().setHours(new Date().getHours() + 4),
      resourceId: "4",
      id: "4",
    },
    {
      title: "Nice event 2",
      start: new Date().setHours(new Date().getHours() + 5),
      resourceId: "5",
      id: "5",
    },
    {
      title: "Nice event 3",
      start: new Date().setHours(new Date().getHours() + 6),
      resourceId: "6",
      id: "6",
    },
  ]);

  // modal event
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (arg: any) => {
    setIsModalOpen(true);
    console.log("arg: ", arg.event.id);
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
          <label className="labe-form">Lịch thi đấu của:</label>

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
                label: "Người khác 1",
              },
              {
                value: "3",
                label: "Người khác 2",
              },
            ]}
          />
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
      >
        <SModalEvent>Hi</SModalEvent>
      </Modal>
    </SSchedules>
  );
}

const SModalEvent = styled.div``;
