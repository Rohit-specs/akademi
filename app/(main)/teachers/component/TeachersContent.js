"use client"
import { Button, Form, Row } from "react-bootstrap"
import { Plus, Search } from "react-bootstrap-icons"
import DashboardDrawer from "/component/DashboardDrawer"
import TeachersCard from "./TeachersCard"
import Link from "next/link"
import HeaderIcons from "/component/HeaderIcons"
import { useSelector } from "react-redux"
import { useState } from "react"

const TeachersContent = () => {
    const { teachers } = useSelector((state) => state.teacher)
    const [sortBy, setSortBy] = useState("newest")
    const filteredTeachers = [...teachers]
    if (sortBy === "newest") {
        filteredTeachers.sort(
            (a, b) => new Date(b.dateOfBirth) - new Date(a.dateOfBirth)
        )
    }
    if (sortBy === "oldest") {
        filteredTeachers.sort(
            (a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth)
        )
    }
    const handleSort = (e) => {
        setSortBy(e.target.value)
    }
    return (
        <div className="m-lg-4 m-3">
            <header>
                <div className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                    <h1 className="logo">Teachers</h1>
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
                            className="custom-dropdown rounded-pill"
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </Form.Select>

                        <Button
                            as={Link}
                            href="/teachers/add-new-teacher"
                            className="rounded-pill text-nowrap"
                        >
                            <Plus className="fs-4 text-light me-1" />
                            New Teacher
                        </Button>
                    </div>
                </div>
            </header>
            <main>
                <Row className="g-2 g-md-3 g-lg-4">

                    <TeachersCard teachers={filteredTeachers} />
                </Row>


            </main>
        </div>
    )
}

export default TeachersContent