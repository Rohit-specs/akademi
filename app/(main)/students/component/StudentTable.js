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
            {/* <Table cellSpacing={"10px"} responsive={true} variant="light" className="student-table align-items-center justify-content-center">
                <thead >
                    <tr className="">
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
                            <td>{student.name}</td>
                            <td>{student.userId}</td>
                            <td>{student.date}</td>
                            <td>{student.parentName}</td>
                            <td>{student.city}</td>
                            <td ><span className="icon-link gap-3 badge">
                                <div className="bg-purple-10 p-3 rounded-pill d-flex justify-content-center align-items-center text-dark"><Envelope role size={20}/></div>
                                <div className="bg-purple-10 p-3 rounded-pill d-flex justify-content-center align-items-center text-dark"><Telephone role size={20}/></div>
                                </span>
                            </td>
                            <td><span className={`rounded-pill py-2 ${student.grade.includes("A") ? "bg-primary" : ""} ${student.grade.includes("B") ? "bg-warning" : ""} ${student.grade.includes("C") ? "bg-info" : ""}`}>{student.grade}</span></td>
                            <td><ThreeDots /></td>
                        </tr>
                    ))}
                </tbody>
            </Table> */}
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
                                    <div className="student-avatar profile-picture"><img className="profile-picture" src={student.profilePicture}/></div>

                                    <span className="fw-semibold">
                                        {student.name}
                                    </span>
                                </div>
                            </td>

                            <td className="student-id">
                                #{student.userId}
                            </td>

                            <td className="text-muted">
                                {student.date}
                            </td>

                            <td>{student.parentName}</td>

                            <td>{student.city}</td>

                            <td>
                                <div className="d-flex gap-2">
                                    <button
                                        className="contact-btn"
                                        type="button"
                                    >
                                        <Telephone size={12} />
                                    </button>

                                    <button
                                        className="contact-btn"
                                        type="button"
                                    >
                                        <Envelope size={12} />
                                    </button>
                                </div>
                            </td>

                            <td>
                                <span
                                    className={`grade-badge ${student.grade.includes("A")
                                            ? "grade-a"
                                            : student.grade.includes("B")
                                                ? "grade-b"
                                                : "grade-c"
                                        }`}
                                >
                                    {student.grade}
                                </span>
                            </td>

                            <td>
                                <Dropdown align="end">
                                    <Dropdown.Toggle
                                        as="div"
                                        className="action-menu"
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
