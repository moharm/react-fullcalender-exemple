import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import { EventInput } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import momentPlugin from "@fullcalendar/moment";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import ReactDOM from "react-dom";
import listPlugin from "@fullcalendar/list";

import "./main.scss";
import { events } from "../../assets/calendar/events";
import EventModal from "./Modal/EventModal";
import Header from "./Modal/Header";
import moment from "moment";
import "moment/locale/fr";

interface DemoAppState {
  calendarWeekends: boolean;
  calendarEvents: EventInput[];
  currentdate: string;
}
const calendarComponentRef = React.createRef<FullCalendar>();

const Calendar: React.FC = (props: any) => {
  const initialState = {
    calendarWeekends: true,
    calendarEvents: events,
    currentdate: ""
  };
  moment.locale("fr");
  const [state, setstate] = useState<DemoAppState>(initialState);
  const CalendarApi = () => {
    return calendarComponentRef.current!.getApi();
  };

  const eventMouseEnter = (e: any) => {
    if (!e.event.extendedProps.type && e.event.extendedProps.type !== "warning")
      e.el.style.backgroundColor = e.event.extendedProps.HoverColor;
  };
  const eventMouseLeave = (e: any) => {
    e.el.style.backgroundColor = "#ffffff00";
  };

  const gotonextdate = () => {
    let calendarApi = CalendarApi();
    calendarApi.next();
  };
  const gotobackdate = () => {
    let calendarApi = CalendarApi();
    calendarApi.prev();
  };

  const eventRender = (e: any) => {
    console.log("********************");
    const el = e.el;
    const content = (
      <React.Fragment>
        <EventModal data={e.event} el={e.el} />
      </React.Fragment>
    );
    if (
      e.event.extendedProps.type &&
      e.event.extendedProps.type === "warning"
    ) {
      el.className += " EventWarnig";
    }

    ReactDOM.render(content, el);
  };
  const toggleWeekends = () => {
    setstate(prevState => ({
      ...prevState,
      calendarWeekends: !state.calendarWeekends
    }));
  };

  const gotoPast = () => {
    let calendarApi = CalendarApi();
    calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  };

  const handleDateClick = (arg: any) => {
    if (
      window.confirm("Would you like to add an event to " + arg.dateStr + " ?")
    ) {
      setstate(prevState => ({
        // add new event data
        ...prevState,
        calendarEvents: state.calendarEvents.concat({
          // creates a new array
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay
        })
      }));
    }
  };

  const UpperColumnsHeaderText = (date: any) => {
    return (
      "<b class='headerText'>" +
      date.toLocaleDateString(undefined, { weekday: "long" }).toUpperCase() +
      "</b>"
    );
  };

  const changeview = (view: string): void => {
    CalendarApi().changeView(view);
  };

  const getcurrentdate = (): string => {
    return calendarComponentRef.current
      ? moment(CalendarApi().getDate()).format("MMMM YYYY")
      : moment(new Date()).format("MMMM YYYY");
  };

  return (
    <div className="demo-app">
      <div>
        <Header
          currentdate={getcurrentdate}
          changeview={changeview}
          gotonextdate={gotonextdate}
          gotobackdate={gotobackdate}
        />
      </div>
      <div>
        <FullCalendar
          defaultView="dayGridWeek"
          fixedWeekCount={false}
          columnHeaderHtml={UpperColumnsHeaderText}
          timeZone="UTC"
          firstDay={1}
          locale="fr"
          contentHeight={700}
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            interactionPlugin,
            momentPlugin,
            bootstrapPlugin
          ]}
          //Theme
          themeSystem="bootstrap"
          customButtons={{
            CustomButton1: {
              // id: "id1", ca marche pas
              // icon: "fas fa-exclamation-triangle",
              text: "Alert",
              click: function() {
                alert("Alert");
              }
            },
            CustomButton2: {
              text: "Alert2",
              click: function() {
                alert("Alert2");
              }
            }
          }}
          // buttonIcons={{
          //   CustomButton2: "fas fa-bell",
          //   CustomButton1: "right-single-arrow"   //// Add icon to customButtons to review !!!
          // }}
          // header={{
          //   left: "prev,next today CustomButton1",
          //   center: "title",
          //   right:
          //     "dayGridMonth,dayGridWeek,timeGridWeek,timeGridDay,listWeek CustomButton2"
          // }}
          header={false}
          views={{
            timeGridWeek: {
              // name of view
              titleFormat: { month: "long", year: "numeric" },
              columnHeaderFormat: {
                weekday: "long"
              }

              // other view-specific options here
            },
            dayGridMonth: {
              titleFormat: "MMMM YYYY",
              columnHeaderFormat: { weekday: "long" }
            }
          }}
          ref={calendarComponentRef}
          weekends={state.calendarWeekends}
          events={state.calendarEvents}
          dateClick={handleDateClick}
          allDaySlot={false}
          weekNumbers={true}
          // weekNumbersWithinDays={true}
          //Event Clicking & Hovering
          eventMouseEnter={eventMouseEnter}
          eventMouseLeave={eventMouseLeave}
          selectable
          selectMirror
          editable
          droppable
          eventLimit={true}
          eventRender={eventRender}
        />
      </div>
    </div>
  );
};

export default Calendar;
