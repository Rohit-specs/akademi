"use client"
import { useState } from "react"
import { Button, Card, Col, Dropdown } from "react-bootstrap"
import { Envelope, Telephone, ThreeDotsVertical } from "react-bootstrap-icons"
import Pagination from "/component/Pagination"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { removeTeacher } from "/store/slices/TeacherSlice"
import { addActivity } from "/store/slices/ActivitySlice"
import { current } from "@reduxjs/toolkit"

const TeachersCard = ({ teachers }) => {
    const router = useRouter()
    const itemPerPage = 12
    const [onPage, setOnPage] = useState(1)
    const startIndex = (onPage - 1) * itemPerPage
    const endIndex = startIndex + itemPerPage
    const currentTeachers = teachers.slice(startIndex, endIndex)
    const totalPages = Math.ceil(teachers.length / itemPerPage)
    const dispatch = useDispatch()
    return (<>
        {
            currentTeachers.length === 0 ?

                <div colSpan={6} className="text-center px-auto py-5 text-gray-400">
                    No Result Found
                </div>
                : currentTeachers.map((teacher) => (<Col xs={6} md={4} lg={3} key={teacher.id}>
                    <Card className="bg-light border-0 rounded-3 py-4 teacher-card h-100 position-relative">
                        <Dropdown align="end" className="position-absolute top-0 end-0" bsPrefix=" ">
                            <Dropdown.Toggle variant="light" bsPrefix=" " className="border-0 shadow-none">
                                <ThreeDotsVertical />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => (router.push("/teachers/" + teacher.id))}>
                                    View Profile
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => (router.push("/teachers/edit/" + teacher.id))}>
                                    Edit
                                </Dropdown.Item>
                                <Dropdown.Divider />

                                <Dropdown.Item className="text-danger"
                                    onClick={() => {
                                        dispatch(removeTeacher(teacher.id))
                                        toast.success("Teacher Removed Sucessfully")
                                        dispatch(
                                            addActivity({
                                                user: "Admin",
                                                action: "removed teacher",
                                                target: `${teacher.firstName} ${teacher.lastName}`,
                                                color: "danger",
                                            })
                                        )
                                    }}>
                                    Remove
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="text-center">
                            <div className="profile-picture-lg rounded-circle bg-purple-10 mx-auto my-2"><img src={teacher.photo} className="profile-picture-lg rounded-circle" /></div>
                        </div>
                        <h2 className="text-center card-title my-3">{teacher.firstName + " " + teacher.lastName}</h2>
                        <small className="text-gray-400 text-center">{teacher.degree}</small>
                        <div className="d-flex gap-2 mx-auto my-3">
                            <Button
                                as="a"
                                href={`tel:${teacher.phone}`}
                                className="contact-btn position-relative rounded-circle border-0"
                            >
                                <Telephone className="position-absolute top-50 start-50 translate-middle" />
                            </Button>

                            <Button
                                as="a"
                                href={`mailto:${teacher.email}`}
                                className="contact-btn position-relative rounded-circle border-0"
                            >
                                <Envelope className="position-absolute top-50 start-50 translate-middle" />
                            </Button>
                        </div>

                    </Card></Col>
                ))}
        <Pagination currentPage={onPage} endIndex={endIndex} onPageChange={setOnPage} startIndex={startIndex} totalPages={totalPages} totalItems={teachers.length} />
    </>)
}

export default TeachersCard