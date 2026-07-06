"use client"
import { Bell, CurrencyDollar, Gear, Mortarboard, PersonWorkspace, RecordCircleFill, Search } from "react-bootstrap-icons"
import DashboardDrawer from "/component/DashboardDrawer"
import { Col, Form, Row } from "react-bootstrap"
import { Area, ComposedChart, Line, LineChart, ResponsiveContainer } from "recharts"
import { COLORS } from "/data/Theme"
import BalanceAnalyticChart from "./BalanceAnalyticChart"
import StudentPagination from "/component/StudentIntuition"
import SchoolExpense from "./SchoolExpense"
import HeaderIcons from "/component/HeaderIcons"

const FinancePageContent = () => {
    const StudentsComparisonData = [
        { value: 28 },
        { value: 35 },
        { value: 18 },
        { value: 42 },
        { value: 58 },
        { value: 40 },
        { value: 65 },
        { value: 52 },
    ]

    return (
        <div className="m-lg-4 m-3">
            <header>
                <div className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                    <h1 className="logo">Finance</h1>
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
                        <HeaderIcons/>
                    </div>

                    <DashboardDrawer /></div>
            </header>
            <main >
                <Row className="gy-3 gx-3">
                    <Col xs={12} md={6} xxl={3}>
                        <div className="p-3 p-lg-4 d-flex gap-2 gap-lg-3 align-items-center rounded-4 bg-light h-100">
                            <div className="counter-icon rounded-circle bg-primary position-relative flex-shrink-0"><Mortarboard size={36} className="text-light position-absolute start-50 top-50 translate-middle" /></div>
                            <div>
                                <p className="fs-5 text-gray-400 mb-1">Total Students</p>
                                <h2 className="logo mb-1">{932}</h2>
                                <p className="fs-5 text-gray-400"><span className="fw-medium text-success">+10%</span> than last month</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xxl={3}>
                        <div className="p-3 p-lg-4 d-flex gap-2 gap-lg-3 align-items-center rounded-4 bg-light h-100">
                            <div className="counter-icon rounded-circle bg-info position-relative flex-shrink-0"><PersonWorkspace size={36} className="text-light position-absolute start-50 top-50 translate-middle" /></div>
                            <div>
                                <p className="fs-5 text-gray-400 mb-1">Total Teachers</p>
                                <h2 className="logo mb-1">{734}</h2>
                                <p className="fs-5 text-gray-400"><span className="fw-medium text-danger">-0.5%</span> than last month</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} xxl={6}>
                        <div className="p-3 p-lg-4 d-flex gap-2 gap-lg-3 align-items-center rounded-4 bg-light h-100">
                            <div className="flex-shrink-0 counter-icon rounded-circle position-relative bg-warning"><CurrencyDollar size={36} className="text-light position-absolute start-50 top-50 translate-middle" /></div>
                            <div className="flex-shrink-0">
                                <p className="fs-5 text-gray-400 mb-1">Total Students</p>
                                <h2 className="logo mb-1">{932}</h2>
                                <p className="fs-5 text-gray-400"><span className="fw-medium text-success">+10%</span> than last month</p>
                            </div>


                            <div className="h-100 w-100"> <ResponsiveContainer width={"100%"} height={"100%"}>

                                <ComposedChart data={StudentsComparisonData}>

                                    <defs>
                                        <linearGradient id="greenFill" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor={COLORS.green} stopOpacity={0.25} />
                                            <stop offset="100%" stopColor={COLORS.green} stopOpacity={0} />
                                        </linearGradient>
                                    </defs>


                                    <Area
                                        type="natural"
                                        dataKey="value"
                                        fill="url(#greenFill)"
                                        stroke="none"
                                    />


                                    <Line
                                        type="natural"
                                        dataKey="value"
                                        stroke={COLORS.green}
                                        strokeWidth={3}
                                        dot={false}
                                        strokeLinecap="round"
                                    />

                                </ComposedChart>
                            </ResponsiveContainer></div>

                        </div>
                    </Col>

                </Row>
                <div className="p-4 bg-light mb-lg-4 mb-md-3 mb-2 mt-lg-4 mt-md-3 mt-2 rounded-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="card-title fw-bold mb-0">Balance Analytics</h2>

                        <div className="icon-link gap-3">
                            <div className="d-flex flex-column justify-content-between align-items-center">
                                <span className="text-gray-400"><RecordCircleFill className="me-1 text-warning" />
                                    Expense</span>
                                {1.245}
                            </div>

                            <div className="d-flex flex-column justify-content-between align-items-center">
                                <span className="text-gray-400">
                                    <RecordCircleFill className="me-1 text-info" />

                                    Income
                                </span>
                                {1.356}

                            </div>
                        </div>


                    </div>
                    <BalanceAnalyticChart />
                </div>
                <Row className="g-3 g-lg-4">
                    <Col xs={12} xxl={7}>
                        <div className="p-4 bg-light mb-lg-4 mb-md-3 mb-2 rounded-4 h-100">
                            <StudentPagination />
                        </div>
                    </Col>
                    <Col xs={12} xxl={5}>
                        <div className="p-4 bg-light mb-lg-4 mb-md-3 mb-2 rounded-4 h-100">
                            <h3 className='card-title mb-3'>Payment History</h3>
                            <SchoolExpense />
                        </div>
                    </Col>
                </Row>

            </main>
        </div >
    )
}

export default FinancePageContent
