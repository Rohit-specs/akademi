"use client"
import { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, getYear, } from "date-fns";
import { Card, Row, Col, Button, Dropdown, DropdownButton, Stack, } from "react-bootstrap";
import { Plus, } from "react-bootstrap-icons";
import { COLORS } from "/data/Theme";

const EventCalendar = () => {
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

  const years = [];
  for (let i = 2020; i <= 2035; i++) {
    years.push(i)
  }

  const start = startOfWeek(startOfMonth(currentDate), {
    weekStartsOn: 1,
  });

  const end = endOfWeek(endOfMonth(currentDate), {
    weekStartsOn: 1,
  });

  const days = eachDayOfInterval({
    start,
    end,
  });

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]

  return (
    <>

      <Stack
        direction="horizontal"
        className="justify-content-between mb-4"
      >
        <h2 className="fw-bold">Calendar</h2>

        <Stack direction="horizontal" gap={2}>
          <div className="dropdown-btn"> 
            <DropdownButton
            className="rounded-pill dropdown-btn"
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
          </div>
          <div className="dropdown-btn"> 
            <DropdownButton
            className="dropdown-btn"
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
          </DropdownButton></div>




          <Button variant="primary" className="rounded-pill">
            <Plus className="me-2" size={24} />
            New Student
          </Button>
        </Stack>
      </Stack>

      {/* Week Days */}

      <Row className="text-center fw-semibold text-secondary mb-3">
        {weekDays.map((day) => (
          <Col key={day}>{day}</Col>
        ))}
      </Row>

      {/* Calendar */}

      <div className="calendar-grid mx-2 gap-3">
        {days.map((day) => (
          <div key={day}>
            <div
              className={`rounded-4 border-primary p-2 p-lg-3 border-2 ${!isSameMonth(day, currentDate) ? "opacity-50" : ""
                }`}
            >

              <div className="fw-bold">
                {format(day, "d")}
              </div>

              {/* Demo Event Dots */}

              <div className="mt-4 d-flex gap-1">
                <span
                  className="event-dot rounded-circle bg-warning"

                ></span>

                <span
                  className="event-dot rounded-circle bg-primary"

                ></span>

                <span
                  className="event-dot rounded-circle bg-info"

                ></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventCalendar;