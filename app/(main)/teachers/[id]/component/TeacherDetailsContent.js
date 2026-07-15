"use client"
import DashboardDrawer from '/component/DashboardDrawer'
import { Envelope, GeoAlt, Search, Telephone } from 'react-bootstrap-icons'
import { Col, Form, Row } from 'react-bootstrap'
import HeaderIcons from '/component/HeaderIcons'
import ScheduleDetails from '/component/ScheduleDetails'
import { useSelector } from 'react-redux'

const TeacherDetailsContent = ({ id }) => {
    const { teachers } = useSelector((state) => state.teacher)
    const teacherData = teachers.find((teacher) => teacher.id === Number(id))
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


                        <HeaderIcons />
                    </div>

                    <DashboardDrawer >
                        <ScheduleDetails selectedDate={new Date()} />  </DashboardDrawer></div>

            </header>
            <main className="">
                <div className='d-flex gap-xl-4 gap-3'>
                    <div className='flex-grow-1'>
                        <div className='bg-light p-4 rounded-4 position-relative pb-lg-5'>
                            <img src={"/images/card-bg.png"} className="details-banner position-absolute top-0 start-0 end-0 w-100" />
                            <div className='ms-3 mt-3 z-1 position-relative'><span className='d-block details-page-profile-picture bg-purple-10 rounded-circle'><img src={teacherData.photo} className='details-page-profile-picture rounded-circle profile-picture-border' /></span></div>
                            <h2 className='mt-3 logo'>{teacherData.firstName + " " + teacherData.lastName}</h2>
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
                                <li className='fw-medium'>{teacherData.degree}, {teacherData.university}</li>
                                <small className='text-gray-400'>{teacherData.startDate} - {teacherData.endDate}</small>
                                {/* <li className='fw-medium'>Master of History, Universiity Akedemi Historia</li>
                                <small className='text-gray-400'>2017-2020</small> */}
                            </ul>
                            <h3 className='mb-2 card-title'>Expertise:</h3>
                            <p className='mb-3 mb-lg-5'>{teacherData.degree}</p>




                        </div>


                    </div>
                    <div className='d-none d-xxl-block'>
                        <ScheduleDetails selectedDate={new Date()} />
                    </div>

                </div>

            </main>
        </div>
    )
}

export default TeacherDetailsContent
