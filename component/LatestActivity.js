"use client"
import { FileEarmarkFill, RecordCircleFill } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

const LatestActivity = () => {
    const { activities } = useSelector((state) => state.latestActivity)
    const today = new Date().toISOString().split("T")[0]
    const yesterdayDate = new Date()
    yesterdayDate.setDate(yesterdayDate.getDate() - 1)
    const yesterday = yesterdayDate.toISOString().split("T")[0]

    const groupedActivities = activities.reduce((acc, activity) => {
        let group = activity.date;

        if (activity.date === today) {
            group = "Today"
        } else if (activity.date === yesterday) {
            group = "Yesterday"
        }

        if (!acc[group]) {
            acc[group] = []
        }

        acc[group].push(activity)

        return acc
    }, {})
    return (<>
        {
            Object.entries(groupedActivities).map(([date, items]) => (
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
            ))
        }</>
    )
}

export default LatestActivity