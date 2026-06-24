"use client"
import { useState } from "react"
import { Teachers } from "/data/teachers/TeachersData"
import { Card, Col, Dropdown } from "react-bootstrap"
import { Envelope, Telephone, ThreeDotsVertical } from "react-bootstrap-icons"
import Pagination from "/component/Pagination"
import { useRouter } from "next/navigation"

const TeachersCard = () => {
    const router = useRouter()
    const itemPerPage = 12
    const [onPage, setOnPage] = useState(1)
    const startIndex = (onPage - 1) * itemPerPage
    const endIndex = startIndex + itemPerPage
    const currentTeachers = Teachers.slice(startIndex, endIndex)
    const totalPages = Math.ceil(Teachers.length / itemPerPage)
    return (<>

        {currentTeachers.map((teacher) => (<Col xs={6} md={4} lg={3} key={teacher.id}>
            <Card className="bg-light border-0 rounded-3 py-4 teacher-card h-100 position-relative">
                <Dropdown align="end" className="position-absolute top-0 end-0" bsPrefix=" ">
                    <Dropdown.Toggle variant="light" bsPrefix=" " className="border-0 shadow-none">
                        <ThreeDotsVertical />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => (router.push("/teachers:id"))}>
                            View Profile
                        </Dropdown.Item>

                        <Dropdown.Item onClick={() => (router.push("/teachers:id"))} >
                            Edit
                        </Dropdown.Item>

                        <Dropdown.Divider />

                        <Dropdown.Item className="text-danger" onClick={() => (router.push("/teachers:id"))}>
                            Delete
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="text-center">
                    <div className="profile-picture-lg rounded-circle bg-purple-10 mx-auto my-2"><img src={teacher.profilePicture} className="profile-picture-lg rounded-circle" /></div>
                </div>
                <h2 className="text-center card-title my-3">{teacher.name}</h2>
                <small className="text-gray-400 text-center">{teacher.subject}</small>
                <div className="d-flex gap-2 mx-auto my-3">
                    <button
                        className="contact-btn btn btn-primary d-flex align-items-center justify-content-center rounded-circle border-0"
                        type="button"
                    >
                        <Telephone />
                    </button>

                    <button
                        className="contact-btn btn btn-primary d-flex align-items-center justify-content-center rounded-circle border-0"
                        type="button"
                    >
                        <Envelope />
                    </button>
                </div>

            </Card></Col>
        ))}
        <Pagination currentPage={onPage} endIndex={endIndex} onPageChange={setOnPage} startIndex={startIndex} totalPages={totalPages} totalItems={Teachers.length} />
    </>)
}

export default TeachersCard