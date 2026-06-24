"use client"
import { useState } from "react"
import { students } from "/data/students/StudentsData"
import { Envelope, Telephone, ThreeDots } from "react-bootstrap-icons"
import Pagination from "/component/Pagination"
import { Badge, Table } from "react-bootstrap"

const StudentTable = () => {
    const itemPerPage = 6
    const totalPages = Math.ceil(students.length / itemPerPage)
    const [onPage, setOnPage] = useState(1)
    const startIndex = (onPage - 1) * itemPerPage
    const endIndex = startIndex + itemPerPage
    const currentStudents = students.slice(startIndex, endIndex)
    return (
        <>
            <Table cellSpacing={"10px"} responsive={true} variant="light" className="student-table align-items-center">
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
                            <td ><span className="icon-link gap-3">
                                <div className="bg-purple-10 p-3 rounded-pill d-flex justify-content-center align-items-center"><Envelope /></div>
                                <div className="bg-purple-10 p-3 rounded-pill d-flex justify-content-center align-items-center"><Telephone /></div>
                                </span>
                            </td>
                            <td><span className={`rounded-pill py-2 ${student.grade.includes("A") ? "bg-primary" : ""} ${student.grade.includes("B") ? "bg-warning" : ""} ${student.grade.includes("C") ? "bg-info" : ""}`}>{student.grade}</span></td>
                            <td><ThreeDots /></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination currentPage={onPage} endIndex={endIndex} startIndex={startIndex} onPageChange={setOnPage} totalPages={totalPages} totalItems={students.length} />
        </>
    )
}

export default StudentTable
