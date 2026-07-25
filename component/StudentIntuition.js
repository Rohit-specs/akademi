"use client"
import { useState } from "react"
import { Table } from "react-bootstrap"
import { Person, Printer, ThreeDots } from "react-bootstrap-icons"
import Pagination from "/component/Pagination"

const students = [
    {
        "id": 1,
        "profilePicture": "https://i.pravatar.cc/150?img=1",
        "name": "Samantha William",
        "studentId": "123456789",
        "class": "VII A",
        "fee": 50036,
        "invoicePdf": "https://example.com/invoices/invoice-001.pdf",
        "status": "Unpaid"
    },
    {
        "id": 2,
        "profilePicture": "https://i.pravatar.cc/150?img=2",
        "name": "Tony Soap",
        "studentId": "234567890",
        "class": "VII A",
        "fee": 50036,
        "invoicePdf": "https://example.com/invoices/invoice-002.pdf",
        "status": "Unpaid"
    },
    {
        "id": 3,
        "profilePicture": "https://i.pravatar.cc/150?img=3",
        "name": "Jordan Nico",
        "studentId": "345678901",
        "class": "VII A",
        "fee": 50036,
        "invoicePdf": "https://example.com/invoices/invoice-003.pdf",
        "status": "Pending"
    },
    {
        "id": 4,
        "profilePicture": "https://i.pravatar.cc/150?img=4",
        "name": "Karen Hope",
        "studentId": "456789012",
        "class": "VII B",
        "fee": 62500,
        "invoicePdf": "https://example.com/invoices/invoice-004.pdf",
        "status": "Unpaid"
    },
    {
        "id": 5,
        "profilePicture": "https://i.pravatar.cc/150?img=5",
        "name": "Nadila Adja",
        "studentId": "567890123",
        "class": "VIII A",
        "fee": 48000,
        "invoicePdf": "https://example.com/invoices/invoice-005.pdf",
        "status": "Unpaid"
    },
    {
        "id": 6,
        "profilePicture": "https://i.pravatar.cc/150?img=3",
        "name": "Jordan Nico",
        "studentId": "345678901",
        "class": "VII A",
        "fee": 50036,
        "invoicePdf": "https://example.com/invoices/invoice-003.pdf",
        "status": "Pending"
    },
    {
        "id": 7,
        "profilePicture": "https://i.pravatar.cc/150?img=4",
        "name": "Karen Hope",
        "studentId": "456789012",
        "class": "VII B",
        "fee": 62500,
        "invoicePdf": "https://example.com/invoices/invoice-004.pdf",
        "status": "Unpaid"
    },
    {
        "id": 8,
        "profilePicture": "https://i.pravatar.cc/150?img=5",
        "name": "Nadila Adja",
        "studentId": "567890123",
        "class": "VIII A",
        "fee": 48000,
        "invoicePdf": "https://example.com/invoices/invoice-005.pdf",
        "status": "Unpaid"
    }
]
function StudentPagination() {
    const itemsPerPage = 5
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(students.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentStudents = students.slice(startIndex, endIndex)
    return (<>

        <h2 className="mb-3 card-title fw-bold">Unpaid Student Intuition</h2>
        <Table borderless responsive="lg" variant="light" className="align-middle  w-100">
            <tbody>
                {currentStudents.map((student) => (
                    <tr key={student.id} className="my-2 my-lg-3">
                        <td className="text-nowrap">
                            <div className="d-flex align-items-center">
                                <img
                                    className="rounded-circle me-3 profile-picture"
                                    src={student.profilePicture}
                                    alt="profile picture"
                                />

                                <div className="fw-semibold text-dark fs-small">
                                    {student.name}
                                </div>
                            </div>
                        </td>
                        <td className="text-nowrap">
                            <span className="small text-primary fw-bold">
                                ID:{student.studentId}
                            </span>
                        </td>
                        <td className="text-nowrap">
                            <div className="d-flex align-items-center">
                                <div className="rounded-circle bg-info d-flex align-items-center justify-content-center me-2 profile-picture">
                                    <Person className="text-light" />
                                </div>

                                <div>
                                    <div className="text-gray-400 small">Class</div>
                                    <div className="fw-semibold text-dark small">
                                        {student.class}
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="text-nowrap">
                            <div className="fw-bold text-dark">
                                $ {student.fee}
                            </div>
                        </td>
                        <td className="text-nowrap">
                            <div className="d-flex align-items-center justify-content-between">
                                <Printer className="text-gray-400 card-title" role="button" />
                                {/* <ThreeDots className="text-gray-400 card-title" role="button" /> */}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} startIndex={startIndex} endIndex={endIndex} totalItems={students.length} />

    </>
    )
}
export default StudentPagination