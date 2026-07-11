"use client"
import { Bell, Calendar3, Clock, Gear, Search } from "react-bootstrap-icons"
import DashboardDrawer from "/component/DashboardDrawer"
import { Form } from "react-bootstrap"
import EventCalendar from "./EventCalender"
import HeaderIcons from "/component/HeaderIcons"
import ScheduleDetails from "/component/ScheduleDetails"
import { useState } from "react"

const EventPageContent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div className="m-lg-4 m-3">
            <header>
                <div className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                    <h1 className="logo">Events</h1>
                    <div className="d-xxl-flex gap-4 justify-content-between align-items-center d-none">

                        <div className="search-box position-relative d-none d-xl-inline-block">
                            <Search
                                size={16}
                                className="text-primary position-absolute top-50 start-0 translate-middle-y ms-3"
                            />
                            <Form.Control
                                type="text"
                                className="bg-white border-0 form-control ps-5 rounded-pill"
                                placeholder="Search here..."
                            />

                        </div>
                        <HeaderIcons />
                    </div>

                    <DashboardDrawer >
                        <ScheduleDetails selectedDate={selectedDate}/>
                    </DashboardDrawer>
                </div>

            </header>
            <main className="">
                <div className='d-flex gap-xxl-4 gap-3'>
                    <div className='flex-grow-1'>
                        <div className='bg-light p-4 rounded-4 pb-lg-5'>
                            <EventCalendar selectedDate={selectedDate}
                                setSelectedDate={setSelectedDate} />
                        </div>

                    </div>
                    <div className='d-none d-xxl-block'>
                        <ScheduleDetails selectedDate={selectedDate}/>
                    </div>

                </div>

            </main>
        </div>
    )
}

export default EventPageContent
