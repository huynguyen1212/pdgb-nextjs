import { SSchedules } from "./style";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Select } from "antd";

export default function Schedules() {
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
          initialEvents={[
            { title: "Nice event", start: new Date(), resourceId: "a" },
          ]}
        />
      </div>
    </SSchedules>
  );
}
