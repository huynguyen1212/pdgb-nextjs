import { Container } from "styled-bootstrap-grid";
import SBattels from "./style";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function Battels() {
  return (
    <SBattels>
      <Container>
        <div className="battels_banner">
          <div className="wrap_title">
            <p className="title_little" data-aos="fade-up">
              Battels
            </p>

            <p className="title" data-aos="fade-up">
              <span className="title_black">Sân chơi thể thao Amela</span>
              <br />
              <span className="title_other">
                Mở rộng phong trào thể thao, gắn kết cán bộ nhân viên bằng những
                trận đấu hay và đẹp !!
              </span>
            </p>
          </div>
        </div>
      </Container>

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
    </SBattels>
  );
}
