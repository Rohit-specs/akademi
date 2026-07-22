"use client";
import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const monthNames = [
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
];

export default function SchoolCalendar() {

    const { events } = useSelector((state) => state.event)

    const getEventCount = (day) => {
        if (!day.currentMonth) return 0;

        const date = `${selectedYear}-${String(selectedMonth + 1).padStart(2, "0")}-${String(day.day).padStart(2, "0")}`;

        return events.filter((event) => event.date === date).length
    }

    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

    const today = new Date()

    const isToday = (day) =>
        day.currentMonth &&
        day.day === today.getDate() &&
        selectedMonth === today.getMonth() &&
        selectedYear === today.getFullYear()

    const firstDay = new Date(
        selectedYear,
        selectedMonth,
        1
    ).getDay()

    const daysInMonth = new Date(
        selectedYear,
        selectedMonth + 1,
        0
    ).getDate()

    const previousMonthDays = new Date(
        selectedYear,
        selectedMonth,
        0
    ).getDate()

    const days = [];

    for (let i = firstDay - 1; i >= 0; i--) {
        days.push({
            day: previousMonthDays - i,
            currentMonth: false,
        })
    }

    for (let i = 1; i <= daysInMonth; i++) {
        days.push({
            day: i,
            currentMonth: true,
        })
    }
    while (days.length < 35) {
        days.push({
            day: days.length - (firstDay + daysInMonth) + 1,
            currentMonth: false,
        })
    }

    const getDayClass = (day) => {
        if (!day.currentMonth) return "text-muted"
        const count = getEventCount(day)
        if (count === 1) return "text-light bg-primary"
        if (count === 2) return "text-light bg-info"
        if (count >= 3) return "text-light bg-warning"
        return ""
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                <h2 className="card-title fw-bold mb-0">School Calendar</h2>

                <Form.Select
                    value={selectedMonth}
                    onChange={(e) =>
                        setSelectedMonth(Number(e.target.value))
                    }
                    className="border-0 fw-medium bg-light"
                    style={{
                        width: 180,
                        boxShadow: "none",
                    }}

                >
                    {monthNames.map((month, index) => (
                        <option key={month} value={index}>
                            {month} {selectedYear}
                        </option>
                    ))}
                </Form.Select>
            </div>

            <Row className="g-0 text-center mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                        <Col key={day}>
                            <small className="text-gray-400">{day}</small>
                        </Col>
                    )
                )}
            </Row>

            <div className="calendar-grid">
                {days.map((day, index) => (
                    <div key={index} className={`calendar-cell border-1 d-flex align-items-center justify-content-center ${isToday(day) ? "bg-gray-100" : ""}`}>
                        <div className={`calendar-day d-flex align-items-center justify-content-center rounded-circle ${getDayClass(day)}`}>
                            {day.day}
                        </div>
                    </div>
                ))}
            </div></>
    )
}