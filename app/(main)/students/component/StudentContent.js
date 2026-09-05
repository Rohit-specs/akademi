"use client"
import { Button, Dropdown, Form, Table } from "react-bootstrap"
import { Bell, Gear, Plus, Search, } from "react-bootstrap-icons"
import DashboardDrawer from "/component/DashboardDrawer"
import Link from "next/link"
import StudentTable from "./StudentTable"
import HeaderIcons from "/component/HeaderIcons"
import { useSelector } from "react-redux"
import { useState } from "react"
import useDebounce from "/hooks/useDebounce"

const StudentContent = () => {
    const [search, setSearch] = useState("")
    const value = useDebounce(search, 500)
    const { students } = useSelector((state) => state.student)
    const [sortBy, setSortBy] = useState("newest")
    const filteredStudents = students.filter((student) => {
        if (!value) return true
        const result = value?.toLowerCase()
        return (
            `${student.firstName} ${student.lastName}`.toLowerCase().includes(result) ||
            (student.studentId.toLowerCase()).includes(result) ||
            (student.grade.toLowerCase()).includes(result)
        )
    }
    )
    if (sortBy === "newest") {
        filteredStudents.sort(
            (a, b) => b.id - a.id
        )
    }
    if (sortBy === "oldest") {
        filteredStudents.sort(
            (a, b) => a.id - b.id
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
                    <div className="d-flex justify-content-between align-items-center mb-lg-4 mb-2 row-gap-2 flex-wrap">
                        <div className="search-box position-relative">
                            <Search
                                size={16}
                                className="text-primary position-absolute top-50 start-0 translate-middle-y ms-3"
                            />

                            <Form.Control
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
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
                                <Plus className="fs-4 me-1"/>
                                New Student
                            </Button>
                        </div>

                    </div>
                </header>
                <main className="p-4 bg-light rounded-4" style={{minWidth:0}}>
                    <StudentTable students={filteredStudents} />
                </main>
            </div>
        </>
    )
}

export default StudentContent
