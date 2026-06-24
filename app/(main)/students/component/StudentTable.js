"use client"
import { useState } from "react"
import { students } from "/data/students/StudentsData"
import { Envelope, Telephone, ThreeDots } from "react-bootstrap-icons"
import Pagination from "/component/Pagination"
import { Badge, Dropdown, Table } from "react-bootstrap"

const StudentTable = () => {
    const itemPerPage = 6
    const totalPages = Math.ceil(students.length / itemPerPage)
    const [onPage, setOnPage] = useState(1)
    const startIndex = (onPage - 1) * itemPerPage
    const endIndex = startIndex + itemPerPage
    const currentStudents = students.slice(startIndex, endIndex)
    return (
        <>
            <Table responsive variant="light" className="student-table align-middle">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Parent Name</th>
                        <th>City</th>
                        <th>Contact</th>
                        <th>Grade</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {currentStudents.map((student) => (
                        <tr key={student.id}>
                            <td>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="student-avatar rounded-circle bg-purple-10 profile-picture"><img className="profile-picture rounded-circle" src={student.profilePicture}/></div>

                                    <span className="fw-semibold">
                                        {student.name}
                                    </span>
                                </div>
                            </td>

                            <td className="student-id text-primary fw-medium">
                                #{student.userId}
                            </td>

                            <td className="text-gray-400">
                                {student.date}
                            </td>

                            <td>{student.parentName}</td>

                            <td>{student.city}</td>

                            <td>
                                <div className="d-flex gap-2">
                                    <button
                                        className="contact-btn bg-purple-10 text-primary d-flex align-items-center justify-content-center rounded-circle border-0"
                                        type="button"
                                    >
                                        <Telephone size={18} />
                                    </button>

                                    <button
                                        className="contact-btn bg-purple-10 text-primary d-flex align-items-center justify-content-center rounded-circle border-0"
                                        type="button"
                                    >
                                        <Envelope size={18} />
                                    </button>
                                </div>
                            </td>

                            <td>
                                <span
                                    className={`grade-badge text-light fw-medium ${student.grade.includes("A")
                                            ? "bg-primary"
                                            : student.grade.includes("B")
                                                ? "bg-warning"
                                                : "bg-info"
                                        }`}
                                >
                                    {student.grade}
                                </span>
                            </td>

                            <td>
                                <Dropdown align="end">
                                    <Dropdown.Toggle
                                        as="div"
                                        className="action-menu" bsPrefix=" "
                                    >
                                        <ThreeDots />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item>View</Dropdown.Item>
                                        <Dropdown.Item>Edit</Dropdown.Item>
                                        <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination currentPage={onPage} endIndex={endIndex} startIndex={startIndex} onPageChange={setOnPage} totalPages={totalPages} totalItems={students.length} />
        </>
    )
}

export default StudentTable
