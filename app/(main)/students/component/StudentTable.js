"use client"
import { useState } from "react"
import { Envelope, Telephone, ThreeDots } from "react-bootstrap-icons"
import Pagination from "/component/Pagination"
import { Button, Dropdown, Table } from "react-bootstrap"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { removeStudent } from "/store/slices/StudentSlice"
import { toast } from "react-toastify"
import { addActivity } from "/store/slices/ActivitySlice"

const StudentTable = ({ students }) => {

    const dispatch = useDispatch()
    const redirect = useRouter()
    const itemPerPage = 6
    const totalPages = Math.ceil(students.length / itemPerPage)
    const [onPage, setOnPage] = useState(1)
    const startIndex = (onPage - 1) * itemPerPage
    const endIndex = startIndex + itemPerPage
    const currentStudents = students.slice(startIndex, endIndex)

    return (
        <>
            <Table responsive={"xl"} variant="light" className="student-table align-middle w-100">
                <thead>
                    <tr>
                        <th className="sidebar-link fs-6">Name</th>
                        <th className="sidebar-link fs-6">ID</th>
                        <th className="sidebar-link fs-6">Date</th>
                        <th className="sidebar-link fs-6">Parent Name</th>
                        <th className="sidebar-link fs-6">City</th>
                        <th className="sidebar-link fs-6">Contact</th>
                        <th className="sidebar-link fs-6">Grade</th>
                        <th className="sidebar-link fs-6">Action</th>
                    </tr>
                </thead>

                <tbody>
                   
                    {
                    currentStudents.length === 0 ?
                    <tr>
                        <td colSpan={8} className="text-center py-5 text-gray-400">
                            No Result Found
                        </td>
                    </tr>
                    :currentStudents.map((student) => (
                        <tr key={student.id}>
                            <td>
                                <div className="d-flex align-items-center gap-1 gap-md-2 gap-lg-3">
                                    <div className="student-avatar rounded-circle bg-purple-10 profile-picture"><img className="profile-picture rounded-circle" src={student.photo} /></div>

                                    <span className="fw-semibold sidebar-link fs-6">
                                        {student.firstName + " " + student.lastName}
                                    </span>
                                </div>
                            </td>

                            <td className="student-id text-primary fw-medium sidebar-link fs-6">
                                #{student.studentId}
                            </td>

                            <td className="text-gray-400 sidebar-link fs-6">
                                {student.dateOfBirth}
                            </td>

                            <td className="sidebar-link fs-6">{student.parentName}</td>

                            <td className="sidebar-link fs-6">{student.address.split(",")[0]}</td>

                            <td>
                                <div className="d-flex gap-2">
                                    <Button
                                        as={"a"}
                                        href={`tel:${student.phone.split("+")[1]}`}
                                        className="contact-btn bg-purple-10 text-white link-opacity-50-hover text-white position-relative rounded-circle border-0"
                                        type="button"
                                    >
                                        <Telephone size={18} className="position-absolute top-50 start-50 translate-middle" />
                                    </Button>

                                    <Button
                                        as="a"
                                        href={`mailto:${student.email}`}
                                        className="contact-btn bg-purple-10 text-white text-link-opacity-75-hover text-white position-relative rounded-circle border-0"
                                        type="button"
                                    >
                                        <Envelope size={18} className="position-absolute top-50 start-50 translate-middle" />
                                    </Button>
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
                                        <Dropdown.Item onClick={() => redirect.push("students/" + student.id)}>View</Dropdown.Item>
                                        <Dropdown.Item onClick={() => redirect.push(`/students/edit/${student.id}`)}>Edit</Dropdown.Item>
                                        <Dropdown.Divider/>
                                        <Dropdown.Item className="text-danger" onClick={() => {
                                            dispatch(removeStudent(student.id))
                                            toast.success("Student Removed Sucessfully")
                                            dispatch(
                                                addActivity({
                                                    user: "Admin",
                                                    action: "removed student",
                                                    target: `${student.firstName} ${student.lastName}`,
                                                    color: "danger",
                                                })
                                            )
                                        }

                                        }>Remove</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table >
        
            <Pagination currentPage={onPage} endIndex={endIndex} startIndex={startIndex} onPageChange={setOnPage} totalPages={totalPages} totalItems={students.length} />
        </>
    )
}

export default StudentTable
