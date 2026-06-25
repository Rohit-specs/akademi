"use client"
import DashboardDrawer from '/component/DashboardDrawer'
import { Bell, Calendar3, Clock, Envelope, Gear, GeoAlt, Person, Search, Telephone } from 'react-bootstrap-icons'
import { Card, Col, Form, Row, Table } from 'react-bootstrap'
import Pagination from '/component/Pagination'
import { useState } from 'react'

const StudentDetails = () => {
    const studentData = {
        name: "Karen Hope",
        parentName: "Justin Hope",
        address: "Jakarta, Indonesia",
        phone: "+12 245 6845",
        email: "hope@gmail.com",

    }
    const studentPaymentHistory = [
        {
            "id": "#1245679",
            "date": "2021-03-02T13:45:00",
            "amount": 50036,
            "currency": "USD",
            "status": "Complete",
            "icon": "trending-up"
        },
        {
            "id": "#1235679",
            "date": "2021-03-02T13:45:00",
            "amount": 50036,
            "currency": "USD",
            "status": "Pending",
            "icon": "trending-up"
        },
        {
            "id": "#1234589",
            "date": "2021-03-02T13:45:00",
            "amount": 50036,
            "currency": "USD",
            "status": "Canceled",
            "icon": "trending-up"
        },
        {
            "id": "#1256789",
            "date": "2021-03-02T13:45:00",
            "amount": 50036,
            "currency": "USD",
            "status": "Complete",
            "icon": "trending-up"
        }
    ]
    const itemPerPage = 4
    const [onPage, setOnPage] = useState(1)
    const startIndex = (onPage - 1) * itemPerPage
    const totalPages = Math.ceil(studentPaymentHistory / itemPerPage)
    const endIndex = startIndex + itemPerPage
    const currentPage = studentPaymentHistory.slice(startIndex, endIndex)
    return (
        <div className="m-lg-4 m-3">
            <header>
                <div className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                    <h1 className="logo">Students</h1>
                    <div className="d-xl-flex gap-4 justify-content-between align-items-center d-none">
                        <div className="d-flex justify-content-between align-items-center mb-lg-4 mb-2 my-auto">
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
                            <h2 className='mt-3'>{studentData.name}</h2>
                            <p className='sidebar-link text-gray-400 mt-2'>Student</p>
                            <Row>
                                <Col xs={12} md={6} xl={3}>
                                    <div className='d-flex flex-column'>
                                        <p className='text-gray-400 sidebar-link'>Parent:</p>
                                        <div className='d-flex align-items-center gap-lg-3 gap-2 fw-medium'><div className='bg-info text-light p-3 rounded-circle contact-icon position-relative'><Person className='position-absolute start-50 top-50 translate-middle' size={24} /></div>{studentData.parentName}</div></div></Col>
                                <Col xs={12} md={6} xl={3}>
                                    <div className='d-flex flex-column'>
                                        <p className='text-gray-400 sidebar-link'>Address:</p>
                                        <div className='d-flex align-items-center gap-lg-3 gap-2 fw-medium'><div className='bg-info text-light p-3 rounded-circle contact-icon position-relative'><GeoAlt size={24} className='position-absolute start-50 top-50 translate-middle' /></div>{studentData.address}</div></div></Col>
                                <Col xs={12} md={6} xl={3}>
                                    <div className='d-flex flex-column'>
                                        <p className='text-gray-400 sidebar-link'>Phone:</p>
                                        <div className='d-flex align-items-center gap-lg-3 gap-2 fw-medium'><div className='bg-info text-light p-3 rounded-circle contact-icon position-relative'><Telephone size={24} className='position-absolute start-50 top-50 translate-middle' /></div>{studentData.phone}</div></div></Col>
                                <Col xs={12} md={6} xl={3}>
                                    <div className='d-flex flex-column'>
                                        <p className='text-gray-400 sidebar-link'>Email:</p>
                                        <div className='d-flex align-items-center gap-lg-3 gap-2 fw-medium'><div className='text-break bg-info text-light p-3 rounded-circle contact-icon position-relative'><Envelope size={24} className='position-absolute start-50 top-50 translate-middle' /></div>{studentData.email}</div></div></Col>
                            </Row>


                        </div>
                        {/* <div className='bg-light p-4 rounded-4 py-lg-5 mt-3 mt-lg-4 mt-xl-5 payment-table overflow-x-auto'>
                            <h3 className='card-title mb-4'>Payment History</h3>
                            {currentPage.map((payment) => (
                                <Row className='align-items-center gx-5 ' key={payment.id}>
                                    <Col xs={4} className='mb-3 mb-lg-4 d-flex align-content-center gap-3'><span className='rounded-circle payment-icon bg-danger d-flex justify-content-center align-items-center'><img width={28} src={"/icons/graph-up-arrow.svg"} /></span><p className='fs-5 fw-medium my-auto'>{payment.id}</p></Col>
                                    <Col xs={3} className='mb-3 mb-lg-4 text-gray-400 small-text'>{payment.date}</Col>
                                    <Col xs={3} className='mb-3 mb-lg-4 fs-5 fw-medium'>{payment.currency} {payment.amount}</Col>
                                    <Col xs={2} className={`mb-3 mb-lg-4 fs-5 fw-medium justify-self-end ${payment.status.toLowerCase() === "complete"
                                        ? "text-success"
                                        : payment.status.toLowerCase() === "pending"
                                            ? "text-gray-400"
                                            : "text-danger"
                                        }`}>{payment.status}</Col>
                                </Row>
                            ))}<Pagination currentPage={onPage} endIndex={endIndex} onPageChange={setOnPage} startIndex={startIndex} totalItems={studentPaymentHistory.length} totalPages={totalPages} />
                        </div> */}

                        {/* <div className='bg-light p-4 rounded-4 py-lg-5 mt-3 mt-lg-4 mt-xl-5'>
                            <h3 className='card-title mb-4'>Payment History</h3>
                            <div className="payment-table">
                                <div className="payment-table-content">
                                    {currentPage.map((payment) => (
                                        <Row
                                            className='align-items-center gx-5 payment-row'
                                            key={payment.id}
                                        >
                                            <Col xs={4} className='mb-3 mb-lg-4 d-flex align-content-center gap-3'>
                                                <span className='rounded-circle payment-icon bg-danger d-flex justify-content-center align-items-center'>
                                                    <img width={28} src={"/icons/graph-up-arrow.svg"} />
                                                </span>
                                                <p className='fs-5 fw-medium my-auto'>{payment.id}</p>
                                            </Col>

                                            <Col xs={3} className='mb-3 mb-lg-4 text-gray-400 small-text'>
                                                {payment.date}
                                            </Col>

                                            <Col xs={3} className='mb-3 mb-lg-4 fs-5 fw-medium'>
                                                {payment.currency} {payment.amount}
                                            </Col>

                                            <Col
                                                xs={2}
                                                className={`mb-3 mb-lg-4 fs-5 fw-medium ${payment.status.toLowerCase() === "complete"
                                                    ? "text-success"
                                                    : payment.status.toLowerCase() === "pending"
                                                        ? "text-gray-400"
                                                        : "text-danger"
                                                    }`}
                                            >
                                                {payment.status}
                                            </Col>
                                        </Row>
                                    ))}
                                </div>
                            </div>


                            <Pagination
                                currentPage={onPage}
                                endIndex={endIndex}
                                onPageChange={setOnPage}
                                startIndex={startIndex}
                                totalItems={studentPaymentHistory.length}
                                totalPages={totalPages}
                            />
                        </div> */}
                        {/* <div className='bg-light p-4 rounded-4 py-lg-5 mt-3 mt-lg-4 mt-xl-5'>
                            <h3 className='card-title mb-4'>Payment History</h3>

                            <div className="payment-table">
                                <div className="payment-table-content">

                                    {currentPage.map((payment) => (
                                        <Row
                                            className='align-items-center gx-5 flex-nowrap'
                                            key={payment.id}
                                        >
                                            <Col
                                                xs={4}
                                                className='mb-3 mb-lg-4 d-flex align-content-center gap-3'
                                            >
                                                <span className='rounded-circle payment-icon bg-danger d-flex justify-content-center align-items-center'>
                                                    <img
                                                        width={28}
                                                        src={"/icons/graph-up-arrow.svg"}
                                                        alt=""
                                                    />
                                                </span>

                                                <p className='fs-5 fw-medium my-auto'>
                                                    {payment.id}
                                                </p>
                                            </Col>

                                            <Col
                                                xs={3}
                                                className='mb-3 mb-lg-4 text-gray-400 small-text'
                                            >
                                                {payment.date}
                                            </Col>

                                            <Col
                                                xs={3}
                                                className='mb-3 mb-lg-4 fs-5 fw-medium'
                                            >
                                                {payment.currency} {payment.amount}
                                            </Col>

                                            <Col
                                                xs={2}
                                                className={`mb-3 mb-lg-4 fs-5 fw-medium ${payment.status.toLowerCase() === "complete"
                                                        ? "text-success"
                                                        : payment.status.toLowerCase() === "pending"
                                                            ? "text-gray-400"
                                                            : "text-danger"
                                                    }`}
                                            >
                                                {payment.status}
                                            </Col>
                                        </Row>
                                    ))}

                                </div>
                            </div>

                            <Pagination
                                currentPage={onPage}
                                endIndex={endIndex}
                                onPageChange={setOnPage}
                                startIndex={startIndex}
                                totalItems={studentPaymentHistory.length}
                                totalPages={totalPages}
                            />
                        </div> */}
                        <div className='bg-light p-4 rounded-4 py-lg-5 mt-3 mt-lg-4 mt-xl-5'>
                            <h3 className='card-title mb-4'>Payment History</h3>

                            <Table responsive variant='light' borderless className="align-middle payment-table mb-0">
                                {/* <thead>
                                    <tr>
                                        <th>Payment ID</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead> */}

                                <tbody>
                                    {currentPage.map((payment) => (
                                        <tr key={payment.id}>
                                            <td>
                                                <div className='d-flex align-items-center gap-3'>
                                                    <span className='rounded-circle payment-icon bg-danger d-flex justify-content-center align-items-center'>
                                                        <img
                                                            width={28}
                                                            src={"/icons/graph-up-arrow.svg"}
                                                            alt=""
                                                        />
                                                    </span>

                                                    <span className='fs-5 fw-medium'>
                                                        {payment.id}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className='text-gray-400 small-text'>
                                                {payment.date}
                                            </td>

                                            <td className='fs-5 fw-medium'>
                                                {payment.currency} {payment.amount}
                                            </td>

                                            <td
                                                className={`fs-5 fw-medium ${payment.status.toLowerCase() === "complete"
                                                    ? "text-success"
                                                    : payment.status.toLowerCase() === "pending"
                                                        ? "text-gray-400"
                                                        : "text-danger"
                                                    }`}
                                            >
                                                {payment.status}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>

                            <Pagination
                                currentPage={onPage}
                                endIndex={endIndex}
                                onPageChange={setOnPage}
                                startIndex={startIndex}
                                totalItems={studentPaymentHistory.length}
                                totalPages={totalPages}
                            />
                        </div>
                    </div>
                    <div className='d-none d-xl-block'>
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

                    </div>

                </div>

            </main>
        </div>
    )
}

export default StudentDetails