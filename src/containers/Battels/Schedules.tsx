import { SSchedules } from "./style";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function Schedules() {
  return (
    <SSchedules>
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
