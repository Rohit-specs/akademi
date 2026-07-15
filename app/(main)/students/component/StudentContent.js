"use client"
import { Button, Dropdown, Form, Table } from "react-bootstrap"
import { Bell, Gear, Plus, Search, } from "react-bootstrap-icons"
import DashboardDrawer from "/component/DashboardDrawer"
import Link from "next/link"
import StudentTable from "./StudentTable"
import HeaderIcons from "/component/HeaderIcons"
import { useSelector } from "react-redux"
import { useState } from "react"

const StudentContent = () => {
    const { students } = useSelector((state) => state.student)
    const [sortBy, setSortBy] = useState("newest")
    const filteredStudents = [...students]
    if (sortBy === "newest") {
        filteredStudents.sort(
            (a, b) => new Date(b.dateOfBirth) - new Date(a.dateOfBirth)
        )
    }
    if (sortBy === "oldest") {
        filteredStudents.sort(
            (a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth)
        )
    }
    const handleSort = (e) => {
        setSortBy(e.target.value)
    }
    return (
        <>
            <div className="m-lg-4 m-3">
                <header>
                    <div className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                        <h1 className="logo">Students</h1>
                        <div className="d-xxl-flex gap-4 justify-content-between align-items-center d-none">
                            <HeaderIcons />
                        </div>

                        <DashboardDrawer /></div>
                    <div className="d-flex justify-content-between align-items-center mb-lg-4 mb-2">
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
                        <div className="flex-shrink-0 d-flex align-items-center gap-3 flex-nowrap">
                            <Form.Select
                                value={sortBy}
                                onChange={handleSort}
                                className="custom-dropdown rounded-pill px-5 p-2"
                            >
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                            </Form.Select>

                            <Button
                                as={Link}
                                href="/students/add-new-student/"
                                variant="primary"
                                className="rounded-pill text-nowrap  p-2"
                            >
                                <Plus className="fs-4  me-1" />
                                New Student
                            </Button>
                        </div>

                    </div>
                </header>
                <main className="p-4 bg-light rounded-4">
                    <StudentTable students={filteredStudents} />
                </main>
            </div>
        </>
    )
}

export default StudentContent
