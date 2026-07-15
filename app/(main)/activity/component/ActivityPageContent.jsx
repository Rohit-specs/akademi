"use client"
import { Form, Row, Col } from "react-bootstrap"
import DashboardDrawer from "/component/DashboardDrawer"
import HeaderIcons from "/component/HeaderIcons"
import { Circle, Search, FileEarmarkFill, RecordCircleFill } from "react-bootstrap-icons"
import { useSelector } from "react-redux"

const data = [
    {
        "date": "Today",
        "items": [
            {
                "id": 1,
                "time": "Monday, June 3 2020",
                "user": "Karen Hope",
                "action": "has created new task",
                "target": "History Lesson",
                "color": "danger"
            },
            {
                "id": 2,
                "time": "Monday, June 3 2020",
                "user": "",
                "action": "[REMINDER] Due date of",
                "target": "Science Homework",
                "extra": "task will be coming",
                "color": "danger"
            },
            {
                "id": 3,
                "time": "Monday, June 3 2020",
                "user": "Tony Seop",
                "action": "commented at",
                "target": "Science Homework",
                "color": "danger"
            },
            {
                "id": 4,
                "time": "Monday, June 3 2020",
                "user": "Samantha William",
                "action": "added 4 files on",
                "target": "Art Class",
                "files": [
                    {},
                    {},
                    {},
                    {}
                ],
                "color": "primary"
            },
            {
                "id": 5,
                "time": "Monday, June 3 2020",
                "user": "You",
                "action": "has moved",
                "target": "\"Biology Homework\"",
                "extra": "task to Done",
                "color": "success"
            }
        ]
    },
    {
        "date": "Yesterday",
        "items": [
            {
                "id": 6,
                "time": "Sunday, June 3 2020",
                "user": "Johnny Ahmad",
                "action": "mentioned you at",
                "target": "Art Class Homework",
                "color": "warning"
            },
            {
                "id": 7,
                "time": "Sunday, June 3 2020",
                "user": "Nadila Adja",
                "action": "mentioned you at",
                "target": "Programming Homework",
                "color": "primary"
            }
        ]
    }
]

const ActivityPageContent = () => {
    const { activities } = useSelector((state) => state.latestActivity)

    const today = new Date().toISOString().split("T")[0]

    const yesterdayDate = new Date()
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = yesterdayDate.toISOString().split("T")[0]

    const groupedActivities = activities.reduce((acc, activity) => {
        let group = activity.date;

        if (activity.date === today) {
            group = "Today"
        } else if (activity.date === yesterday) {
            group = "Yesterday"
        }

        if (!acc[group]) {
            acc[group] = [];
        }

        acc[group].push(activity);

        return acc;
    }, {})
    return (
        <div className="m-lg-4 m-3">
            <header>
                <div className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                    <h1 className="logo">Notification & Latest Activity</h1>
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

                    <DashboardDrawer /></div>

            </header>
            <main className="p-4 bg-light rounded-4">
                <div className="w-100 px-2 px-md-3 py-3">
                    {Object.entries(groupedActivities).map(([date, items]) => (
                        <div key={date} className="mb-5">
                            <h6 className="fw-bold mb-4">{date}</h6>

                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="timeline-item position-relative ps-4 mb-4"
                                >
                                    <span
                                        className="position-absolute mt-1 top-0 start-0 text-primary"
                                    >
                                        <RecordCircleFill size={14} />
                                    </span>

                                    <small className="text-secondary d-block mb-1">
                                        {item.date} {item.time && `• ${item.time}`}
                                    </small>

                                    <p className="mb-2 small">
                                        {item.user && <strong>{item.user}</strong>}{" "}
                                        {item.action}{" "}
                                        <span className={`fw-semibold text-${item.color || "primary"}`}>
                                            {item.target}
                                        </span>{" "}
                                        {item.extra}
                                    </p>

                                    {item.files && (
                                        <Row className="g-3">
                                            {item.files.map((_, index) => (
                                                <Col xs={6} md={3} key={index}>
                                                    <div
                                                        className="rounded-3 ratio-4X3 bg-gray-300 d-flex justify-content-center align-items-center text-white"
                                                    >
                                                        <FileEarmarkFill size={28} />
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </main>
        </div >
    )
}

export default ActivityPageContent
