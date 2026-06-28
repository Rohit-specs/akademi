import { Bell, Calendar3, Clock, Gear, Search } from "react-bootstrap-icons"
import DashboardDrawer from "/component/DashboardDrawer"
import { Form } from "react-bootstrap"
import EventCalendar from "./EventCalender"

const EventPageContent = () => {
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
                        <span className="p-2 rounded-pill bg-light"><Bell className="text-gray-400 fs-4" /></span>
                        <span className="p-2 rounded-pill bg-light"><Gear className="text-gray-400 fs-4" /></span>

                        <span className="icon-link gap-3">
                            <span>
                                <div className="fs-small">Nabila A.</div>
                                <small className="text-gray-400 ms-auto">Admin</small>
                            </span>
                            <span className="rounded-circle user-picture bg-purple-10">
                                <img src={"https://i.pravatar.cc/150?img=2"} className="user-picture rounded-circle" />
                            </span>
                        </span>
                    </div>

                    <DashboardDrawer /></div>

            </header>
            <main className="">
                <div className='d-flex gap-xxl-4 gap-3'>
                    <div className='flex-grow-1'>
                        <div className='bg-light p-4 rounded-4 pb-lg-5'>
                            <EventCalendar/>
                        </div>

                    </div>
                    <div className='d-none d-xxl-block'>
                        <div className='bg-light p-lg-4 rounded-4 p-3 mb-3'>
                            <h3 className='mb-2'>Schedule Details</h3>
                            <small className='text-gray-400'>Thursday, 10th April , 2021</small>
                        </div>
                        <div className='bg-light py-lg-4 rounded-4 py-3 px-4 px-lg-5 mb-3 schedule-card-primary'>

                            <div className="card-content">
                                <div className="card-info">
                                    <h5 className="title">Basic Algorithm</h5>
                                    <p className="category text-gray-400 mb-3">Algorithm</p>
                                    <div className='d-flex align-items-center gap-5'>
                                        <div className="schedule">
                                            <div className="schedule-item d-flex align-items-center gap-2">
                                                <Calendar3 className="calendar-icon text-info" />
                                                <span>March 20, 2021</span>
                                            </div>

                                            <div className="schedule-item d-flex align-items-center gap-2">
                                                <Clock className="clock-icon text-warning" />
                                                <span>09:00 - 10:00 AM</span>
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
                        <div className='bg-light py-lg-4 rounded-4 py-3 px-4 px-lg-5 mb-3 schedule-card-info'>

                            <div className="card-content">
                                <div className="card-info">
                                    <h5 className="title">Basic Art</h5>
                                    <p className="category text-gray-400 mb-3">Art</p>
                                    <div className='d-flex align-items-center gap-5'>
                                        <div className="schedule">
                                            <div className="schedule-item d-flex align-items-center gap-2">
                                                <Calendar3 className="calendar-icon text-info" />
                                                <span>March 20, 2021</span>
                                            </div>

                                            <div className="schedule-item d-flex align-items-center gap-2">
                                                <Clock className="clock-icon text-warning" />
                                                <span>09:00 - 10:00 AM</span>
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
                        <div className='bg-light py-lg-4 rounded-4 py-3 px-4 px-lg-5 mb-3 schedule-card-warning'>

                            <div className="card-content">
                                <div className="card-info">
                                    <h5 className="title">HTML & CSS Class</h5>
                                    <p className="category text-gray-400 mb-3">Programming</p>
                                    <div className='d-flex align-items-center gap-5'>
                                        <div className="schedule">
                                            <div className="schedule-item d-flex align-items-center gap-2">
                                                <Calendar3 className="calendar-icon text-info" />
                                                <span>March 20, 2021</span>
                                            </div>

                                            <div className="schedule-item d-flex align-items-center gap-2">
                                                <Clock className="clock-icon text-warning" />
                                                <span>09:00 - 10:00 AM</span>
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
                        <div className='bg-light py-lg-4 rounded-4 py-3 px-4 px-lg-5 mb-3 schedule-card-text'>

                            <div className="card-content">
                                <div className="card-info">
                                    <h5 className="title">Simple Past Tense</h5>
                                    <p className="category text-gray-400 mb-3">English</p>
                                    <div className='d-flex align-items-center gap-5'>
                                        <div className="schedule">
                                            <div className="schedule-item d-flex align-items-center gap-2">
                                                <Calendar3 className="calendar-icon text-info" />
                                                <span>March 20, 2021</span>
                                            </div>

                                            <div className="schedule-item d-flex align-items-center gap-2">
                                                <Clock className="clock-icon text-warning" />
                                                <span>09:00 - 10:00 AM</span>
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
                        <button
                            className="fw-medium mt-2 mb-2 btn bg-purple-10 text-primary w-100 rounded-pill">
                            View More
                        </button>

                    </div>

                </div>

            </main>
        </div>
    )
}

export default EventPageContent
