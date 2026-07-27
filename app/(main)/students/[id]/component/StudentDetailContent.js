"use client"
import DashboardDrawer from '/component/DashboardDrawer'
import { Envelope, GeoAlt, Person, Search, Telephone } from 'react-bootstrap-icons'
import { Col, Form, Row, Table } from 'react-bootstrap'
import Pagination from '/component/Pagination'
import { useState } from 'react'
import HeaderIcons from '/component/HeaderIcons'
import ScheduleDetails from '/component/ScheduleDetails'
import { useSelector } from 'react-redux'

const StudentDetails = ({ id }) => {
    const { students } = useSelector((state) => state.student)
    const studentData = students.find((student) => student.id === Number(id))
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
    const totalPages = Math.ceil(studentPaymentHistory.length / itemPerPage)
    const endIndex = startIndex + itemPerPage
    const currentPage = studentPaymentHistory.slice(startIndex, endIndex)
    return (
        <div className="m-lg-4 m-3">
            <header>
                <div className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                    <h1 className="logo">Students</h1>
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
                        <ScheduleDetails selectedDate={new Date()} />
                    </DashboardDrawer>
                </div>

            </header>
            <main className="">
                <div className='d-flex gap-xl-4 gap-3'>
                    <div className='flex-grow-1' style={{minWidth:0}}>
                        <div className='bg-light p-4 rounded-4 position-relative pb-lg-5 overflow-hidden'>
                            <img src={"/images/student-detail-card-bg.png"} className="details-banner position-absolute top-0 start-0 end-0 w-100" />
                            <div className='ms-3 mt-3 z-1 position-relative'><span className='d-block details-page-profile-picture bg-purple-10 rounded-circle'><img src={studentData.photo} className='details-page-profile-picture rounded-circle profile-picture-border' /></span></div>
                            <h2 className='mt-3'>{studentData.firstName + " " + studentData.lastName}</h2>
                            <p className='sidebar-link text-gray-400 mt-2'>Student</p>
                            <Row>
                                <Col xs={12} md={6} xl={3}>
                                    <div className='d-flex flex-column'>
                                        <p className='text-gray-400 sidebar-link'>Parent:</p>
                                        <div className='d-flex align-items-center gap-lg-3 gap-2 fw-medium'><div className='flex-shrink-0 bg-info text-light p-3 rounded-circle contact-icon position-relative'><Person className='position-absolute start-50 top-50 translate-middle' size={24} /></div>{studentData.parentName}</div></div></Col>
                                <Col xs={12} md={6} xl={3}>
                                    <div className='d-flex flex-column'>
                                        <p className='text-gray-400 sidebar-link'>Address:</p>
                                        <div className='d-flex align-items-center gap-lg-3 gap-2 fw-medium'><div className='flex-shrink-0 bg-info text-light p-3 rounded-circle contact-icon position-relative'><GeoAlt size={24} className='position-absolute start-50 top-50 translate-middle' /></div>{studentData.address}</div></div></Col>
                                <Col xs={12} md={6} xl={3}>
                                    <div className='d-flex flex-column'>
                                        <p className='text-gray-400 sidebar-link'>Phone:</p>
                                        <div className='d-flex align-items-center gap-lg-3 gap-2 fw-medium'><div className='flex-shrink-0 bg-info text-light p-3 rounded-circle contact-icon position-relative'><Telephone size={24} className='position-absolute start-50 top-50 translate-middle' /></div>{studentData.phone}</div></div></Col>
                                <Col xs={12} md={6} xl={3}>
                                    <div className='d-flex flex-column'>
                                        <p className='text-gray-400 sidebar-link'>Email:</p>
                                        <div className='d-flex align-items-center gap-lg-3 gap-2 fw-medium'><div className='flex-shrink-0 text-break bg-info text-light p-3 rounded-circle contact-icon position-relative'><Envelope size={24} className='position-absolute start-50 top-50 translate-middle' /></div>{studentData.email}</div></div></Col>
                            </Row>


                        </div>
                        <div className='bg-light p-4 rounded-4 py-lg-5 mt-3 mt-lg-4 mt-xl-5'>
                            <h3 className='card-title mb-4'>Payment History</h3>

                            <Table responsive="xl" variant='light' borderless className="align-middle payment-table mb-0">
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

                                                    <span className='fs-5 sidebar-link fw-medium'>
                                                        {payment.id}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className='text-gray-400 small-text'>
                                                {payment.date?.split("T")[0]}
                                            </td>

                                            <td className='fs-5 sidebar-link fw-medium'>
                                                {payment.currency} {payment.amount}
                                            </td>

                                            <td
                                                className={`fs-5 sidebar-link fw-medium ${payment.status.toLowerCase() === "complete"
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
                    <div className='d-none d-xxl-block'>
                        <ScheduleDetails selectedDate={new Date()} />


                    </div>

                </div>

            </main>
        </div>
    )
}

export default StudentDetails