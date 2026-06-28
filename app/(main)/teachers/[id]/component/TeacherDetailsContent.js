
"use client"
import DashboardDrawer from '/component/DashboardDrawer'
import { Bell, Calendar3, Clock, Envelope, Gear, GeoAlt, Search, Telephone } from 'react-bootstrap-icons'
import { Card, Col, Form, Row, Table } from 'react-bootstrap'

const TeacherDetailsContent = () => {
    const teacherData = {
        name: "Karen Hope",
        address: "Jakarta, Indonesia",
        phone: "+12 245 6845",
        email: "hope@gmail.com",

    }
    return (
        <div className="m-lg-4 m-3">
            <header>
                <div className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                    <h1 className="logo">Teachers</h1>
                    <div className="d-xxl-flex gap-4 justify-content-between align-items-center d-none">

                            <div className="search-box position-relative d-none my-auto d-xxl-inline-block">
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
                <div className='d-flex gap-xl-4 gap-3'>
                    <div className='flex-grow-1'>
                        <div className='bg-light p-4 rounded-4 position-relative pb-lg-5'>
                            <img src={"/images/card-bg.png"} className="details-banner position-absolute top-0 start-0 end-0 w-100" />
                            <div className='ms-3 mt-3 z-1 position-relative'><span className='d-block details-page-profile-picture bg-purple-10 rounded-circle'><img src={"https://i.pravatar.cc/150?img=2"} className='details-page-profile-picture rounded-circle profile-picture-border' /></span></div>
                            <h2 className='mt-3 logo'>{teacherData.name}</h2>
                            <p className='sidebar-link text-gray-400 mt-2'>Teacher</p>
                            <Row className='mb-3'>
                                <Col xs={12} md={6} xl={4}>
                                    <div className='d-flex flex-column'>
                                        <p className='text-gray-400 sidebar-link'>Address:</p>
                                        <div className='d-flex align-items-center gap-lg-3 gap-2 fw-medium'><div className='bg-info text-light p-3 rounded-circle contact-icon position-relative'><GeoAlt size={24} className='position-absolute start-50 top-50 translate-middle' /></div>{teacherData.address}</div></div></Col>
                                <Col xs={12} md={6} xl={4}>
                                    <div className='d-flex flex-column'>
                                        <p className='text-gray-400 sidebar-link'>Phone:</p>
                                        <div className='d-flex align-items-center gap-lg-3 gap-2 fw-medium'><div className='bg-info text-light p-3 rounded-circle contact-icon position-relative'><Telephone size={24} className='position-absolute start-50 top-50 translate-middle' /></div>{teacherData.phone}</div></div></Col>
                                <Col xs={12} md={6} xl={4}>
                                    <div className='d-flex flex-column'>
                                        <p className='text-gray-400 sidebar-link'>Email:</p>
                                        <div className='d-flex align-items-center gap-lg-3 gap-2 fw-medium'><div className='text-break bg-info text-light p-3 rounded-circle contact-icon position-relative'><Envelope size={24} className='position-absolute start-50 top-50 translate-middle' /></div>{teacherData.email}</div></div></Col>
                            </Row>
                            <h3 className='mb-2 card-title'>About:</h3>
                            <p className='about-content mb-2 mb-lg-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <h3 className='mb-2 card-title'>Education:</h3>
                            <ul className='education-list mb-2 mb-lg-3'>
                                <li className='fw-medium'>History Major, University Akademi Historia</li>
                                <small className='text-gray-400'>2013-2017</small>
                                <li className='fw-medium'>Master of History, Universiity Akedemi Historia</li>
                                <small className='text-gray-400'>2017-2020</small>
                            </ul>
                            <h3 className='mb-2 card-title'>Expertise:</h3>
                            <p className='mb-3 mb-lg-5'>World History, Philosophy, Prehistoric, Culture, Ancient</p>




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
                                    <h5 className="title">World History</h5>
                                    <p className="category text-gray-400 mb-3">Class VII-B</p>
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
                                    <h5 className="title">Ancient History</h5>
                                    <p className="category text-gray-400 mb-3">Class VII-A</p>
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
                                    <h5 className="title">Culture</h5>
                                    <p className="category text-gray-400 mb-3">Class VII-A</p>
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
                                    <h5 className="title">World History</h5>
                                    <p className="category text-gray-400 mb-3">Class VII-A</p>
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
                            className="mt-2 mb-2 btn bg-purple-10 text-primary w-100 rounded-pill fw-medium">
                            View More
                        </button>

                    </div>

                </div>

            </main>
        </div>
    )
}

export default TeacherDetailsContent
