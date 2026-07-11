"use client"
import { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, getYear, isSameDay, } from "date-fns";
import { Row, Col, Button, Dropdown, DropdownButton, Stack, } from "react-bootstrap";
import EventFormModel from "./EventFormModel";
import { useSelector } from "react-redux";

const EventCalendar = ({
  selectedDate,
  setSelectedDate,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const currentYear = new Date().getFullYear()
  const years = []
  for (let i = (currentYear - 4); i <= (currentYear + 8); i++) {
    years.push(i)
  }

  const start = startOfWeek(startOfMonth(currentDate), {
    weekStartsOn: 1,
  })

  const end = endOfWeek(endOfMonth(currentDate), {
    weekStartsOn: 1,
  })

  const days = eachDayOfInterval({
    start,
    end,
  })

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]
  const { events } = useSelector((state) => state.event);

  return (
    <>
      <Stack
        direction="horizontal"
        className="justify-content-between align-items-center flex-wrap mb-4"
      >
        <h2 className="fw-bold mb-2 mb-md-0">Calendar</h2>

        <Stack
          direction="horizontal"
          gap={2}
          className="calendar-actions flex-wrap"
        >
          <DropdownButton
            className="calendar-dropdown"
            variant="outline-primary"
            title={format(currentDate, "MMMM")}
          >
            {months.map((month, index) => (
              <Dropdown.Item
                key={month}
                onClick={() =>
                  setCurrentDate(
                    new Date(currentDate.getFullYear(), index, 1)
                  )
                }
              >
                {month}
              </Dropdown.Item>
            ))}
          </DropdownButton>


          <DropdownButton
            className="calendar-dropdown"
            variant="outline-primary"
            title={getYear(currentDate)}
          >
            {years.map((year) => (
              <Dropdown.Item
                key={year}
                onClick={() =>
                  setCurrentDate(
                    new Date(year, currentDate.getMonth(), 1)
                  )
                }
              >
                {year}
              </Dropdown.Item>
            ))}
          </DropdownButton>

          <EventFormModel selectedDate={selectedDate} />
        </Stack>
      </Stack>
      <div className="calendar-scroll">
  <div className="calendar-content">

      <Row className="text-center fw-semibold text-gray-400 mb-3">
        {weekDays.map((day) => (
          <Col key={day}><span className="d-none d-sm-inline">{day}</span>
            <span className="d-inline d-sm-none">
              {day.slice(0, 3)}
            </span></Col>
        ))}
      </Row>
      <div className="event-calendar calendar-grid gap-2 gap-lg-3">
        {days.map((day) => {
          const eventCount = events.filter(
            (event) => event.date === format(day, "yyyy-MM-dd")
          ).length;
          return (<div key={day}
            onClick={() => {
              setSelectedDate(day)
            }}
            className={`calendar-day w-100 h-100 ${isSameDay(day, selectedDate)
              ? "active-day"
              : ""
              }`}>
            <div
              className={`rounded-4 border-primary p-1 p-lg-2 ${!isSameMonth(day, currentDate) ? "opacity-50" : ""}`}>
              <div className="fw-bold">
                {format(day, "d")}
              </div>
              {eventCount > 0 && (
                <div className="mt-4 d-md-flex gap-1 d-none">
                  {eventCount > 3 ? (
                    <span className={`p-3 rounded-circle bg-dark text-light position-relative ${isSameDay(day, selectedDate) ? 'd-none' : ""}`}>
                      <span className="position-absolute top-50 start-50 translate-middle">3+</span>
                    </span>
                  ) : (
                    <>
                      {eventCount >= 1 && (
                        <span className="event-dot rounded-circle bg-primary"></span>
                      )}

                      {eventCount >= 2 && (
                        <span className="event-dot rounded-circle bg-info"></span>
                      )}

                      {eventCount >= 3 && (
                        <span className="event-dot rounded-circle bg-warning"></span>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
          )
        })}
      </div></div></div>
    </>
  );
};

export default EventCalendar;