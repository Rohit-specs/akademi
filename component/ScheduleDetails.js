"use client"
import { format } from 'date-fns'
import React, { useState } from 'react'
import { Calendar3, Clock } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

const ScheduleDetails = ({ selectedDate }) => {
    const cardClasses = [
        "schedule-card-primary",
        "schedule-card-info",
        "schedule-card-warning",
        "schedule-card-text",
    ]
    const { events } = useSelector(state => state.event)
    const todaysEvents = events.filter(event => event.date === format(selectedDate, "yyyy-MM-dd"))
    const [showAll, setShowAll] = useState(false)
    const visibleEvents = showAll ? todaysEvents : todaysEvents.slice(0, 3)
    const selectedEvents = events.filter((event) => event.date === format(selectedDate, "yyyy-MM-dd"))
    return (
        <>
            <div className='bg-light p-lg-4 rounded-4 p-3 mb-3'>
                <h3 className='mb-2'>Schedule Details</h3>
                <small className='text-gray-400'>{format(selectedDate, "EEEE, dd MMMM yyyy")}</small>
            </div>


                {selectedEvents.length === 0 ? (
                    <div className="bg-light py-lg-4 event-details-container rounded-4 py-3 px-4 px-lg-5 text-center">
                        <h5>No Events</h5>
                        <p className="text-gray-400 mb-0">
                            There are no scheduled events for this date.
                        </p>
                    </div>
                ) : (visibleEvents.map((event, index) => (
                    <div
                        key={event.id}
                        className={`bg-light py-lg-4 rounded-4 py-3 px-4 px-lg-5 mb-3 ${cardClasses[index % cardClasses.length]}`}
                    >
                        <div className="card-content">
                            <div className="card-info">
                                <h5 className="title">{event.className}</h5>
                                <p className="category text-gray-400 mb-3">{event.subject}</p>
                                <div className='d-flex align-items-center gap-5'>
                                    <div className="schedule">
                                        <div className="schedule-item d-flex align-items-center gap-2">
                                            <Calendar3 className="calendar-icon text-info" />
                                            <span>{event.date}</span>
                                        </div>

                                        <div className="schedule-item d-flex align-items-center gap-2">
                                            <Clock className="clock-icon text-warning" />
                                            <span>{event.startTime + " - " + event.endTime}</span>
                                        </div>
                                    </div>
                                    <div className='user-picture rounded-circle bg-purple-10'>
                                        <img className='user-picture rounded-circle' src={"https://i.pravatar.cc/150?img=2"} />
                                    </div>
                                </div>
                            </div>

                            <div className="avatar-circle" />
                        </div>
                    </div>
                )))}

            {todaysEvents.length > 3 && (
                <button
                    className="fw-medium mt-2 mb-2 btn bg-purple-10 text-primary fw-medium w-100 rounded-pill"
                    onClick={() =>
                        setShowAll(!showAll)
                    }
                >
                    {showAll
                        ? "Show Less"
                        : "View All"}
                </button>
            )}
        </>
    )
}

export default ScheduleDetails
